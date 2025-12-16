"use client";
import { useState, useEffect, useRef } from "react";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icons/css/flag-icons.min.css';
import ReCAPTCHA from 'react-google-recaptcha';
import Button from "@/components/Button";
import allCountries from "../../public/countries.json";
import "../app/contact-us/contactForm.css";

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

export default function FormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    skills: [],
    consent: false,
  });
  const [defaultCountry, setDefaultCountry] = useState("in");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetPhone, setResetPhone] = useState(false);
  const [currentSkill, setCurrentSkill] = useState("");
  const [verified, setVerified] = useState(false); // Track reCAPTCHA verification

  useEffect(() => {
    const controller = new AbortController();
    Promise.race([
      fetch("https://ipapi.co/json/", { signal: controller.signal }),
      new Promise((_, reject) => setTimeout(() => reject("timeout"), 3000))
    ])
      .then(res => res.json())
      .then(data => {
        const countryCode = data.country_code.toLowerCase();
        const country = allCountries.find(c => c[1] === countryCode);
        if (country) {
          setDefaultCountry(countryCode);
          setFormData(prev => ({
            ...prev,
            country: country[0],
          }));
        } else {
          setDefaultCountry("in");
          setFormData(prev => ({
            ...prev,
            country: "India",
          }));
        }
      })
      .catch(() => {
        setDefaultCountry("in");
        setFormData(prev => ({
          ...prev,
          country: "India",
        }));
      });
    return () => controller.abort();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));
  };

  const handleSkillInputChange = (e) => {
    setCurrentSkill(e.target.value);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === "Enter" && currentSkill.trim()) {
      e.preventDefault();
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handlePhoneChange = (isValid, value, selectedCountryData, fullNumber) => {
    setFormData((prev) => ({
      ...prev,
      phone: fullNumber || value || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!verified) return; // Prevent submission if not verified
    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const submitFormData = new FormData();
      submitFormData.append("firstName", formData.firstName);
      submitFormData.append("lastName", formData.lastName);
      submitFormData.append("email", formData.email);
      submitFormData.append("country", formData.country);
      submitFormData.append("phone", formData.phone);
      submitFormData.append("skills", formData.skills.join(", "));
      submitFormData.append("consent", formData.consent);

      // Add resume file if present
      if (formData.resume) {
        submitFormData.append("resume", formData.resume);
      }

      // Send to API
      const response = await fetch("/api/career", {
        method: "POST",
        body: submitFormData,
      });

      const result = await response.json();

      if (response.ok) {
        // Success - reset form
        setFormData({
          country: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          resume: null,
          skills: [],
          consent: false,
        });
        setCurrentSkill("");
        setResetPhone(true);
        setVerified(false); // Reset reCAPTCHA
        setTimeout(() => setResetPhone(false), 100);

        // Show success message (you may want to add a toast notification here)
        alert("Application submitted successfully!");
        onClose();
      } else {
        // Error handling
        alert(result.error || "Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    const { country, firstName, lastName, email, phone, consent } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      country.trim() !== "" &&
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      emailRegex.test(email.trim()) &&
      phone.trim() !== "" &&
      consent &&
      verified // Require reCAPTCHA verification
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Apply for Job</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg">Join our Talent Community!</h3>
          <p className="text-base text-gray-600 leading-relaxed">
            Make a Connection! Our Talent Network allows you to learn about new job
            opportunities and receive alerts that match your interests.
          </p>

          <div className="flex flex-col gap-6 items-start w-full">
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Business Email"
              className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
              required
              disabled={isSubmitting}
            />
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country / Territory"
                className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                required
                disabled={isSubmitting}
              />
              <CustomIntlTelInput
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                defaultCountry={defaultCountry}
                reset={resetPhone}
                isSubmitting={isSubmitting}
              />
            </div>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
              disabled={isSubmitting}
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload DOC, DOCX, PDF, or TXT (max 5MB)
            </p>
            <div className="w-full">
              <input
                type="text"
                value={currentSkill}
                onChange={handleSkillInputChange}
                onKeyDown={handleSkillKeyDown}
                placeholder="Type to add skills and press Enter"
                className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                disabled={isSubmitting}
              />
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-chip flex items-center bg-gray-100 border border-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                      disabled={isSubmitting}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              className="transform scale-75 sm:scale-100"
              onChange={() => setVerified(true)}
            />
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-3">
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
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="accent-primary h-5 w-5 rounded-xl border border-gray-300 mt-1 flex-shrink-0"
                  required
                  disabled={isSubmitting}
                />
                <span className="text-xs sm:text-sm">
                  <span className="font-semibold hidden sm:inline">
                    Your consent matters to us*
                  </span>
                  <span className="sm:hidden">
                    By providing my phone number, I agree to receive recurring automated
                    marketing texts. Msg & data rates may apply. Frequency varies. Text HELP
                    for help or STOP to opt out. See our{" "}
                    <a href="/terms-of-use" className="text-primary">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="/policies/privacy-policy"
                      target="_blank"
                      className="text-primary"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                  <span className="hidden sm:inline">
                    <br />
                    I consent to my data being stored on the website's external
                    servers, accessed, processed, & used to contact me.
                    <br />
                    For more information, see our{" "}
                    <a href="/terms-of-use" className="text-primary">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="/policies/privacy-policy"
                      target="_blank"
                      className="text-primary"
                    >
                      Policy
                    </a>
                    .
                  </span>
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}