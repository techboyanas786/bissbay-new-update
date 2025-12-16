import React, { useEffect, useRef, useState } from "react";

const MultiSelectField = ({ name, values = [], value = "", className, onChange, placeholder, options, required, isMulti = true, dropUp = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShouldOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    const newOpenState = !isOpen;
    if (newOpenState && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    }
    setIsOpen(newOpenState);
    setShouldOpen(newOpenState);
  };

  const handleCheckboxChange = (option, checked) => {
    const newValues = checked
      ? [...values, option]
      : values.filter(val => val !== option);
    onChange({ target: { name, value: newValues } });
  };

  const handleSingleSelect = (option) => {
    onChange({ target: { name, value: option === placeholder ? "" : option } });
    setIsOpen(false);
    setShouldOpen(false);
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`w-full border border-gray-300 font-semibold px-3 md:px-5 py-2 md:py-3 rounded-xl text-left focus:border-1 focus:border-primary focus:outline-none  ${className}`}
        onClick={handleToggle}
      >
        {isMulti ? (values.length > 0 ? values.join(", ") : placeholder) : (value || placeholder)}
        <span className="float-right">
          <svg 
            width="10" 
            height="10" 
            style={{ 
              marginTop: "8px",
              marginLeft: "10px",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out"
            }} 
            viewBox="0 0 10 6" 
            fill="#5C6371" 
            stroke="#5c6371" 
            strokeWidth="0.7" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M0.528514 0.528596C0.788864 0.268247 1.21097 0.268247 1.47132 0.528596L4.99992 4.05719L8.52851 0.528596C8.78886 0.268247 9.21097 0.268247 9.47132 0.528596C9.73167 0.788946 9.73167 1.21106 9.47132 1.47141L5.47132 5.47141C5.21097 5.73175 4.78886 5.73175 4.52851 5.47141L0.528514 1.47141C0.268165 1.21106 0.268165 0.788946 0.528514 0.528596Z"></path>
          </svg>
        </span>
      </button>
      
      {shouldOpen && (
        <div
          className={`multi-select-dropdown fixed z-[10000] bg-white border border-gray-300 rounded-xl max-h-80 overflow-auto transition-all duration-200 ease-in-out ${
            isOpen
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform -translate-y-2 pointer-events-none'
          }`}
          style={{
            top: `${dropdownPosition.top}px`,
            left: `${dropdownPosition.left}px`,
            width: `${dropdownPosition.width}px`,
          }}
        >
          {isMulti ? (
            <>
              <div className="px-4 py-2 text-gray-400">
                {placeholder}
              </div>
              {options.map(option => (
                <label key={option} className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-150">
                  <input
                    type="checkbox"
                    value={option}
                    checked={values.includes(option)}
                    onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                    className="accent-primary h-4 w-4 mr-2"
                  />
                  {option}
                </label>
              ))}
            </>
          ) : (
            <>
              <div
                className="px-4 py-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                onClick={() => handleSingleSelect(placeholder)}
              >
                {placeholder}
              </div>
              {options.map(option => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                  onClick={() => handleSingleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MultiSelectField;