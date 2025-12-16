"use client";
import React, { useState, useEffect, useRef } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icons/css/flag-icons.min.css';
import allCountries from "../../public/countries.json";

function CustomIntlTelInput({ value, onChange, placeholder, defaultCountry, reset }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneValue, setPhoneValue] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const country = allCountries.find(c => c[1] === defaultCountry.toLowerCase());
    if (country) {
      setSelectedCountry(country[1]);
      const dialCode = `+${country[2]}`;
      setPhoneValue(`${dialCode} `);
    }
  }, [defaultCountry]);

  useEffect(() => {
    if (reset) {
      const country = allCountries.find(c => c[1] === selectedCountry);
      if (country) {
        setPhoneValue(`+${country[2]} `);
      }
    }
  }, [reset, selectedCountry]);

  useEffect(() => {
    if (value === "") {
      const country = allCountries.find(c => c[1] === selectedCountry);
      if (country) {
        setPhoneValue(`+${country[2]} `);
      }
    }
  }, [value, selectedCountry]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = allCountries.filter(country =>
    country[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
    country[2].includes(searchTerm)
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country[1]);
    const dialCode = `+${country[2]}`;
    const currentNumber = phoneValue.replace(/^\+\d+\s*/, "");
    const newValue = currentNumber ? `${dialCode} ${currentNumber}` : `${dialCode} `;
    setPhoneValue(newValue);

    if (currentNumber.trim()) {
      onChange(true, newValue.trim(), { iso2: country[1] }, newValue.trim());
    } else {
      onChange(false, "", { iso2: country[1] }, "");
    }

    setIsOpen(false);
    setSearchTerm("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputChange = (isValid, value, countryData, number) => {
    const dialCode = countryData ? `+${countryData.dialCode}` : "";
    if (value && !value.startsWith(dialCode)) {
      const newValue = `${dialCode} ${value.replace(/^\+\d+\s*/, "")}`.trim();
      setPhoneValue(newValue);
      onChange(isValid, newValue, countryData, newValue);
    } else {
      setPhoneValue(value || dialCode);
      onChange(isValid, value, countryData, number);
    }
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handlePhoneInputChange = (e) => {
    const inputValue = e.target.value;
    const country = allCountries.find(c => c[1] === selectedCountry);
    const dialCode = country ? `+${country[2]}` : "";

    // Only allow numbers, spaces, and the plus sign for dial code
    const cleanedValue = inputValue.replace(/[^\d\s+]/g, '');

    if (!cleanedValue.startsWith(dialCode)) {
      const cleanNumber = cleanedValue.replace(/^\+\d+\s*/, "").replace(/\D/g, '');
      const finalValue = cleanNumber ? `${dialCode} ${cleanNumber}` : `${dialCode} `;
      setPhoneValue(finalValue);

      const hasActualNumber = cleanNumber.trim().length > 0;
      onChange(hasActualNumber, hasActualNumber ? finalValue.trim() : "", { iso2: selectedCountry, dialCode: country[2] }, hasActualNumber ? finalValue.trim() : "");
    } else {
      // Extract only the number part after dial code and clean it
      const numberPart = cleanedValue.replace(dialCode, "").trim().replace(/\D/g, '');
      const newValue = numberPart ? `${dialCode} ${numberPart}` : `${dialCode} `;
      setPhoneValue(newValue);

      const hasActualNumber = numberPart.length > 0;
      onChange(hasActualNumber, hasActualNumber ? newValue.trim() : "", { iso2: selectedCountry, dialCode: country[2] }, hasActualNumber ? newValue.trim() : "");
    }
  };

  const handleKeyDown = (e) => {
    const country = allCountries.find(c => c[1] === selectedCountry);
    const dialCode = country ? `+${country[2]} ` : "";
    const cursorPosition = e.target.selectionStart;

    // Prevent backspace/delete from removing dial code
    if ((e.key === 'Backspace' || e.key === 'Delete') && cursorPosition <= dialCode.length) {
      e.preventDefault();
    }
  };

  const handleClick = (e) => {
    const country = allCountries.find(c => c[1] === selectedCountry);
    const dialCode = country ? `+${country[2]} ` : "";
    const cursorPosition = e.target.selectionStart;

    // Prevent cursor from being placed before the dial code
    if (cursorPosition < dialCode.length) {
      e.target.setSelectionRange(dialCode.length, dialCode.length);
    }
  };

  return (
    <div className="intl-tel-input-wrapper" ref={dropdownRef}>
      <div className="intl-tel-input-container">
        <div className="custom-flag-dropdown">
          <button
            type="button"
            className="selected-flag"
            onClick={toggleDropdown}
            aria-expanded={isOpen}
          >
            <span className={`fi fi-${selectedCountry}`}></span>
            <span className="arrow-icon">▾</span>
          </button>

          {isOpen && (
            <div className="country-list-dropdown">
              <div className="search-box">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search country..."
                  className="search-input"
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <ul className="country-list">
                {filteredCountries.map((country, index) => (
                  <li
                    key={`${country[1]}-${index}`}
                    className="country-item"
                    onClick={() => handleCountrySelect(country)}
                  >
                    <span className={`fi fi-${country[1]}`}></span>
                    <span className="country-name">{country[0]}</span>
                    <span className="dial-code">+{country[2]}</span>
                  </li>
                ))}
                {filteredCountries.length === 0 && (
                  <li className="no-results">No countries found</li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div style={{ display: 'none' }}>
          <IntlTelInput
            ref={inputRef}
            preferredCountries={[selectedCountry]}
            defaultCountry={selectedCountry}
            excludeCountries={['il']}
            value={phoneValue}
            onPhoneNumberChange={handleInputChange}
            fieldName="phoneNumber"
            separateDialCode={false}
            formatOnDisplay={true}
            nationalMode={false}
          />
        </div>

        <input
          type="tel"
          value={phoneValue}
          onChange={handlePhoneInputChange}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          onFocus={handleClick}
          placeholder={placeholder}
          className="phone-input-field"
        />
      </div>
    </div>
  );
}

export default CustomIntlTelInput;