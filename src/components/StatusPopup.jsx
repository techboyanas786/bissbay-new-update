import React from "react";

const StatusPopup = ({ status, title, message, onClose }) => {
  const isSuccess = status === "success";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-sm p-6 text-center animate-fadeIn">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          {isSuccess ? (
            <div className="bg-green-100 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="bg-red-100 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Title */}
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}

        {/* Message */}
        <p className="text-gray-600 mb-6">{message}</p>

        {/* Close button */}
        <button
          onClick={onClose}
          className={`px-4 py-2 rounded-xl font-medium text-white ${
            isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          Close
        </button>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeInScale 0.3s ease-in-out;
        }
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default StatusPopup;
