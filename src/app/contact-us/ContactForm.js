"use client";
import React, { useState, useEffect, useRef } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icons/css/flag-icons.min.css';
import { Mail, Phone } from 'lucide-react';
import Button from "@/components/Button";
import StatusPopup from "@/components/StatusPopup";
import allCountries from "../../../public/countries.json";
import "./contactForm.css";

function CustomIntlTelInput({ value, onChange, placeholder, defaultCountry, reset, isSubmitting }) {
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

    // Remove any non-digit characters except the + sign at the beginning and spaces after dial code
    newValue = newValue.replace(/[^\d\s+]/g, '');

    if (!newValue.startsWith(dialCode)) {
      const cleanNumber = newValue.replace(/^\+\d+\s*/, "");
      // Only allow digits in the phone number part
      const numbersOnly = cleanNumber.replace(/\D/g, '');
      const finalValue = numbersOnly ? `${dialCode} ${numbersOnly}` : dialCode;
      setPhoneValue(finalValue);
      onChange(true, finalValue, { iso2: selectedCountry, dialCode: country[2] }, finalValue);
    } else {
      // Extract just the number part after dial code and ensure it's digits only
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
          className="phone-input-field"
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
}

function ContactForm() {
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

  const isFormValid = () => {
    const { firstName, lastName, businessEmail, consent } = contactData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      businessEmail.trim() !== "" &&
      emailRegex.test(businessEmail.trim()) &&
      consent;
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
    setResetPhone(true);
    setTimeout(() => setResetPhone(false), 100);
  };

  const handlePopupClose = () => {
    setPopup(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setPopup(null);

    try {
      const response = await fetch('/api/contact', {
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
          message: 'Thank you for contacting us! We will get back to you soon.',
        });
      } else {
        setPopup({
          status: 'error',
          title: 'Submission Failed',
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setPopup({
        status: 'error',
        title: 'Network Error',
        message: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 md:gap-8 md:items-start">
        <div className="order-1 lg:order-none w-full flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6 p-0 lg:p-6 text-center lg:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Connect with us
            </h1>
            <h4 className="!text-[#5C6371] leading-relaxed">
              Whether it's a service query or a potential collaboration, our team is here to make it happen.
            </h4>
          </div>
          <div className="space-y-4 md:space-y-6 w-full flex flex-col items-center lg:items-start">
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Learn about our services
              </h3>
              <div className="space-y-2 flex flex-col items-center lg:items-start">
                <a
                  href="mailto:sales@bissbay.com"
                  className="flex items-center gap-2 text-primary w-fit text-sm sm:text-base"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>sales@bissbay.com</span>
                </a>
                <a
                  href="tel:+919823662453"
                  className="flex items-center gap-2 text-primary w-fit text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91 982-366-2453</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Talk to our PR Team
              </h3>
              <a
                href="mailto:pr@bissbay.com"
                className="flex items-center gap-2 text-primary w-fit text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>pr@bissbay.com</span>
              </a>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Join Our team
              </h3>
              <a
                href="mailto:career@bissbay.com"
                className="flex items-center gap-2 text-primary w-fit text-sm sm:text-base"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>career@bissbay.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="order-2 lg:order-none w-full max-w-3xl">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 md:gap-6 items-start p-4 sm:p-6 rounded-md shadow-xl transition-all duration-300 border-b-8 border-t-8 border-b-gray-500 border-t-primary">
              <h3 className="text-center w-full">
                Let us know more about you and your goals
              </h3>
              <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
                <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    value={contactData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                    required
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={contactData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                    placeholder="Enter phone number"
                    defaultCountry={defaultCountry}
                    reset={resetPhone}
                    isSubmitting={isSubmitting}
                  />
                </div>

                <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="jobTitle"
                    value={contactData.jobTitle}
                    onChange={handleChange}
                    placeholder="Job Title"
                    className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                    disabled={isSubmitting}
                  />
                  <input
                    type="text"
                    name="companyName"
                    value={contactData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                    disabled={isSubmitting}
                  />
                </div>
                <textarea
                  name="question"
                  value={contactData.question}
                  onChange={handleChange}
                  placeholder="Enter your question here"
                  rows={3}
                  className="w-full px-5 py-3 rounded-xl border focus:border-1 border-gray-300 font-semibold focus:border-primary focus:outline-none"
                  disabled={isSubmitting}
                />

                <div className="flex flex-col-reverse sm:flex-row justify-between w-full items-start sm:items-center gap-4 sm:gap-3">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={contactData.consent}
                      onChange={handleChange}
                      className="accent-primary h-5 w-5 rounded-xl border border-gray-300 mt-1 flex-shrink-0"
                      required
                      disabled={isSubmitting}
                    />
                    <span className="text-sm">
                      <span className="font-semibold">Your consent matters to us*</span>
                      <br />
                      I agree to Bissbay's {" "}
                      <a href="/terms-of-use" className="text-primary">Terms of Use</a>{" "}
                      and{" "}
                      <a href="/policies/privacy-policy" target="_blank" className="text-primary">
                        Policy
                      </a>.
                    </span>
                  </div>
                  <Button
                    type="submit"
                    label={isSubmitting ? "Submitting..." : "Submit"}
                    disabled={!isFormValid() || isSubmitting}
                    customClass={
                      isFormValid() && !isSubmitting
                        ? "cursor-pointer"
                        : "!bg-gray-400 cursor-not-allowed"
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
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
}

export default ContactForm;