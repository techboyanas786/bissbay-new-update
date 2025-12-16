"use client";
import { useEffect, useState, useRef } from "react";
import MiniSearch from "minisearch";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onClose }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [miniSearch, setMiniSearch] = useState(null);
    const searchRef = useRef(null);

    useEffect(() => {
        async function loadData() {
            const res = await fetch("/locales/en-US/search.json");
            const data = await res.json();

            let ms = new MiniSearch({
                fields: ["title", "content"],
                storeFields: ["title", "content", "url"],
            });

            ms.addAll(data);
            setMiniSearch(ms);
        }

        loadData();

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        if (!miniSearch) return;
        if (query.trim() === "") {
            setResults([]);
        } else {
            setResults(
                miniSearch.search(query, {
                    prefix: true,
                    fuzzy: 0.2,
                })
            );
        }
    }, [query, miniSearch]);

    // Get excerpt around matched text with the match centered
    function getExcerptWithHighlight(text, keyword, maxLength = 60) {
        if (!keyword || !text) return text;
        
        // Find the position of the keyword (case-insensitive)
        const lowerText = text.toLowerCase();
        const lowerKeyword = keyword.toLowerCase();
        const matchIndex = lowerText.indexOf(lowerKeyword);
        
        if (matchIndex === -1) {
            // If no match found, return beginning of text
            return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
        }
        
        // We want to center the match in our excerpt
        const matchLength = keyword.length;
        const matchCenter = matchIndex + Math.floor(matchLength / 2);
        
        // Calculate ideal excerpt boundaries to center the match
        const excerptRadius = Math.floor(maxLength / 2);
        let start = Math.max(0, matchCenter - excerptRadius);
        let end = Math.min(text.length, matchCenter + excerptRadius);
        
        // Ensure we capture the entire match
        if (start > matchIndex) {
            start = matchIndex;
        }
        if (end < matchIndex + matchLength) {
            end = matchIndex + matchLength;
        }
        
        // If we hit the beginning or end of text, adjust the other boundary
        if (start === 0 && end < maxLength) {
            end = Math.min(text.length, maxLength);
        }
        if (end === text.length && text.length - start < maxLength) {
            start = Math.max(0, text.length - maxLength);
        }
        
        // Extract the excerpt
        let excerpt = text.substring(start, end);
        
        // Add ellipsis markers
        if (start > 0) excerpt = "..." + excerpt;
        if (end < text.length) excerpt = excerpt + "...";
        
        return excerpt;
    }

    // Highlight typed text
    function highlight(text, keyword) {
        if (!keyword || !text) return text;
        const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
        return text.split(regex).map((part, i) =>
            regex.test(part) ? (
                <span key={i} className="text-primary font-semibold">
                    {part}
                </span>
            ) : (
                part
            )
        );
    }

    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-start p-6 z-50 justify-center bg-[#00000060] backdrop-blur-sm transition-opacity">
            <motion.div
                ref={searchRef}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white w-full max-w-2xl rounded-xl shadow-xl p-6 relative"
            >
                <div className="relative w-full border-1 border-primary rounded-xl flex items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full border-none bg-transparent text-gray-500 px-4 py-2 focus:outline-none focus:ring-0"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />
                    <FiSearch className="text-primary absolute right-2" />
                </div>

                <div className="mt-4 max-h-[80vh] overflow-y-auto">
                    {query.trim() !== "" && results.length === 0 && (
                        <p className="text-gray-500">No results found</p>
                    )}
                    {query.trim() !== "" && (
                        <ul>
                            {results.map((r, i) => {
                                // Get excerpt that includes the matched text, centered
                                const excerpt = getExcerptWithHighlight(r.content, query, 70);
                                
                                return (
                                    <li
                                        key={r.id || i}
                                        className="p-2 hover:bg-gray-100 rounded-xl"
                                    >
                                        <a href={r.url} className="block">
                                            <h3 className="font-semibold">{highlight(r.title, query)}</h3>
                                            <p className="text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
                                                {highlight(excerpt, query)}
                                            </p>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </motion.div>
        </div>
    );
}