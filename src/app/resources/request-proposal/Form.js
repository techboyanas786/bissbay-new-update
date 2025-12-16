import React, { useEffect, useRef, useState } from "react";
import Stepper, { Step } from "./Stepper";
import ReCAPTCHA from "react-google-recaptcha";
import Button from "@/components/Button";
import allCountries from "./../../../../public/countries.json";
import IntlTelInput from "react-intl-tel-input";
import "./../../contact-us/contactForm.css";
import "react-intl-tel-input/dist/main.css";
import "flag-icons/css/flag-icons.min.css";
import MultiSelectField from "./MultiSelectField";
import StatusPopup from "@/components/StatusPopup";

// Add loading skeleton component
const LoadingSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-8"></div>
    <div className="space-y-4">
      <div className="h-32 bg-gray-200 rounded"></div>
      <div className="h-14 bg-gray-200 rounded"></div>
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        <div className="h-14 bg-gray-200 rounded"></div>
        <div className="h-14 bg-gray-200 rounded"></div>
        <div className="h-14 bg-gray-200 rounded"></div>
      </div>
    </div>
  </div>
);

// Reusable Input Component
const InputField = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required,
  className = "",
}) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={`w-full border border-gray-300 font-semibold px-3 md:px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none ${className}`}
  />
);

function CustomIntlTelInput({ value, onChange, placeholder, defaultCountry }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneValue, setPhoneValue] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const country = allCountries.find(
      (c) => c[1] === defaultCountry.toLowerCase()
    );
    if (country) {
      setSelectedCountry(country[1]);
      const dialCode = `+${country[2]}`;
      if (!value || value === "") {
        const initialValue = `${dialCode} `;
        setPhoneValue(initialValue);
      } else if (!value.startsWith("+")) {
        setPhoneValue(`${dialCode} ${value}`);
      } else {
        setPhoneValue(value);
      }
    }
  }, [defaultCountry, value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = allCountries.filter(
    (country) =>
      country[0].toLowerCase().includes(searchTerm.toLowerCase()) ||
      country[2].includes(searchTerm)
  );

  const handleCountrySelect = (country) => {
    const dialCode = `+${country[2]}`;
    const currentNumber = phoneValue.replace(/^\+\d+\s*/, "");
    const newValue = `${dialCode} ${currentNumber}`;
    setSelectedCountry(country[1]);
    setPhoneValue(newValue);
    const hasActualNumber = currentNumber.trim().length > 0;
    onChange(
      hasActualNumber,
      hasActualNumber ? newValue : "",
      { iso2: country[1], dialCode: country[2] },
      hasActualNumber ? newValue : "",
      ""
    );
    setIsOpen(false);
    setSearchTerm("");
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handlePhoneInputChange = (e) => {
    const newValue = e.target.value;
    const country = allCountries.find((c) => c[1] === selectedCountry);
    const dialCode = country ? `+${country[2]}` : "";
    const finalValue = !newValue.startsWith(dialCode)
      ? `${dialCode} ${newValue.replace(/^\+\d+\s*/, "")}`
      : newValue;
    setPhoneValue(finalValue);
    const hasActualNumber =
      finalValue.replace(/[\s+()-]/g, "").length >
      dialCode.replace("+", "").length;
    onChange(
      hasActualNumber,
      hasActualNumber ? finalValue : "",
      { iso2: selectedCountry, dialCode: country?.[2] },
      hasActualNumber ? finalValue : "",
      ""
    );
  };


  const handleIntlInputChange = (isValid, value, countryData, number, ext) => {
    const dialCode = countryData ? `+${countryData.dialCode}` : "";
    const finalValue =
      value && !value.startsWith(dialCode)
        ? `${dialCode} ${value.replace(/^\+\d+\s*/, "")}`
        : value || "";
    setPhoneValue(finalValue);
    const hasActualNumber =
      finalValue.replace(/[\s+()-]/g, "").length >
      dialCode.replace("+", "").length;
    const validNumber = hasActualNumber && isValid;
    onChange(
      validNumber,
      validNumber ? (finalValue === value ? value : finalValue) : "",
      countryData,
      validNumber ? (finalValue === value ? number : finalValue) : "",
      ext
    );
  };

  return (
    <div className="intl-tel-input-wrapper" ref={dropdownRef}>
      <div className="intl-tel-input-container">
        <div className="custom-flag-dropdown">
          <button
            type="button"
            className="selected-flag"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
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
                {!filteredCountries.length && (
                  <li className="no-results">No countries found</li>
                )}
              </ul>
            </div>
          )}
        </div>
        <div style={{ display: "none" }}>
          <IntlTelInput
            ref={inputRef}
            preferredCountries={[selectedCountry]}
            defaultCountry={selectedCountry}
            excludeCountries={["il"]}
            value={phoneValue}
            onPhoneNumberChange={handleIntlInputChange}
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

// Form configuration data
const GOALS = [
  "Improve lead conversion rates",
  "Expand into new markets/verticals",
  "Increase marketing generated pipeline",
  "Gain access to new accounts (ABM/ABX)",
];

const SELECT_OPTIONS = {
  icp: ["Yes", "No"],
  region: ["APAC", "EMEA", "NAMER", "LATAM", "Others"],
  level: ["C-suite", "Vice President", "Director", "Manager", "Staff"],
  function: ["Finance", "IT", "Marketing", "Operations", "Sales"],
  funnel: ["TOFU", "MOFU", "BOFU"],
  timeline: ["< 3 months", "3-6 months", "6-12 months", "> 12 months"],
};

function RequestProposalForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);
  const [stepperKey, setStepperKey] = useState(0);
  const [defaultCountry, setDefaultCountry] = useState("in");
  const [formData, setFormData] = useState({
    goals: [],
    ICP: "",
    funnel: [],
    quantity: "",
    region: [],
    level: [],
    function: [],
    timeline: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    email: "",
    phoneNumber: "",
    consent: false,
  });

  // Fetch country code based on IP address
  useEffect(() => {
    const controller = new AbortController();
    Promise.race([
      fetch("https://ipapi.co/json/", { signal: controller.signal }),
      new Promise((_, reject) => setTimeout(() => reject("timeout"), 3000)),
    ])
      .then((res) => res.json())
      .then((data) => setDefaultCountry(data.country_code.toLowerCase()))
      .catch(() => setDefaultCountry("in"));
    return () => controller.abort();
  }, []);

  // Simulate component initialization
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "quantity") {
      const numericValue = value.replace(/[^0-9]/g, '');
      if (numericValue === '' || parseInt(numericValue) >= 0) {
        setFormData((prev) => ({
          ...prev,
          [name]: numericValue,
        }));
      }
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" && name !== "goals" ? checked : value,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoalChange = (goal, checked) => {
    setFormData((prev) => ({
      ...prev,
      goals: checked
        ? [...prev.goals, goal]
        : prev.goals.filter((g) => g !== goal),
    }));
  };

  const handlePhoneChange = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    ext
  ) => {
    setFormData((prev) => ({
      ...prev,
      phoneNumber: value || "",
    }));
  };

  const validateStep1 = () => {
    if (formData.goals.length === 0) {
      setMessage("Please select at least one goal.");
      return false;
    }
    if (!formData.ICP) {
      setMessage(
        "Please select whether you have your ICP/Buyer Persona ready."
      );
      return false;
    }
    if (formData.ICP === "Yes") {
      const atLeastOneSelected =
        formData.region.length > 0 ||
        formData.level.length > 0 ||
        formData.function.length > 0;
      if (!atLeastOneSelected) {
        setMessage(
          "When ICP is 'Yes', please select at least one of: Region, Job Level, or Job Function."
        );
        return false;
      }
    }
    const hasAtLeastOne = formData.funnel.length > 0 || formData.timeline || formData.quantity;
    if (!hasAtLeastOne) {
      setMessage("Please fill at least one of: Funnel Stage, Timeline, or Quantity.");
      return false;
    }
    setMessage("");
    return true;
  };

  const validateStep2 = () =>
    formData.firstName &&
    formData.lastName &&
    formData.jobTitle &&
    formData.company &&
    formData.email &&
    formData.phoneNumber &&
    formData.consent &&
    verified;

  const getValidationErrors = () => {
    const errors = [];
    if (!formData.firstName) errors.push("First Name");
    if (!formData.lastName) errors.push("Last Name");
    if (!formData.jobTitle) errors.push("Job Title");
    if (!formData.company) errors.push("Company");
    if (!formData.email) errors.push("Email");
    if (!formData.phoneNumber) errors.push("Phone number");
    if (!formData.consent) errors.push("Consent checkbox");
    if (!verified) errors.push("ReCAPTCHA verification");
    if (errors.length > 0) {
      return `Please complete: ${errors.join(", ")}`;
    }
    return "";
  };

  const resetForm = () => {
    setFormData({
      goals: [],
      ICP: "",
      funnel: [],
      quantity: "",
      region: [],
      level: [],
      function: [],
      timeline: "",
      firstName: "",
      lastName: "",
      jobTitle: "",
      company: "",
      email: "",
      phoneNumber: "",
      consent: false,
    });
    setVerified(false);
    setMessage("");
    setStepperKey((prev) => prev + 1);
  };

  const handlePopupClose = () => {
    setPopup(null);
  };

  const handleSubmit = async (e, onComplete) => {
    e.preventDefault();
    if (!validateStep2()) {
      setMessage(getValidationErrors());
      return;
    }
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/requestproposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        resetForm();
        setPopup({
          status: "success",
          title: "Success!",
          message:
            "Thank you for your submission! We will get back to you soon.",
        });
      } else {
        setPopup({
          status: "error",
          title: "Submission Failed",
          message: data.error || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setPopup({
        status: "error",
        title: "Network Error",
        message: "Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full transition-all duration-300 ">
      {isLoading ? (
        <div className="mt-8">
          <LoadingSkeleton />
        </div>
      ) : (
        <div className="fade-in rounded-md px-2 md:px-6 p-4 md:p-6 shadow-xl border-b-6 transition-all duration-300 border-t-6 border-b-gray-500 border-t-primary max-w-full">
          <h2 className="text-[#5C6371] font-semibold text-center mb-4 md:mb-6">
            Request a Proposal Today
          </h2>
          <Stepper
            key={stepperKey}
            initialStep={1}
            onStepChange={(step) => {
              if (step === 2 && !validateStep1()) {
                return false;
              }
              setMessage("");
              return true;
            }}
            onFinalStepCompleted={() => true}
            backButtonText="Previous"
            nextButtonText="Next"
            hideSubmitButton={true}
          >
            {/* Step 1 */}
            <Step>
              <form onSubmit={(e) => e.preventDefault()}>
                {/* Goals */}
                <div className="mb-4 md:mb-6 border px-3 md:px-5 py-3 rounded-xl border-gray-300">
                  <p className="!font-semibold mb-3">
                    What are your main goals for purchasing leads?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GOALS.map((goal) => (
                      <label key={goal} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={goal}
                          checked={formData.goals.includes(goal)}
                          onChange={(e) =>
                            handleGoalChange(goal, e.target.checked)
                          }
                          className="accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0"
                          disabled={isSubmitting}
                        />
                        <p className="md:!text-base !text-sm">{goal}</p>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="mb-4 md:mb-6">
                  <MultiSelectField
                    name="ICP"
                    value={formData.ICP}
                    onChange={handleMultiSelectChange}
                    placeholder="Ready with your ICP / Buyer Persona?"
                    options={SELECT_OPTIONS.icp}
                    required
                    isMulti={false}
                    disabled={isSubmitting}
                  />
                </div>
                {formData.ICP !== "No" && (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6 mb-4 md:mb-6">
                    <MultiSelectField
                      name="region"
                      values={formData.region}
                      onChange={handleMultiSelectChange}
                      placeholder="Select Region"
                      options={SELECT_OPTIONS.region}
                      required={formData.ICP === "Yes"}
                      isMulti={true}
                      disabled={isSubmitting}
                    />
                    <MultiSelectField
                      name="level"
                      values={formData.level}
                      onChange={handleMultiSelectChange}
                      placeholder="Select Job Level"
                      options={SELECT_OPTIONS.level}
                      required={formData.ICP === "Yes"}
                      isMulti={true}
                      disabled={isSubmitting}
                    />
                    <MultiSelectField
                      name="function"
                      values={formData.function}
                      onChange={handleMultiSelectChange}
                      placeholder="Select Job Function"
                      options={SELECT_OPTIONS.function}
                      required={formData.ICP === "Yes"}
                      isMulti={true}
                      disabled={isSubmitting}
                    />
                  </div>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 md:gap-6 md:mb-0">
                  <MultiSelectField
                    name="funnel"
                    values={formData.funnel}
                    onChange={handleMultiSelectChange}
                    placeholder="Select Funnel Stage"
                    options={SELECT_OPTIONS.funnel}
                    required
                    isMulti={true}
                    disabled={isSubmitting}
                  />
                  <MultiSelectField
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleMultiSelectChange}
                    placeholder="Select Timeline"
                    options={SELECT_OPTIONS.timeline}
                    required
                    isMulti={false}
                    disabled={isSubmitting}
                  />
                  <InputField
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Enter Quantity"
                    min={0}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </form>
              {message && (
                <div className="bg-red-50 border-l-4 border-red-500 p-3 mt-5">
                  <p className="text-red-700">
                    {message}
                  </p>
                </div>
              )}
            </Step>

            {/* Step 2 */}
            <Step>
              {({ onComplete }) => (
                <form onSubmit={(e) => handleSubmit(e, onComplete)}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:gap-6">
                    <InputField
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      disabled={isSubmitting}
                    />
                    <InputField
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      disabled={isSubmitting}
                    />
                    <InputField
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Business Email"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="w-full">
                      <CustomIntlTelInput
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="Enter phone number"
                        defaultCountry={defaultCountry}
                        disabled={isSubmitting}
                      />
                    </div>
                    <InputField
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      placeholder="Enter Job Title"
                      required
                      disabled={isSubmitting}
                    />
                    <InputField
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter Company"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mt-4 md:mt-6">
                    <textarea
                      name="question"
                      value={formData.question || ""}
                      onChange={handleChange}
                      placeholder="Enter your question here"
                      rows={3}
                      className="w-full px-5 py-3 rounded-xl border focus:border-1 border-gray-300 font-semibold focus:border-primary focus:outline-none"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="mt-4 md:mt-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
                      <div className="flex items-center gap-3 md:justify-start justify-center">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="accent-primary h-5 w-5 rounded-xl border border-gray-300 mt-1 flex-shrink-0"
                          required
                          disabled={isSubmitting}
                        />
                        <span className="text-sm">
                          <span className="font-semibold">
                            Your consent matters to us*
                          </span>
                          <br />I agree to Bissbay's{" "}
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
                      </div>
                      <div className="md:w-[304px] h-[78px] flex items-center justify-center">
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                          onChange={() => setVerified(true)}
                        />
                      </div>
                      <Button
                        type="submit"
                        label={isSubmitting ? "Submitting..." : "Submit"}
                        disabled={!validateStep2() || isSubmitting}
                        customClass={
                          validateStep2() && !isSubmitting
                            ? "cursor-pointer"
                            : "!bg-gray-400 cursor-not-allowed"
                        }
                      />
                    </div>
                  </div>
                </form>
              )}
            </Step>
          </Stepper>
        </div>
      )}

      {/* Status Popup */}
      {popup && (
        <StatusPopup
          status={popup.status}
          message="A precision-tailored proposal designed to deliver results is on its way."
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}

export default RequestProposalForm;
