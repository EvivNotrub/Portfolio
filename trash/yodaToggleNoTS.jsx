import { useState, useEffect } from 'react';

function applyTheme(isDarkMode, isSystemDarkMode) {
  const styleSheets = document.styleSheets;

  for (let s = 0; s < styleSheets.length; s++) {
    const styleSheet = styleSheets[s];
    const cssRules = styleSheet.cssRules || styleSheet.rules;

    for (let r = 0; r < cssRules.length; r++) {
      const cssRule = cssRules[r];
      
      if (!(cssRule instanceof CSSMediaRule)) {
        continue;
      }

      const ruleMediaText = cssRule.media.mediaText;

      if (!ruleMediaText.match(/(prefers-color-scheme: \w+)/)) {
        continue;
      }

      const newRuleMediaText = ruleMediaText.replace(
        /(dark|light)/,
        isDarkMode
          ? isSystemDarkMode ? 'dark' : 'light'
          : isSystemDarkMode ? 'light' : 'dark'
      );

      cssRule.media.deleteMedium(ruleMediaText);
      cssRule.media.appendMedium(newRuleMediaText);
    }
  }
}

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(isDarkMode, isSystemDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div>
      <p>System theme: {window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'}</p>
      <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
      <p>
        <button onClick={toggleDarkMode}>
          Toggle to {isDarkMode ? 'light' : 'dark'}
        </button>
      </p>
    </div>
  );
}

export default ThemeSwitch;
