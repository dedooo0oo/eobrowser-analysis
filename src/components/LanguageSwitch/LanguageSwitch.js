import React from 'react';

const LanguageSwitch = ({ language, setLanguage }) => {
  return (
    <div className="language-switch">
      <button 
        onClick={() => setLanguage('en')}
        className={language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('it')}
        className={language === 'it' ? 'active' : ''}
      >
        IT
      </button>
    </div>
  );
};

export default LanguageSwitch;