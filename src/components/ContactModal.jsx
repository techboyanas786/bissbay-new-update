"use client";
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icons/css/flag-icons.min.css';
import Button from "./Button";
import StatusPopup from "./StatusPopup";
import allCountries from "../../public/countries.json";
import "../app/contact-us/contactForm.css";
import ReCAPTCHA from "react-google-recaptcha";

// Dropdown options
const companySizeOptions = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1000",
  "1001-5000",
  "5001-10000",
  "10001+"
];

const budgetOptions = [
  "$0-$5,000",
  "Unsure",
  "$5,000+"
];

const industryOptions = [
  "Agriculture & Natural Resources",
  "Construction, Real Estate & Infrastructure",
  "Creative & Cultural",
  "Education & Training",
  "Energy, Utilities & Environment",
  "Finance & Business Services (BFSI)",
  "Government, Nonprofit & Public Sector",
  "Healthcare & Life Sciences",
  "Human Resources & Staffing",
  "Information Technology",
  "Legal Services",
  "Logistics, Supply Chain & Transportation",
  "Manufacturing & Industrial",
  "Marketing, Media & Communications",
  "Retail, Consumer & Lifestyle",
  "Other Specialized Services",
];


// Custom Dropdown Component
const CustomDropdown = ({ value, onChange, options, placeholder, name, disabled, searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldOpen, setShouldOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setShouldOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = (e) => {
    e.preventDefault();
    if (disabled) return;
    const newOpenState = !isOpen;
    setIsOpen(newOpenState);
    setShouldOpen(newOpenState);
    if (searchable && newOpenState) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
    if (!newOpenState) {
      setSearchTerm("");
    }
  };

  // Filter options based on search term
  const filteredOptions = searchable && searchTerm
    ? options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : options;

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        className={`w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none text-left flex justify-between items-center ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover:border-gray-400'
          }`}
      >
        <span className={value ? 'text-gray-900' : 'text-gray-500'}>
          {value || placeholder}
        </span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            width="10"
            height="10"
            style={{
              marginTop: "5px",
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
          className={`absolute z-10 w-full bottom-full mb-1 bg-white border border-gray-300 rounded-xl max-h-60 overflow-y-auto transition-all duration-200 ease-in-out ${isOpen
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-2 pointer-events-none'
            }`}
        >
          {/* Search input for searchable dropdowns */}
          {searchable && (
            <div className="sticky top-0 z-10 p-2 bg-white border-b border-gray-200">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Reset option - shows placeholder text */}
          <button
            type="button"
            onClick={() => {
              onChange({ target: { name, value: "" } });
              setIsOpen(false);
              setShouldOpen(false);
              setSearchTerm("");
            }}
            className="w-full px-5 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none font-semibold transition-colors duration-150 text-gray-500 border-b border-gray-200"
          >
            {placeholder}
          </button>

          {/* Show filtered options or "no results" message */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  onChange({ target: { name, value: option } });
                  setIsOpen(false);
                  setShouldOpen(false);
                  setSearchTerm("");
                }}
                className="w-full px-5 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none font-semibold transition-colors duration-150"
              >
                {option}
              </button>
            ))
          ) : searchable && searchTerm ? (
            <div className="px-5 py-3 text-gray-500 text-center">
              No results found
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

function CustomIntlTelInput({ value, onChange, placeholder, defaultCountry, reset, isSubmitting }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneValue, setPhoneValue] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const country = allCountries.find(c => c[1] === defaultCountry?.toLowerCase());
    if (country) {
      setSelectedCountry(country[1]);
      setPhoneValue(`+${country[2]} `);
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
    const newValue = `${dialCode} ${currentNumber}`;
    setPhoneValue(newValue);
    onChange(true, newValue, { iso2: country[1] }, newValue);
    setIsOpen(false);
    setSearchTerm("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleInputChange = (isValid, value, countryData, number) => {
    const dialCode = countryData ? `+${countryData.dialCode}` : "";
    if (value && !value.startsWith(dialCode)) {
      const newValue = `${dialCode} ${value.replace(/^\+\d+\s*/, "")}`;
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
    let newValue = e.target.value;
    const country = allCountries.find(c => c[1] === selectedCountry);
    const dialCode = country ? `+${country[2]}` : "";

    newValue = newValue.replace(/[^\d\s+]/g, '');

    if (!newValue.startsWith(dialCode)) {
      const cleanNumber = newValue.replace(/^\+\d+\s*/, "");
      const numbersOnly = cleanNumber.replace(/\D/g, '');
      const finalValue = numbersOnly ? `${dialCode} ${numbersOnly}` : dialCode;
      setPhoneValue(finalValue);
      onChange(true, finalValue, { iso2: selectedCountry, dialCode: country[2] }, finalValue);
    } else {
      const numberPart = newValue.replace(dialCode, '').trim().replace(/\D/g, '');
      const finalValue = numberPart ? `${dialCode} ${numberPart}` : dialCode;
      setPhoneValue(finalValue);
      onChange(true, finalValue, { iso2: selectedCountry, dialCode: country[2] }, finalValue);
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
          className="phone-input-field w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
}


const ContactModal = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  // Form data for step 1
  const [contactData, setContactData] = useState({
    fullName: "",
    jobTitle: "",
    businessEmail: "",
    phoneNumber: "",
    companyName: "",
    companySize: "",
    budget: "",
    industry: "",
    customIndustry: "",
    consent: false,
  });

  // Booking data from step 2
  const [bookingData, setBookingData] = useState(null);
  const [defaultCountry, setDefaultCountry] = useState("in");
  const [resetPhone, setResetPhone] = useState(false);
  const [verified, setVerified] = useState(false);

  // Step 2 calendar state
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("9:00 AM");
  const [showAllTimes, setShowAllTimes] = useState(false);
  const [userTimezone, setUserTimezone] = useState("Asia/Kolkata");
  const [timezoneLoading, setTimezoneLoading] = useState(true);
  const [showYearSelector, setShowYearSelector] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    Promise.race([
      fetch("https://ipapi.co/json/", { signal: controller.signal }),
      new Promise((_, reject) => setTimeout(() => reject("timeout"), 3000))
    ])
      .then(res => res.json())
      .then(data => {
        setDefaultCountry(data.country_code.toLowerCase());
        if (data.timezone) {
          setUserTimezone(data.timezone);
        } else {
          setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        }
        setTimezoneLoading(false);
      })
      .catch(() => {
        setDefaultCountry("in");
        setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        setTimezoneLoading(false);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      setMounted(true);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showYearSelector) {
        const yearSelector = event.target.closest('.relative');
        if (!yearSelector || !yearSelector.contains(event.target)) {
          setShowYearSelector(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showYearSelector]);

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // const handleBackdropClick = (e) => {
  //   if (e.target === e.currentTarget) {
  //     handleClose();
  //   }
  // };

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

  const isStep1Valid = () => {
    const { fullName, businessEmail, consent, industry, customIndustry } = contactData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic required fields
    const basicFieldsValid = fullName.trim() !== "" &&
      businessEmail.trim() !== "" &&
      emailRegex.test(businessEmail.trim()) &&
      consent &&
      verified;

    // If "Other (Specifiy)" is selected, customIndustry is required
    if (industry === "Other (Specifiy)") {
      return basicFieldsValid && customIndustry.trim() !== "";
    }

    return basicFieldsValid;
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      if (currentStep === 1 && !isStep1Valid()) return;
      if (currentStep === 2) {
        // Handle step 2 to step 3 transition
        handleConfirmBooking();
        return;
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBookingComplete = (data) => {
    setBookingData(data);
    setCurrentStep(3); // Move to confirmation step
  };

  const resetForm = () => {
    setContactData({
      fullName: "",
      jobTitle: "",
      businessEmail: "",
      phoneNumber: "",
      companyName: "",
      companySize: "",
      budget: "",
      industry: "",
      customIndustry: "",
      consent: false,
    });
    setBookingData(null);
    setCurrentStep(1);
    setVerified(false);
    setResetPhone(true);
    setTimeout(() => setResetPhone(false), 100);
  };


  const handleFinalSubmit = async (passedBookingData = null) => {
    setIsSubmitting(true);

    try {
      const currentBookingData = passedBookingData || bookingData;

      const finalData = {
        ...contactData,
        industry: contactData.industry === "Other (Specifiy)" ? contactData.customIndustry : contactData.industry,
        selectedDate: currentBookingData?.selectedDate || null,
        selectedTime: currentBookingData?.selectedTime || null,
        userTimezone: currentBookingData?.userTimezone || userTimezone,
        formattedDate: currentBookingData?.formattedDate || null,
        type: 'consultation_booking'
      };

      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus({
          status: 'success',
          title: 'Booking Confirmed!',
          message: 'Thank you! We will contact you soon with consultation details.',
        });
        setTimeout(() => {
          handleClose();
        }, 5000);
      } else {
        setSubmissionStatus({
          status: 'error',
          title: 'Submission Failed',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus({
        status: 'error',
        title: 'Network Error',
        message: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 1: Contact Information
  const renderStep1 = () => (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Let us know more about your company</h2>
        <p className="text-gray-600">To see how Bissbay could boost your B2B sales</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="fullName"
            value={contactData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
            required
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="jobTitle"
            value={contactData.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="email"
            name="businessEmail"
            value={contactData.businessEmail}
            onChange={handleChange}
            placeholder="Business Email"
            className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
            required
            disabled={isSubmitting}
          />
          <CustomIntlTelInput
            value={contactData.phoneNumber}
            onChange={handlePhoneChange}
            placeholder="Phone Number"
            defaultCountry={defaultCountry}
            reset={resetPhone}
            isSubmitting={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            name="companyName"
            value={contactData.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
            disabled={isSubmitting}
          />

          <CustomDropdown
            value={contactData.companySize}
            onChange={handleChange}
            options={companySizeOptions}
            placeholder="Company Size"
            name="companySize"
            disabled={isSubmitting}
          />

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CustomDropdown
            value={contactData.industry}
            onChange={handleChange}
            options={industryOptions}
            placeholder="Industry"
            name="industry"
            disabled={isSubmitting}
            searchable={true}
          />
          <CustomDropdown
            value={contactData.budget}
            onChange={handleChange}
            options={budgetOptions}
            placeholder="Budget"
            name="budget"
            disabled={isSubmitting}
          />
        </div>

        {/* Custom Industry Input - Show when 'Other' is selected */}
        {contactData.industry === "Other (Specifiy)" && (
          <div>
            <input
              type="text"
              name="customIndustry"
              value={contactData.customIndustry}
              onChange={handleChange}
              placeholder="Please specify your industry"
              className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
              disabled={isSubmitting}
              required
            />
          </div>
        )}

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={contactData.consent}
            onChange={handleChange}
            className="accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0"
            required
            disabled={isSubmitting}
          />
          <span className="text-sm">
            By submitting the form I agree to Bissbay's{" "}
            <a href="/terms-of-use" className="text-primary">
              Terms of Use
            </a>{" "}
            and{" "}
            <a
              href="/policies/privacy-policy"
              target="_blank"
              className="text-primary"
            >Policy
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );

  // Helper functions for calendar
  const formatMonth = (date) => {
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const formatDate = (date) => {
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const formatDayOfWeek = (date) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
  };

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const addMonths = (date, months) => {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getMonth() + months);
    return newDate;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("9:00 AM");
    setShowAllTimes(false);
  };

  const isDateSelectable = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateToCheck = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    dateToCheck.setHours(0, 0, 0, 0);

    return dateToCheck > today;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const getTimezoneDisplayName = (timezone) => {
    try {
      return new Intl.DateTimeFormat('en', {
        timeZone: timezone,
        timeZoneName: 'long'
      }).formatToParts(new Date()).find(part => part.type === 'timeZoneName')?.value || timezone;
    } catch (error) {
      return timezone;
    }
  };

  const getCurrentYear = () => new Date().getFullYear();

  const getFutureYears = () => {
    const currentYear = getCurrentYear();
    const years = [];
    for (let i = 0; i < 10; i++) {
      years.push(currentYear + i);
    }
    return years;
  };

  const handleYearSelect = (year) => {
    const newDate = new Date(viewDate);
    newDate.setFullYear(year);

    const today = new Date();
    if (year === getCurrentYear() && newDate < today) {
      newDate.setMonth(today.getMonth());
      if (newDate < today) {
        newDate.setMonth(today.getMonth() + 1);
      }
    }

    setViewDate(newDate);
    setShowYearSelector(false);

    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth();
    const selectedDay = selectedDate.getDate();

    if (year !== selectedYear) {
      const newSelectedDate = new Date(year, selectedMonth, selectedDay);
      if (newSelectedDate <= today) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setSelectedDate(tomorrow);
      } else {
        setSelectedDate(newSelectedDate);
      }
    }
  };

  const handleConfirmBooking = () => {
    const bookingInfo = {
      selectedDate: selectedDate.toISOString().split('T')[0],
      selectedTime: selectedTime,
      userTimezone: userTimezone,
      formattedDate: formatDayOfWeek(selectedDate)
    };
    setBookingData(bookingInfo);
    setCurrentStep(3);
    setTimeout(() => {
      handleFinalSubmit(bookingInfo);
    }, 100);
  };

  // Step 2: Calendar Selection Only
  const renderStep2 = () => {
    const initialTimes = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
    const extraTimes = ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

    const currentMonthDays = getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth());
    const firstDayOfMonth = getFirstDayOfMonth(viewDate);

    const dates = [
      ...Array(firstDayOfMonth).fill(null),
      ...Array.from({ length: currentMonthDays }, (_, i) => i + 1)
    ];

    const isSameDay = (day) => {
      return (
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === viewDate.getMonth() &&
        selectedDate.getFullYear() === viewDate.getFullYear()
      );
    };

    const getTimesToShow = () => {
      return showAllTimes ? [...initialTimes, ...extraTimes] : initialTimes;
    };

    const timesToShow = getTimesToShow();

    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 overflow-auto">
          <div className="flex h-full">
            {/* Left Side - Calendar */}
            <div className="w-[40%] p-6 border-r border-gray-200">
              <h2 className="!text-lg font-semibold mb-4 text-left">Pick your spot</h2>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => setViewDate(addMonths(viewDate, -1))}
                  className="text-primary hover:bg-orange-50 w-7 h-7 rounded flex items-center justify-center transition-colors"
                >
                  <span className="text-xl">←</span>
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowYearSelector(!showYearSelector)}
                    className="!text-base font-medium hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {formatMonth(viewDate)}
                    <span className="text-xs">▾</span>
                  </button>

                  {showYearSelector && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[120px]">
                      <div className="max-h-48 overflow-y-auto">
                        {getFutureYears().map((year) => (
                          <button
                            key={year}
                            onClick={() => handleYearSelect(year)}
                            className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                              year === viewDate.getFullYear()
                                ? 'bg-primary text-white hover:bg-primary'
                                : 'text-gray-700'
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => setViewDate(addMonths(viewDate, 1))}
                  className="text-primary hover:bg-orange-50 w-7 h-7 rounded flex items-center justify-center transition-colors"
                >
                  <span className="text-xl">→</span>
                </button>
              </div>

              {/* Days of the week */}
              <div className="grid grid-cols-7 text-center text-sm !font-semibold text-[#5C6371] mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
                  <div key={idx} className="py-1">{day}</div>
                ))}
              </div>

              {/* Dates grid */}
              <div className="grid grid-cols-7 text-center">
                {dates.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} className="h-8" />;
                  }
                  const isSelectable = isDateSelectable(day);
                  return (
                    <button
                      key={day}
                      onClick={() => isSelectable && handleDateChange(new Date(viewDate.getFullYear(), viewDate.getMonth(), day))}
                      disabled={!isSelectable}
                      className={`h-8 text-sm rounded transition-colors ${!isSelectable
                        ? "text-gray-300 cursor-not-allowed"
                        : isSameDay(day)
                          ? "bg-primary text-white font-medium"
                          : "hover:bg-gray-100 text-gray-700"
                        }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Service Details */}
            <div className="flex-1 p-6 flex flex-col">
              {/* Time zone info - moved up and right-aligned */}
              <div className="text-xs text-black mb-4 font-medium text-left">
                {timezoneLoading ? (
                  "Detecting timezone..."
                ) : (
                  `Time zone: ${getTimezoneDisplayName(userTimezone)}`
                )}
              </div>

              {/* Time slots section */}
              <h3 className="!text-sm font-medium mb-3 text-gray-700">
                Availability for {formatDayOfWeek(selectedDate)}
              </h3>

              <div className="flex flex-wrap gap-2 mb-3">
                {timezoneLoading ? (
                  <div className="text-sm text-gray-500">Loading time slots...</div>
                ) : (
                  timesToShow.map((time) => (
                    <button
                      key={time}
                      onClick={() => handleTimeSelect(time)}
                      className={`border px-3 py-1.5 rounded-full text-sm transition-colors ${time === selectedTime
                        ? "bg-primary text-white border-primary"
                        : "border-gray-300 text-gray-700 hover:border-primary"
                        }`}
                    >
                      {time}
                    </button>
                  ))
                )}
              </div>

              {/* Show all sessions toggle */}
              <button
                onClick={() => setShowAllTimes((prev) => !prev)}
                className="text-primary text-sm font-medium hover:text-primary mb-6 transition-colors text-left"
              >
                {showAllTimes ? "Show less" : "Show all sessions"}
              </button>

              {/* Service Details section */}
              <h3 className="!text-base font-semibold mb-3">Service Details</h3>

              <div className="bg-orange-50 p-3 rounded-lg text-center">
                <h4 className="!text-base font-medium text-gray-800">Free Consultation</h4>
                <p className="!text-sm text-gray-600 mt-1">
                  {formatDate(selectedDate)} at {selectedTime}
                </p>
                <p className="!text-sm text-gray-600">Virtual Meeting</p>
                <p className="!text-sm text-gray-600">45 mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Step 3: Confirmation
  const renderStep3 = () => (
    <div className="h-full text-gray-900 relative">

      <div className="relative z-10 p-6 h-full flex flex-col justify-center">
        <div className="text-center mb-6">
          <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${submissionStatus?.status === 'error' ? 'bg-red-100' : 'bg-green-100'
            }`}>
            {submissionStatus?.status === 'error' ? (
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <h2 className={`!text-2xl !font-bold mb-2 ${submissionStatus?.status === 'error' ? '!text-red-900' : '!text-gray-900'
            }`}>
            {submissionStatus ? submissionStatus.title : 'Processing...'}
          </h2>
          <p className="!text-gray-600">
            {submissionStatus ? submissionStatus.message : 'Please wait while we confirm your booking...'}
          </p>
        </div>

        {submissionStatus?.status === 'success' && (
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="!text-gray-800 !font-semibold !text-base !leading-tight">
                    List your current sales and process challenges
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="!text-gray-800 !font-semibold !text-base !leading-tight">
                    Bring questions to properly evaluate Bissbay as a partner
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="!text-gray-800 !font-semibold !text-base !leading-tight">
                    Confirm the meeting has been scheduled to your calendar
                  </h3>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow relative">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="!text-gray-800 !font-semibold !text-base !leading-tight">
                    Invite colleagues who can benefit from our discussion
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {submissionStatus?.status === 'error' && (
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Please try again or contact support if the problem persists.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  const modalContent = (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[1001] flex items-center justify-center bg-[#00000060] backdrop-blur-sm p-4"
        >
          <div
            className={`relative w-full max-w-4xl max-h-[95vh] overflow-hidden bg-white rounded-xl shadow-xl transform transition-all duration-300 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              style={{ position: 'absolute', top: '16px', right: '16px' }}
              aria-label="Close modal"
            >
              <MdClose className="text-gray-700" size={24} />
            </button>


            {/* Step Content */}
            <div className="overflow-x-hidden overflow-y-auto" style={{ maxHeight: 'calc(95vh - 160px)' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && renderStep1()}
                  {currentStep === 2 && renderStep2()}
                  {currentStep === 3 && renderStep3()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {currentStep === 1 && (
              <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                   
                  onChange={() => setVerified(true)}
                />
                <Button
                  label="Next"
                  onClick={handleNext}
                  disabled={!isStep1Valid() || isSubmitting}
                  customClass={
                    !isStep1Valid() || isSubmitting
                      ? "!bg-gray-400 cursor-not-allowed"
                      : ""
                  }
                />
              </div>
            )}
            {currentStep === 2 && (
              <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <Button
                  variant="outlinegray"
                  customClass="hover:!bg-gray-500"
                  label="Back"
                  onClick={handleBack}
                  disabled={isSubmitting}
                />
                <Button
                  label="Confirm Booking"
                  onClick={handleConfirmBooking}
                  disabled={isSubmitting}
                />
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );

  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
};

export const ContactButton = ({ label = "Contact Us", variant = "primary", customClass = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        label={label}
        variant={variant}
        customClass={customClass}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ContactModal;