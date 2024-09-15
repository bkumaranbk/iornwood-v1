import React, { useState } from 'react';
import { useTranslation } from 'react-google-multi-lang';

const CustomLanguageSwitcher = React.memo(() => {
  const { setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-6 right-1">
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none"
        >
          Select Language
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                onClick={() => handleLanguageChange('en')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('es')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Spanish
              </button>
              <button
                onClick={() => handleLanguageChange('fr')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                French
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default CustomLanguageSwitcher;
