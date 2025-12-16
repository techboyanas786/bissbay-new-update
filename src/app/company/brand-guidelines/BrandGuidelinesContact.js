"use client";
import React, { useState, useEffect } from "react";
import "./../../contact-us/contactForm.css";
import StatusPopup from "@/components/StatusPopup";
import dynamic from "next/dynamic";
import Button from "@/components/Button";

const CustomIntlTelInput = dynamic(() => import("@/components/CustomIntlTelInput"), {
  ssr: false,
});

function BrandGuidelinesContact() {
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

    try {
      const response = await fetch('/api/brandguidelines', {
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
      contactData.consent;
  };

  return (
    <div className="w-full max-w-3xl">
      <div className="flex flex-col gap-8">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 md:gap-6 items-start p-2 sm:p-6 rounded-md bg-white shadow-xl border-b-8 transition-all duration-300 border-t-8 border-b-gray-500 border-t-primary">
            <h3 className="text-center w-full">
              Explore Our Brand Guidelines
            </h3>
            <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
                  disabled={isSubmitting}
                  reset={resetPhone}
                />
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
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
              <div className="flex w-full flex-col-reverse items-start gap-4 lg:flex-row-reverse lg:items-center lg:gap-6">
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
                <div className="flex flex-row gap-2 md:justify-start justify-center w-full items-center">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={contactData.consent}
                    onChange={handleChange}
                    className="accent-primary rounded-xl border border-gray-300 w-5 h-5 flex-shrink-0"
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
              </div>
            </div>
          </div>
        </form>
      </div>
      {popup && (
        <StatusPopup
          status={popup.status}
          message="Thank you! You’ll have it in your inbox shortly."
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
}

export default BrandGuidelinesContact;