'use client';
import { useLayoutEffect, useRef, useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { Calendar } from 'primereact/calendar';
import Button from '@/components/Button';

const MultiSelectField = ({ name, values = [], value = "", className, onChange, placeholder, options, isMulti = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setDropdownPosition({
          top: rect.bottom,
          left: rect.left,
          width: rect.width
        });
      }
    };

    if (isOpen) {
      updatePosition();
      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);
    }

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isOpen]);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
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
  };

  const dropdownContent = (
    <div
      className={`multi-select-dropdown z-100 !rounded-md bg-white border border-gray-300 rounded-b-xl rounded-t-none max-h-80 overflow-auto shadow-lg ${isOpen
        ? 'opacity-100'
        : 'opacity-0 pointer-events-none'
        }`}
      style={{
        position: 'fixed',
        top: `${dropdownPosition.top}px`,
        left: `${dropdownPosition.left}px`,
        width: `${dropdownPosition.width}px`,
        minWidth: '200px',
        transition: 'opacity 0.15s ease-in-out',
        zIndex: 9999
      }}
      ref={dropdownRef}
    >
      {isMulti ? (
        <>
          <div className="px-4 py-1 text-gray-400 bg-gray-50">
            {placeholder}
          </div>
          {options.map(option => (
            <label key={option} className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-150 bg-white">
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
            className="px-4 py-2 text-gray-400 hover:bg-gray-100 cursor-pointer transition-colors duration-150 bg-white"
            onClick={() => handleSingleSelect(placeholder)}
          >
            {placeholder}
          </div>
          {options.map(option => (
            <div
              key={option}
              className="px-4 font-medium text-[#5C6371] py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150 bg-white"
              onClick={() => handleSingleSelect(option)}
            >
              {option}
            </div>
          ))}
        </>
      )}
    </div>
  );

  return (
    <div className="relative">
      <button
        type="button"
        ref={buttonRef}
        className={`w-full bg-white border border-gray-300 font-semibold px-3 md:px-5 py-2 md:py-3 rounded-xl text-left focus:border-1 focus:border-primary focus:outline-none ${className}`}
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

      {isOpen && createPortal(dropdownContent, document.body)}
    </div>
  );
};

const BlogNav = ({
  logo,
  serviceLinks,
  uniqueIndustries,
  uniqueTopics,
  selectedIndustry,
  selectedTopic,
  selectedSort,
  selectedDate,
  onServiceClick,
  onIndustryClick,
  onTopicClick,
  onSortChange,
  onDateChange,
  sortOptions,
  breadcrumbComponent
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);
  const isAnimatingRef = useRef(false);
  const isMountedRef = useRef(false);
  const navContainerRef = useRef(null);

  const DateSelector = ({ selectedDate, onDateChange }) => {
    const [date, setDate] = useState(() => {
      if (!selectedDate || selectedDate === 'All Dates') return null;
      const [month, year] = selectedDate.split(' ');
      const monthIndex = new Date(Date.parse(month + " 1, 2012")).getMonth();
      return new Date(parseInt(year), monthIndex, 1);
    });

    useEffect(() => {
      if (!selectedDate || selectedDate === 'All Dates') {
        setDate(null);
      } else {
        const [month, year] = selectedDate.split(' ');
        const monthIndex = new Date(Date.parse(month + " 1, 2012")).getMonth();
        setDate(new Date(parseInt(year), monthIndex, 1));
      }
    }, [selectedDate]);

    const handleDateChange = (e) => {
      const newDate = e.value;
      setDate(newDate);
      if (newDate) {
        const formatted = newDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        onDateChange(formatted);
        setTimeout(() => toggleMenu(), 100);
      } else {
        onDateChange('All Dates');
      }
    };

    return (
      <div className="w-full relative flex gap-2">
        <Calendar
          value={date}
          onChange={handleDateChange}
          view="month"
          dateFormat="mm/yy"
          showButtonBar={false}
          readOnlyInput
          placeholder="Select Month/Year"
          className="flex-1"
          yearRange="2018:2025"
          minDate={new Date(2018, 0, 1)}
          maxDate={new Date()}
          selectionMode="single"
          appendTo={document.body}
        />
        {date && (
          <button
            onClick={() => {
              setDate(null);
              onDateChange('All Dates');
              setTimeout(() => toggleMenu(), 100);
            }}
            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Clear date">
            Clear
          </button>
        )}
      </div>
    );
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 120;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content');
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 70;
        const breadcrumb = 50;
        const padding = 32;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + breadcrumb + contentHeight + padding;
      }
    }
    return 340;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 120 });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease: 'back.out(1.7)'
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.7)', stagger: 0.08 },
      '-=0.1'
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;
    isMountedRef.current = true;

    return () => {
      tl?.kill();
      tlRef.current = null;
      isMountedRef.current = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (!isMountedRef.current) return;
    if (isAnimatingRef.current) return;

    const hasData = serviceLinks.length > 0 || uniqueIndustries.length > 0 || uniqueTopics.length > 0;
    if (!tlRef.current || !hasData) return;

    tlRef.current.kill();
    const newTl = createTimeline();
    if (newTl) {
      tlRef.current = newTl;
    }
  }, [serviceLinks.length, uniqueIndustries.length, uniqueTopics.length]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  useLayoutEffect(() => {
    const handleClickOutside = (event) => {
      // Ignore clicks on the calendar input, popup, panel, or overlay
      if (
        event.target.closest('.p-calendar') ||
        event.target.closest('.p-datepicker') ||
        event.target.closest('.p-datepicker-panel') ||
        event.target.closest('.p-component-overlay') ||
        event.target.closest('.p-calendar-mask') ||
        event.target.closest('.multi-select-dropdown')
      ) {
        return;
      }
      if (isExpanded && navContainerRef.current && !navContainerRef.current.contains(event.target)) {
        if (!tlRef.current) {
          setIsHamburgerOpen(false);
          setIsExpanded(false);
          if (navRef.current) {
            navRef.current.style.height = '120px';
          }
          return;
        }

        const tl = tlRef.current;
        isAnimatingRef.current = true;
        setIsHamburgerOpen(false);
        tl.eventCallback('onReverseComplete', () => {
          setIsExpanded(false);
          isAnimatingRef.current = false;
        });
        tl.reverse();
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [isExpanded]);

  const toggleMenu = () => {
    if (isExpanded !== isHamburgerOpen) {
      setIsHamburgerOpen(isExpanded);
    }

    if (!tlRef.current) {
      setIsHamburgerOpen(!isHamburgerOpen);
      setIsExpanded(!isExpanded);

      if (navRef.current) {
        if (!isExpanded) {
          const height = calculateHeight();
          navRef.current.style.height = height + 'px';
        } else {
          navRef.current.style.height = '120px';
        }
      }
      return;
    }

    const tl = tlRef.current;
    const navEl = navRef.current;

    if (!isExpanded) {
      isAnimatingRef.current = true;
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      navEl.style.overflow = 'visible';
      tl.eventCallback('onComplete', () => {
        isAnimatingRef.current = false;
      });
      tl.play(0);
    } else {
      isAnimatingRef.current = true;
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => {
        setIsExpanded(false);
        isAnimatingRef.current = false;
        if (navEl) {
          navEl.style.overflow = 'hidden';
        }
      });
      tl.reverse();
    }
  };

  const setCardRef = i => el => {
    if (el) cardsRef.current[i] = el;
  };

  const categories = [
    {
      label: '',
      // bgColor: '#FEF3E2',
      textColor: '#000',
      type: 'services',
      links: (serviceLinks || []).slice(0, 5).map(service => ({
        label: service.name,
        icon: service.icon,
        onClick: () => {
          toggleMenu();
          setTimeout(() => {
            onServiceClick(service.name);
          }, 100);
        }
      }))
    },
    {
      label: '',
      // bgColor: '#FFE5E5',
      textColor: '#000',
      type: 'services',
      links: (serviceLinks || []).slice(5, 10).map(service => ({
        label: service.name,
        icon: service.icon,
        onClick: () => {
          toggleMenu();
          setTimeout(() => {
            onServiceClick(service.name);
          }, 100);
        }
      }))
    },
    {
      label: '',
      // bgColor: '#E3F2FD',
      textColor: '#000',
      type: 'dropdowns'
    }
  ];

  return (
    <div ref={navContainerRef} className="card-nav-container max-w-6xl mx-auto w-full fixed left-1/2 -translate-x-1/2 z-[99] top-0">
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[120px] p-0 rounded-2xl rounded-t-none shadow-lg relative overflow-hidden will-change-[height] bg-white transition-[height] duration-400 ease-out`}
        style={{ height: isExpanded && !tlRef.current ? `${calculateHeight()}px` : undefined }}>
        <div className="card-nav-top absolute inset-x-0 top-0 h-[70px] flex items-center justify-between px-4 z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} cursor-pointer group flex flex-col items-center justify-center gap-[6px] relative z-10`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}>
            <div
              className={`hamburger-line w-[30px] h-[3px] bg-gray-900 transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[4.5px] rotate-45' : ''
                } group-hover:opacity-75`} />
            <div
              className={`hamburger-line w-[30px] h-[3px] bg-gray-900 transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[4.5px] -rotate-45' : ''
                } group-hover:opacity-75`} />
          </div>

          <div
            className="logo-container flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => {
              toggleMenu();
              setTimeout(() => {
                window.location.href = '/';
              }, 300);
            }}
            role="button"
            aria-label="Go to homepage"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
                setTimeout(() => {
                  window.location.href = '/';
                }, 300);
              }
            }}>
            {logo}
          </div>

          <div className="hidden md:block">
            <Button
              label="Contact Us"
              link="/contact-us"
            />
          </div>
        </div>

        <div
          className={`card-nav-content relative md:absolute left-0 right-0 top-[70px] bottom-[50px] p-4 pb-6 flex flex-col md:flex-row items-stretch gap-3 md:gap-[12px] justify-start z-[1] transition-opacity duration-300 ${isExpanded ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0'
            }`}
          aria-hidden={!isExpanded}>
          {categories.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`nav-card select-none relative flex flex-col gap-2 p-4 rounded-xl min-w-0 flex-[1_1_auto] h-auto border-1 border-gray-50 shadow-md ${item.type === 'services' ? 'md:flex-[0.8_1_0%] overflow-hidden' : 'md:flex-[1.4_1_0%] overflow-visible'}`}
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}>
              {item.label && (
                <div className="nav-card-label font-bold text-lg">
                  {item.label}
                </div>
              )}

              {item.type === 'services' ? (
                <div className="nav-card-links flex flex-col gap-1.5 overflow-y-auto custom-scrollbar">
                  {item.links?.map((lnk, i) => {
                    const IconComponent = lnk.icon;
                    return (
                      <button
                        key={`${lnk.label}-${i}`}
                        className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer hover:text-primary font-semibold text-[#5c6371] text-base text-left bg-transparent border-none p-0"
                        onClick={lnk.onClick}
                        aria-label={lnk.label}>
                        {IconComponent ? <IconComponent size={18} className="shrink-0" /> : <GoArrowUpRight className="nav-card-link-icon shrink-0" />}
                        {lnk.label}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  <button
                    onClick={() => {
                      onTopicClick("Others");
                      setTimeout(() => toggleMenu(), 100);
                    }}
                    className="w-full bg-white border border-gray-300 font-semibold rounded-xl text-left px-3 md:px-5 py-[10px]  text-[#5c6371] focus:border-1 focus:border-primary focus:outline-none flex items-center"
                  >
                    Others
                  </button>

                  <MultiSelectField
                    name="industry"
                    value={selectedIndustry === "Industry" ? "" : selectedIndustry}
                    placeholder="Industry"
                    options={uniqueIndustries}
                    isMulti={false}
                    className="!py-2.5 !text-base text-[#5c6371]"
                    onChange={(e) => {
                      const value = e.target.value || "Industry";
                      onIndustryClick(value);
                      setTimeout(() => toggleMenu(), 100);
                    }}
                  />

                  {/* Date Selector */}
                  <div>
                    <DateSelector
                      selectedDate={selectedDate}
                      onDateChange={onDateChange}
                    />
                  </div>

                  {/* Sort Dropdown */}
                  <MultiSelectField
                    name="sort"
                    value={selectedSort === "Sort by" ? "" : selectedSort}
                    placeholder="Sort by"
                    options={sortOptions}
                    isMulti={false}
                    className="!py-2.5 !text-base text-[#5c6371]"
                    onChange={(e) => {
                      const value = e.target.value || "Sort by";
                      onSortChange(value);
                      setTimeout(() => toggleMenu(), 100);
                    }}
                  />

                </div>
              )}
            </div>
          ))}
        </div>

        {/* Breadcrumb at bottom of navbar */}
        <div className="absolute left-0 right-0 bottom-0 h-[48px] flex items-center px-6 border-t border-gray-100 bg-white z-[2]">
          {breadcrumbComponent}
        </div>
      </nav>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
        }
        .p-calendar .p-inputtext {
          width: 100%;
          border: 1px solid #d1d5db !important;
          background: #fff !important;
          color: #5C6371 !important;
          padding: 0.5rem 0.75rem !important;
          border-radius: 0.75rem !important;
          font-size: 1rem !important;
          font-weight: 600 !important;
          line-height: 1.5 !important;
          box-sizing: border-box !important;
        }
        @media (min-width: 768px) {
          .p-calendar .p-inputtext {
            padding: 10px 1.25rem !important;
          }
        }
        .p-calendar .p-inputtext:focus {
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 1px #3b82f6 !important;
        }
        .p-calendar .p-datepicker {
          border: 1px solid #e5e7eb !important;
          border-radius: 0.5rem !important;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          background: #fff !important;
        }
        .p-calendar .p-datepicker-panel {
          background: #fff !important;
          border: 1px solid #e5e7eb !important;
        }
          .p-component{
          font-weight : 500 !important;
          }
        .p-calendar-mask,
        .p-component-overlay {
          background: rgba(0, 0, 0, 0.4) !important;
        }
        .p-calendar .p-monthpicker {
          background: #fff !important;
        }
        .p-calendar .p-monthpicker .p-monthpicker-month {
          color: #6b7280 !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem !important;
          font-size: 0.875rem;
          background: #fff !important;
          width: calc(33.333% - 0.5rem) !important;
        }
        .p-calendar .p-monthpicker .p-monthpicker-month:hover {
          background: #f3f4f6 !important;
          color: #374151 !important;
        }
        .p-calendar .p-monthpicker .p-monthpicker-month.p-highlight,
        .p-calendar .p-monthpicker .p-monthpicker-month:not(.p-disabled):hover.p-highlight {
          background: #3b82f6 !important;
          color: #fff !important;
        }
        .p-yearpicker {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 0.5rem !important;
          padding: 0.5rem !important;
        }
        .p-yearpicker .p-yearpicker-year {
          color: #6b7280 !important;
          border-radius: 0.375rem !important;
          padding: 0.5rem !important;
          font-size: 1rem !important;
          background: #fff !important;
          width: auto !important;
          margin: 0 !important;
        }
        .p-yearpicker .p-yearpicker-year.p-disabled {
          color: #d1d5db !important;
          cursor: not-allowed !important;
          opacity: 0.5 !important;
        }
        .p-calendar .p-yearpicker .p-yearpicker-year:hover {
          background: #f3f4f6 !important;
          color: #374151 !important;
        }
        .p-calendar .p-yearpicker .p-yearpicker-year.p-highlight,
        .p-calendar .p-yearpicker .p-yearpicker-year:not(.p-disabled):hover.p-highlight {
          background: #3b82f6 !important;
          color: #fff !important;
        }
        .p-datepicker-panel {
          transform: translateX(-50%) !important;
          left: 50% !important;
        }
        .p-calendar .p-datepicker-header {
          background: #f9fafb !important;
          border-bottom: 1px solid #e5e7eb !important;
          border-radius: 0.5rem 0.5rem 0 0 !important;
        }
        .p-calendar .p-datepicker-header .p-datepicker-title {
          color: #111827 !important;
          font-weight: 600;
        }
        .p-calendar .p-datepicker-prev,
        .p-calendar .p-datepicker-next {
          color: #6b7280 !important;
          background: #fff !important;
        }
        .p-calendar .p-datepicker-prev:hover,
        .p-calendar .p-datepicker-next:hover {
          color: #374151 !important;
          background: #f3f4f6 !important;
        }
        .p-calendar .p-datepicker-prev:focus,
        .p-calendar .p-datepicker-next:focus {
          background: #fff !important;
        }
        .p-datepicker .p-datepicker-header {
          padding : 0 !important;
          height : 44px !important;
        }
          .p-monthpicker{
          margin : 0  !important;
          }
          .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year, .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
              color: #4b5563;
              padding: 0rem !important;
              font-weight: 600;
              transition: background-color .2s, color .2s, box-shadow .2s;
          }


      `}</style>
    </div>
  );
};

export default BlogNav;