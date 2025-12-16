"use client";
import React, { useState, useEffect, useRef } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icons/css/flag-icons.min.css';
import allCountries from "./../../public/countries.json";
import "./../app/contact-us/contactForm.css";
import StatusPopup from "./StatusPopup";
import ReCAPTCHA from "react-google-recaptcha";

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
      setPhoneValue(dialCode);
    }
  }, [defaultCountry]);

  useEffect(() => {
    if (reset) {
      const country = allCountries.find(c => c[1] === selectedCountry);
      if (country) {
        setPhoneValue(`+${country[2]}`);
      }
    }
  }, [reset, selectedCountry]);

  useEffect(() => {
    if (value === "") {
      const country = allCountries.find(c => c[1] === selectedCountry);
      if (country) {
        setPhoneValue(`+${country[2]}`);
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
    const newValue = currentNumber ? `${dialCode} ${currentNumber}`.trim() : dialCode;
    setPhoneValue(newValue);

    if (currentNumber.trim()) {
      onChange(true, newValue, { iso2: country[1] }, newValue);
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

    const cleanedValue = inputValue.replace(/[^\d\s+]/g, '');

    if (!cleanedValue.startsWith(dialCode)) {
      const cleanNumber = cleanedValue.replace(/^\+\d+\s*/, "").replace(/\D/g, '');
      const finalValue = cleanNumber ? `${dialCode} ${cleanNumber}`.trim() : dialCode;
      setPhoneValue(finalValue);

      const hasActualNumber = cleanNumber.trim().length > 0;
      onChange(hasActualNumber, hasActualNumber ? finalValue : "", { iso2: selectedCountry, dialCode: country[2] }, hasActualNumber ? finalValue : "");
    } else {
      const numberPart = cleanedValue.replace(dialCode, "").trim().replace(/\D/g, '');
      const newValue = numberPart ? `${dialCode} ${numberPart}` : dialCode;
      setPhoneValue(newValue);

      const hasActualNumber = numberPart.length > 0;
      onChange(hasActualNumber, hasActualNumber ? newValue : "", { iso2: selectedCountry, dialCode: country[2] }, hasActualNumber ? newValue : "");
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
          placeholder={placeholder}
          className="phone-input-field"
        />
      </div>
    </div>
  );
}

function CaseStudiesPopup({ isOpen, onClose }) {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    phoneNumber: "",
    businessEmail: "",
    companyName: "",
    question: "",
    consent: false,
  });

  const [defaultCountry, setDefaultCountry] = useState("in");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);
  const [resetPhone, setResetPhone] = useState(false);
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    Promise.race([
      fetch("https://ipapi.co/json/", { signal: controller.signal }),
      new Promise((_, reject) => setTimeout(() => reject("timeout"), 3000))
    ])
      .then(res => res.json())
      .then(data => setDefaultCountry(data.country_code.toLowerCase()))
      .catch(() => setDefaultCountry("in"));
    return () => controller.abort();
  }, []);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePhoneChange = (isValid, value, selectedCountryData, fullNumber) => {
    setContactData((prev) => ({
      ...prev,
      phoneNumber: fullNumber || value || "",
    }));
  };

  const resetForm = () => {
    setContactData({
      firstName: "",
      lastName: "",
      jobTitle: "",
      phoneNumber: "",
      businessEmail: "",
      companyName: "",
      question: "",
      consent: false,
    });
    setVerified(false);
    setResetPhone(true);
    setTimeout(() => setResetPhone(false), 100);
  };

  const handlePopupClose = () => {
    setPopup(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/casestudies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (response.ok) {
        resetForm();
        setPopup({
          status: 'success',
          title: 'Success!',
          message: 'Thank you for your submission! We will get back to you soon.',
        });
        setTimeout(() => {
          onClose();
        }, 2000);
      } else {
        setPopup({
          status: 'error',
          title: 'Submission Failed',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setPopup({
        status: 'error',
        title: 'Network Error',
        message: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return contactData.firstName.trim() &&
      contactData.lastName.trim() &&
      contactData.businessEmail.trim() &&
      contactData.phoneNumber.trim() &&
      contactData.consent &&
      verified;
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1001] flex items-center justify-center bg-[#00000060] backdrop-blur-sm p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl relative">
        <button
          onClick={handleClose}
          className="absolute text-gray-400 hover:text-gray-600 transition-colors z-50"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative p-6 pt-12">

          <div className="mb-6">
            <h3 className="font-semibold text-xl text-center mb-2">
              Explore Our Case Studies
            </h3>
            <p className="text-gray-600 text-center">
              Proven strategies. Real results. Learn how we help companies accelerate growth.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={contactData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="lastName"
                  value={contactData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="businessEmail"
                  value={contactData.businessEmail}
                  onChange={handleChange}
                  placeholder="Business Email"
                  className="w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="companyName"
                  value={contactData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  disabled={isSubmitting}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="jobTitle"
                  value={contactData.jobTitle}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="w-full border border-gray-300 font-semibold px-4 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  disabled={isSubmitting}
                />
                <CustomIntlTelInput
                  value={contactData.phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="Enter phone number"
                  defaultCountry={defaultCountry}
                  disabled={isSubmitting}
                  reset={resetPhone}
                />
              </div>
              <textarea
                name="question"
                value={contactData.question}
                onChange={handleChange}
                placeholder="Enter your question here"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border focus:border-1 border-gray-300 font-semibold focus:border-primary focus:outline-none"
                disabled={isSubmitting}
              />
              <div className="w-full flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                   
                  onChange={() => setVerified(true)}
                />
              </div>

              <div className="flex justify-center flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-6">
                <button
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`text-white font-semibold px-6 py-3 rounded-xl ${isFormValid() && !isSubmitting
                    ? "cursor-pointer bg-primary"
                    : "cursor-not-allowed bg-gray-400"
                    }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>

                <div className="flex flex-row gap-2 items-center">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={contactData.consent}
                    onChange={handleChange}
                    className="accent-primary rounded-md border border-gray-300 w-5 h-5 flex-shrink-0 mt-0.5"
                    required
                    disabled={isSubmitting}
                  />
                  <span className="text-sm">
                    <span className="font-semibold">Your consent matters to us*</span>
                    <br />
                    I agree to Bissbay's{" "}
                    <a href="/terms-of-use" className="text-primary">Terms of Use</a>{" "}
                    and{" "}
                    <a href="/policies/privacy-policy" target="_blank" className="text-primary">
                      Privacy Policy
                    </a>.
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {popup && (
        <StatusPopup
          status={popup.status}
          message={popup.message}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}

export default CaseStudiesPopup;