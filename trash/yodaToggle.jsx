import { useEffect } from 'react';
  import {    useMediaQuery,    useTernaryDarkMode  } from 'usehooks-ts';
  
  export const ThemeSwitch = () => {
    const isSystemDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const {
      isDarkMode,
      ternaryDarkMode,
      setTernaryDarkMode,
      toggleTernaryDarkMode,
    } = useTernaryDarkMode()
    type TernaryDarkMode = typeof ternaryDarkMode
  
    useEffect(() => {
      for (let s = 0; s < document.styleSheets.length; s++) {
        const styleSheet = document.styleSheets.item(s);
        const cssRules = styleSheet?.cssRules || new CSSRuleList();
  
        for (let r = 0; r < cssRules.length; r++) {
          const cssRule = cssRules.item(r);
          if (!(cssRule instanceof CSSMediaRule)) {
            continue;
          }
  
          const ruleMediaText = cssRule.media.mediaText;
          if (!ruleMediaText.match(/(prefers-color-scheme: \w+)/)) {
            continue;
          }
  
          /**
           * Replace the prefers-color-scheme media query to apply the desired theme.
           * It refers to the system media query in order to keep the mechanic in sync by reversing it.
           */
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
    }, [isDarkMode, isSystemDarkMode]);
  
    return (
      <div>
        <p>System theme: {isSystemDarkMode ? 'dark' : 'light'}</p>
        <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
        <p>ternaryMode: {ternaryDarkMode}</p>
        <p>
          <button onClick={toggleTernaryDarkMode}>
            Toggle from {ternaryDarkMode}
          </button>
        </p>
        <p>
          Select a mode
          <br />
          <select
            name="dark-mode-select"
            onChange={ev =>
              setTernaryDarkMode(ev.target.value as TernaryDarkMode)
            }
            value={ternaryDarkMode}
          >
            <option value="light">light</option>
            <option value="system">system</option>
            <option value="dark">dark</option>
          </select>
        </p>
      </div>
    );
  }