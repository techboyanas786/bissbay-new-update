import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import StatusPopup from "./StatusPopup";
import allCountries from "../../public/countries.json";
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icons/css/flag-icons.min.css';
import "../app/contact-us/contactForm.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// Universal time slots (8 AM to 6 PM - same for all regions)
const initialTimes = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"];
const extraTimes = ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

// Simple timezone conversion - server handles the complex logic
const getISTPreview = (localTime, userTimezone) => {
  // If user is in India, no conversion needed
  if (userTimezone === 'Asia/Kolkata') {
    return localTime;
  }

  // For other timezones, show a placeholder that will be calculated on server
  return `${localTime} (Local time - will be converted to IST`;
};

const get24HourFormat = (time12Hour) => {
  const [time, period] = time12Hour.split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  let adjustedHours = hours;

  if (period === 'PM' && hours !== 12) {
    adjustedHours += 12;
  } else if (period === 'AM' && hours === 12) {
    adjustedHours = 0;
  }

  return `${adjustedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

// Custom International Phone Input Component - Exact copy from ContactForm
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

export default function BookingCalendar({ onClose, showPopup, onBookingComplete, contactData, resetTrigger }) {
  // Set default date to tomorrow
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  };

  const [selectedDate, setSelectedDate] = useState(getTomorrowDate());
  const [selectedTime, setSelectedTime] = useState(initialTimes[0]);
  const [selectedTimeIST, setSelectedTimeIST] = useState("");
  const [currentTimeIndex, setCurrentTimeIndex] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [userTimezone, setUserTimezone] = useState("Asia/Kolkata");
  const [userCountry, setUserCountry] = useState("IN");
  const [timezoneLoading, setTimezoneLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: contactData?.firstName || "",
    lastName: contactData?.lastName || "",
    email: contactData?.businessEmail || "",
    phone: contactData?.phoneNumber || "",
    message: "",
    consent: false
  });

  // Detect user's timezone and country based on IP
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const response = await Promise.race([
          fetch("https://ipapi.co/json/", { signal: controller.signal }),
          new Promise((_, reject) => setTimeout(() => reject("timeout"), 3000))
        ]);

        clearTimeout(timeoutId);
        const data = await response.json();

        if (data.timezone) {
          setUserTimezone(data.timezone);
        } else {
          // Fallback to browser timezone
          setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
        }

        if (data.country_code) {
          setUserCountry(data.country_code);
        }

      } catch (error) {
        setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
      } finally {
        setTimezoneLoading(false);
      }
    };

    detectLocation();
  }, []);

  // Reset form when resetTrigger changes
  useEffect(() => {
    if (resetTrigger) {
      resetForm();
      setCurrentStep(1);
    }
  }, [resetTrigger]);

  // Update IST preview when timezone is detected
  useEffect(() => {
    if (!timezoneLoading && userTimezone && selectedTime) {
      const istPreview = getISTPreview(selectedTime, userTimezone);
      setSelectedTimeIST(istPreview);
    }
  }, [userTimezone, timezoneLoading, selectedTime, selectedDate]);

  // Date utility functions
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

  const handleDateChange = (e) => {
    setSelectedDate(e.value);
    setCurrentTimeIndex(0);

    const today = new Date();
    const newSelectedDate = new Date(e.value);
    newSelectedDate.setHours(0, 0, 0, 0);
    const todayOnly = new Date(today);
    todayOnly.setHours(0, 0, 0, 0);

    if (newSelectedDate.getTime() === todayOnly.getTime()) {
      const currentHour = today.getHours();
      const availableToday = allTimes.filter(time => {
        const timeHour = get24HourFormat(time).split(':')[0];
        return parseInt(timeHour) > currentHour;
      });
      setSelectedTime(availableToday[0] || initialTimes[0]);
    } else {
      setSelectedTime(initialTimes[0]);
    }
  };

  // Function to disable past dates
  const disablePastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date <= today;
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    // IST time will be calculated in the useEffect
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handlePhoneChange = (isValid, value, selectedCountryData, fullNumber) => {
    setFormData(prev => ({
      ...prev,
      phone: fullNumber || value || ""
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetPhone, setResetPhone] = useState(false);
  const [verified, setVerified] = useState(false);
  const timeScrollRef = useRef(null);

  const isFormValid = () => {
    return formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.consent &&
      verified;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      consent: false
    });
    setVerified(false);
    setResetPhone(true);
    setTimeout(() => setResetPhone(false), 100);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    setIsSubmitting(true);

    const bookingData = {
      ...formData,
      selectedDate: selectedDate.toISOString().split('T')[0],
      selectedTime: selectedTime,
      userTimezone: userTimezone,
      userCountry: userCountry,
    };

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error('Invalid response format from server');
      }

      if (response.ok) {
        // If onBookingComplete is provided (from ContactModal), use it
        if (onBookingComplete) {
          onBookingComplete({
            selectedDate: selectedDate.toISOString().split('T')[0],
            selectedTime: selectedTime,
            userTimezone: userTimezone,
            userCountry: userCountry,
            message: formData.message
          });
        } else {
          // Original behavior for standalone usage
          // Show success popup
          if (showPopup) {
            showPopup({
              status: 'success',
              title: 'Booking Confirmed!',
              message: 'Thank you for booking with us! We will contact you soon with further details.'
            });
          }
          // Close the booking modal
          if (onClose) {
            onClose();
          }
          // Reset form and go back to step 1
          setCurrentStep(1);
          // Reset form data after a delay to avoid validation issues
          setTimeout(() => {
            resetForm();
          }, 100);
        }
      } else {
        // Show error popup
        if (showPopup) {
          showPopup({
            status: 'error',
            title: 'Booking Failed',
            message: data.error || `Server error (${response.status}): ${data.message || 'Failed to submit booking'}`
          });
        }
      }
    } catch (error) {
      // Show network error popup
      if (showPopup) {
        showPopup({
          status: 'error',
          title: 'Network Error',
          message: `Network error: ${error.message || 'Please check your connection and try again.'}`
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };


  const allTimes = [...initialTimes, ...extraTimes];

  const getFilteredTimes = () => {
    const today = new Date();
    const selectedDateOnly = new Date(selectedDate);
    selectedDateOnly.setHours(0, 0, 0, 0);
    const todayOnly = new Date(today);
    todayOnly.setHours(0, 0, 0, 0);

    if (selectedDateOnly.getTime() === todayOnly.getTime()) {
      const currentHour = today.getHours();
      return allTimes.filter(time => {
        const timeHour = get24HourFormat(time).split(':')[0];
        return parseInt(timeHour) > currentHour;
      });
    }
    return allTimes;
  };

  const getVisibleTimes = () => {
    const filteredTimes = getFilteredTimes();
    return filteredTimes.slice(currentTimeIndex, currentTimeIndex + 3);
  };

  const scrollLeft = () => {
    if (currentTimeIndex > 0) {
      setCurrentTimeIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    const filteredTimes = getFilteredTimes();
    if (currentTimeIndex < filteredTimes.length - 3) {
      setCurrentTimeIndex(prev => prev + 1);
    }
  };

  const visibleTimes = getVisibleTimes();

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

  // Client Details Form (Step 2)
  const renderClientDetailsForm = () => (
    <form onSubmit={handleSubmit} className="h-full flex flex-col">
      <div className="p-4 overflow-auto">
        <div className="flex justify-between items-center mb-5">
          <h2 className="!text-lg font-semibold">Client Details</h2>

        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <CustomIntlTelInput
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="Phone Number"
                defaultCountry={userCountry?.toLowerCase() || "in"}
                reset={resetPhone}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message (optional)"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              className="w-full border border-gray-300 font-semibold px-5 py-3 rounded-xl focus:border-1 focus:border-primary focus:outline-none resize-none"
            />
          </div>
          
          <div className="w-full flex mt-4">
            {/* <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
               
              onChange={() => setVerified(true)}
            /> */}
          </div>
        </div>
      </div>

      <div className="p-3 flex justify-between border-t border-gray-200">
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className="accent-primary h-5 w-5 rounded-xl border border-gray-300 flex-shrink-0"
            required
            disabled={isSubmitting}
          />
          <span className="text-sm text-left">
            <span className="font-semibold">Your consent matters to us*</span>
            <br />I agree to Bissbay's{" "}
            <a href="/terms-of-use" className="text-primary">Terms of Use</a>{" "}
            and{" "}
            <a href="/policies/privacy-policy" target="_blank" className="text-primary">
              Privacy Policy
            </a>.
          </span>
        </div>
        <div className="flex items-center justify-end gap-3">
          <Button
            variant="outlinegray"
            label="Go back"
            customClass="hover:!bg-[#1F2937] text-[#1F2937] hover:text-white hover:no-underline hover:border-2 hover:border-[#1F2937]"
            onClick={handlePrevStep}
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            label={isSubmitting ? "Submitting..." : "Submit"}
            disabled={!isFormValid() || isSubmitting}
            customClass={!isFormValid() || isSubmitting ? "opacity-50 cursor-not-allowed" : ""}
          />
        </div>
      </div>
    </form>
  );

  // Calendar View (Step 1)
  const renderCalendarView = () => (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto">
        <div className="flex h-full">
          {/* Left Side - Calendar */}
          <div className="p-4 border-r border-gray-200">
            <h2 className="!text-lg font-semibold mb-4 text-left">Pick your spot</h2>

            <div>
              <Calendar
                value={selectedDate}
                onChange={handleDateChange}
                inline
                minDate={new Date()}
                dateFormat="yy-mm-dd"
                view="date"
                selectOtherMonths={true}
                showOtherMonths={true}
              />
              <style jsx>{`
                :global(.p-datepicker.p-component.p-datepicker-inline) {
                  width: 400px !important;
                  max-width: 400px !important;
                  overflow: hidden !important;
                }

                :global(.p-datepicker .p-datepicker-calendar-container) {
                  overflow: hidden !important;
                }

                :global(.p-datepicker .p-datepicker-calendar) {
                  width: 100% !important;
                  overflow: hidden !important;
                }

                :global(.p-datepicker .p-datepicker-calendar td) {
                  padding: 4px !important;
                  width: 40px !important;
                  height: 40px !important;
                }

                :global(.p-datepicker .p-datepicker-calendar td span) {
                  width: 32px !important;
                  height: 32px !important;
                  line-height: 32px !important;
                  padding: 0 !important;
                  margin: 0 !important;
                }

                /* Hide scrollbar for time slots carousel */
                .scrollbar-hide {
                  -ms-overflow-style: none;
                  scrollbar-width: none;
                }

                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            </div>
          </div>

          {/* Right Side - Service Details */}
          <div className="flex-1 p-4  flex flex-col">
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

            {/* Time slots carousel */}
            <div className="mb-3">
              {timezoneLoading ? (
                <div className="text-sm text-gray-500">Loading time slots...</div>
              ) : (
                <div className="flex items-center gap-2">
                  {/* Left arrow */}
                  <button
                    onClick={scrollLeft}
                    disabled={currentTimeIndex === 0}
                    className={`flex-shrink-0 bg-white shadow-md rounded-full p-2 transition-colors border border-gray-200 ${
                      currentTimeIndex === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <MdChevronLeft size={20} className="text-gray-600" />
                  </button>

                  {/* Time slots container - shows exactly 3 slots */}
                  <div className="flex-1 flex gap-2 justify-center">
                    {visibleTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`flex-1 border px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${time === selectedTime
                          ? "text-white"
                          : "border-gray-300 text-gray-700"
                          }`}
                        style={time === selectedTime
                          ? { backgroundColor: '#ff4200', borderColor: '#ff4200' }
                          : { borderColor: '#d1d5db', color: '#374151' }
                        }
                        onMouseEnter={(e) => {
                          if (time !== selectedTime) {
                            e.target.style.borderColor = '#ff4200';
                            e.target.style.color = '#ff4200';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (time !== selectedTime) {
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.color = '#374151';
                          }
                        }}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {/* Right arrow */}
                  <button
                    onClick={scrollRight}
                    disabled={currentTimeIndex >= getFilteredTimes().length - 3}
                    className={`flex-shrink-0 bg-white shadow-md rounded-full p-2 transition-colors border border-gray-200 ${
                      currentTimeIndex >= getFilteredTimes().length - 3
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <MdChevronRight size={20} className="text-gray-600" />
                  </button>
                </div>
              )}
            </div>


            {/* Service Details section */}
            <h3 className="!text-base font-semibold mb-3">Service Details</h3>

            <div className="bg-orange-50 p-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(255, 66, 0, 0.05)' }}>
              <h4 className="!text-base font-medium text-gray-800">Free Consultation</h4>
              <p className="!text-sm text-gray-600 mt-1">
                {formatDate(selectedDate)} at {selectedTime}
              </p>
              {selectedTime && selectedTimeIST && userCountry !== 'IN' && (
                <p className="!text-xs text-gray-500">
                  ({selectedTimeIST})
                </p>
              )}
              <p className="!text-sm text-gray-600">Virtual Meeting</p>
              <p className="!text-sm text-gray-600">45 mins</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Next button */}
      <div className="p-3 border-t border-gray-200 flex items-center justify-end">
        <Button label="Next"
          onClick={handleNextStep}
        />
      </div>
    </div>
  );

  return (
    <div className="h-full bg-white">
      <div className={`h-full transition-opacity duration-300 ${currentStep === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        {renderCalendarView()}
      </div>
      <div className={`h-full transition-opacity duration-300 ${currentStep === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
        {renderClientDetailsForm()}
      </div>
    </div>
  );
}