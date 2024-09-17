import React, { useState } from 'react';
import { useTranslation } from 'react-google-multi-lang';

const ArrowIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

const CustomLanguageSwitcher = React.memo(() => {
  const { setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="top-6 right-6 bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none flex items-center"
      >
        <span className="mr-2">EN</span>
        <ArrowIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-6 top-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
        >
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('en')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('es')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              ES
            </button>
            <button
              onClick={() => handleLanguageChange('fr')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              FR
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default CustomLanguageSwitcher;
