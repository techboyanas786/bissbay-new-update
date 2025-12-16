import React, { useState, useEffect, useRef } from "react";
import { ThumbsUp } from "lucide-react";
import { getUserId } from "@/lib/userUtils";

const reactions = [
  {
    id: "like",
    icon: "/reactionIcons/like.svg",
    label: "Like"
  },
  {
    id: "love",
    icon: "/reactionIcons/love.svg",
    label: "Love"
  },
  {
    id: "support",
    icon: "/reactionIcons/support.svg",
    label: "Support",
  },
  {
    id: "insightful",
    icon: "/reactionIcons/insightful.svg",
    label: "Insightful",
  },
  {
    id: "funny",
    icon: "/reactionIcons/funny.svg",
    label: "Funny",
  },
  {
    id: "clap",
    icon: "/reactionIcons/clap.svg",
    label: "Clap",
  },
];

export default function ReactionButton({ blog, onReact, preloadedStats = null }) {
  const [showReactions, setShowReactions] = useState(false);
  const [userReaction, setUserReaction] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    like: 0,
    love: 0,
    support: 0,
    insightful: 0,
    funny: 0,
    clap: 0
  });
  const containerRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  // Fetch user's current reaction and reaction counts on component mount
  useEffect(() => {
    if (preloadedStats) {
      setReactionCounts(preloadedStats.reactionCounts);
      fetchUserReaction();
    } else {
      // Always fetch fresh reaction counts from API
      fetchUserReaction();
    }
  }, [blog.id]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const fetchUserReaction = async () => {
    try {
      const userId = getUserId();
      if (!userId) {
        const response = await fetch(`/api/blogs/${blog.id}/reactions`);
        if (response.ok) {
          const data = await response.json();
          setReactionCounts(data.reactionCounts);
        }
        return;
      }

      const response = await fetch(`/api/blogs/${blog.id}/reactions?userId=${userId}`);
      if (response.ok) {
        const data = await response.json();
        setUserReaction(data.userReaction ? reactions.find(r => r.id === data.userReaction) : null);
        setReactionCounts(data.reactionCounts);
      }
    } catch (error) {
      // Silent fail - reactions will still work, just won't show previous state
    }
  };

  const handleReaction = async (reaction) => {
    const userId = getUserId();
    if (!userId) {
      return;
    }

    const previousReaction = userReaction;
    const previousCounts = { ...reactionCounts };

    try {
      // If user clicks the same reaction, remove it
      if (userReaction?.id === reaction.id) {
        // Optimistically update UI
        setUserReaction(null);
        setReactionCounts(prev => ({
          ...prev,
          [reaction.id]: Math.max(0, prev[reaction.id] - 1)
        }));
        setShowReactions(false);

        if (onReact) {
          onReact(blog.id, null, reaction.id);
        }

        // Then call API in background
        fetch(`/api/blogs/${blog.id}/reactions?userId=${userId}`, {
          method: 'DELETE'
        }).then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to delete reaction');
          }
        }).then(data => {
          setReactionCounts(data.reactionCounts);
        }).catch(() => {
          setUserReaction(previousReaction);
          setReactionCounts(previousCounts);
        });
      } else {
        // Optimistically update UI
        const prevReactionId = userReaction?.id;
        setUserReaction(reaction);
        setReactionCounts(prev => {
          const updated = { ...prev };
          if (prevReactionId) {
            updated[prevReactionId] = Math.max(0, updated[prevReactionId] - 1);
          }
          updated[reaction.id] = updated[reaction.id] + 1;
          return updated;
        });
        setShowReactions(false);

        if (onReact) {
          onReact(blog.id, reaction.id, userReaction?.id);
        }

        // Then call API in background
        fetch(`/api/blogs/${blog.id}/reactions`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId,
            reactionType: reaction.id
          })
        }).then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to add reaction');
          }
        }).then(data => {
          setReactionCounts(data.reactionCounts);
        }).catch(() => {
          setUserReaction(previousReaction);
          setReactionCounts(previousCounts);
        });
      }
    } catch (error) {
      setUserReaction(previousReaction);
      setReactionCounts(previousCounts);
    }
  };

  const totalReactions = Object.values(reactionCounts).reduce(
    (sum, val) => sum + val,
    0
  );

  const activeReactions = reactions.filter(
    (r) => reactionCounts[r.id] > 0
  );

  const handleMouseEnter = () => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Set a small delay before showing
    hoverTimeoutRef.current = setTimeout(() => {
      setShowReactions(true);
    }, 300);
  };

  const handleMouseLeave = () => {
    // Clear the show timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Set a delay before hiding to allow user to reach the popup
    closeTimeoutRef.current = setTimeout(() => {
      setShowReactions(false);
    }, 500);
  };

  const handlePopupMouseEnter = () => {
    // Clear close timeout when entering popup
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handlePopupMouseLeave = () => {
    // Close when leaving popup
    closeTimeoutRef.current = setTimeout(() => {
      setShowReactions(false);
    }, 200);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes popIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <div
        className="relative flex flex-row-reverse gap-4 items-end"
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
      >
      {/* Reaction Summary */}
      {totalReactions > 0 && (
        <div
          className="flex items-center gap-2 mb-2 text-sm text-gray-600"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {activeReactions.slice(0, 3).map((reaction, index) => (
                <div
                  key={reaction.id}
                  className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white shadow-sm border-2 border-white"
                  style={{
                    marginLeft: index > 0 ? '-8px' : '0',
                    zIndex: 3 - index
                  }}
                  title={reaction.label}
                >
                  <img
                    src={reaction.icon}
                    alt={reaction.label}
                    className="w-5 h-5"
                    style={{ maxWidth: '20px', maxHeight: '20px' }}
                    onError={(e) => {
                      e.target.style.backgroundColor = '#e5e5e5';
                      e.target.alt = reaction.label;
                    }}
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              {totalReactions === 1 ? 'You' : `You and ${totalReactions - 1} other${totalReactions > 2 ? 's' : ''}`}
            </span>
          </div>
        </div>
      )}

      {/* Main React Button */}
      <div className="relative">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 hover:shadow-sm ${
            userReaction
              ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
          } ${
            showReactions ? 'ring-2 ring-blue-200' : ''
          }`}
        >
          <ThumbsUp className={`w-4 h-4 ${userReaction ? 'text-blue-700' : 'text-gray-700'}`} />
          <span className="text-black">Like</span>
        </button>

        {/* Reaction Picker */}
        {showReactions && (
          <div
            className="absolute bottom-full mb-2 p-2 left-0 flex border border-gray-200 rounded-2xl shadow-2xl backdrop-blur-sm space-x-1 z-50"
            style={{
              animation: 'popIn 0.3s ease-out forwards'
            }}
            onMouseEnter={handlePopupMouseEnter}
            onMouseLeave={handlePopupMouseLeave}
          >
            {reactions.map((reaction, index) => (
              <button
                key={reaction.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleReaction(reaction);
                }}
                className={`group relative transform transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-[1.2] hover:-translate-y-2 rounded-full bg-gray-50 hover:bg-white !mx-1 cursor-pointer hover:shadow-2xl hover:shadow-black/20 hover:z-10 ${
                  userReaction?.id === reaction.id
                    ? 'ring-2 ring-blue-300 ring-offset-2 scale-105 bg-blue-50'
                    : ''
                }`}
                style={{
                  animation: `fadeUp 0.4s ease-out ${index * 0.1}s both`,
                  transformOrigin: 'center bottom'
                }}
                title={reaction.label}
                type="button"
              >
                <img
                  src={reaction.icon}
                  alt={reaction.label}
                  className="w-8 h-8 transition-all duration-300"
                  style={{ maxWidth: '32px', maxHeight: '32px' }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}