import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import BookingCalendar from "./BookingCalendar";
import Button from "./Button";
import StatusPopup from "./StatusPopup";

const BookingModal = ({ isOpen, onClose, buttonLabel = "Book Now" }) => {
  const [mounted, setMounted] = useState(false);
  const [popup, setPopup] = useState(null);
  const [resetCalendar, setResetCalendar] = useState(false);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
      setMounted(true);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle close with form reset
  const handleClose = () => {
    setResetCalendar(true);
    setTimeout(() => {
      setResetCalendar(false);
      onClose();
    }, 50);
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handlePopupClose = () => {
    setPopup(null);
  };

  const showPopup = (popupData) => {
    setPopup(popupData);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000060] backdrop-blur-sm transition-opacity"
          onClick={handleBackdropClick}
        >
          <div 
            className={`relative w-full max-w-4xl h-auto overflow-hidden bg-white rounded-xl shadow-xl transform transition-all duration-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              style={{ position: 'absolute', top: '16px', right: '16px' }}
              aria-label="Close modal"
            >
              <MdClose className="text-gray-700" size={24} />
            </button>
            <div className="h-full overflow-auto">
              <BookingCalendar onClose={handleClose} showPopup={showPopup} resetTrigger={resetCalendar} />
            </div>
          </div>
        </div>
      )}

      {popup && (
        <StatusPopup
          status={popup.status}
          title={popup.title}
          message={popup.message}
          onClose={handlePopupClose}
        />
      )}
    </>
  );
};

// Button component that opens the modal
export const BookingButton = ({ label = "Book Now", variant = "primary", customClass = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        label={label}
        variant={variant}
        customClass={customClass}
        onClick={() => setIsModalOpen(true)}
      />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default BookingModal;