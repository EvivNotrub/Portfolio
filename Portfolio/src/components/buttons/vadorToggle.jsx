import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./vadorToggle.scss";
// import { Helmet } from "react-helmet-async";

/* this function is a workaround when style is already setup for light and 
 dark mode with media queries. It will change the rules for each stylesheet
 and the meta tag for color-scheme to make it feel like the theme changed.
 The toggle-button will add local storage and set the oposite state , and 
 useEffect will change the theme accordingly.*/
export function VadorToggle({ className }) {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches; //boolean
  const [systemTheme, setSystemTheme] = useState(
    prefersDark ? "dark" : "light",
  ); //string
  const [isDark, setIsDark] = useState(prefersDark); //current aplied theme
  const [wantsDark, setWantsDark] = useState(
    JSON.parse(localStorage.getItem("wantsDark")),
  ); //saved theme
  const [swithed, setSwitched] = useState(false); //to control the adjustment of rule-changes for later added stylesheets (lazy loading issue)

  const switch_theme_rules = async () => {
    await import("./vadorFunction.js").then((module) => {
      module.switch_theme_rules();
    });
    setSwitched((previousState) => !previousState);
  };

  const setMetaColorScheme = async (isDark) => {
    await import("./vadorFunction.js").then((module) => {
      module.setMetaColorScheme(isDark);
    });
  };

  const removePreferance = useCallback(async () => {
    const localPref = localStorage.getItem("wantsDark");
    if (localPref !== null) {
      localStorage.removeItem("wantsDark");
      setWantsDark(null);
    }
    if (systemTheme != (isDark === true ? "dark" : "light")) {
      await switch_theme_rules();
      setIsDark(!isDark);
    }
    await setMetaColorScheme(null);
  }, [isDark, systemTheme]);

  function handleClick() {
    localStorage.setItem("wantsDark", !isDark);
    setWantsDark(!isDark);
  }

  /* adjsuts the theme rules for the NEW stylesheets generated after
   a new the page load, but only if changes are aplied.*/
  useEffect(() => {
    if (!swithed) {
      return;
    }
    const adjustThemeRules = async (stylesheetNode) => {
      await import("./vadorFunction.js").then(async (module) => {
        await module.adjustStylesheetForThemeMode(stylesheetNode);
      });
    };
    // Observe the document for new stylesheets:
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          const addedNodes = mutation.addedNodes;
          for (const node of addedNodes) {
            //
            if (
              node.tagName === "STYLE" ||
              (node.tagName === "LINK" && node.rel === "stylesheet")
            ) {
              adjustThemeRules(node);
            }
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [swithed]);

  // check if the theme state is dark or light and changes the theme accordingly
  useEffect(() => {
    async function changeTheme() {
      await setMetaColorScheme(isDark);
    }
    async function changeThemeRules() {
      await switch_theme_rules();
      setIsDark(wantsDark);
    }
    // changes the meta color-scheme according to the theme state chosen
    // changes for *no preference* handled in removePreferance with value null
    if (wantsDark !== null) {
      changeTheme();
    }
    // changes the page color scheme according to the theme state
    // changeColorScheme(isDark ? "dark" : "light");
    // change the view state if the user changes the theme
    if (wantsDark !== null && wantsDark != isDark) {
      changeThemeRules();
    }
    // change the view state if the system theme changes and the user has no preference
    if (wantsDark === null && (systemTheme === "dark") !== isDark) {
      setIsDark(systemTheme === "dark");
    }
  }, [systemTheme, wantsDark, isDark]);

  // listens for changes in the window theme and changes the theme accordingly
  // DO NOT REMOVE THE >EMPTY< ARRAY DEPENDENCY
  //TODO: check behavior with chrome and other pages...maybe remove local storage
  // on cahnge of system theme
  useEffect(() => {
    const bob = async (e) => {
      // avoid changes if the user has a preference
      const localPref = localStorage.getItem("wantsDark");
      if (localPref !== null) {
        await switch_theme_rules();
      }
      // update the system theme state => has an effect on the view-state above
      setSystemTheme(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", async (e) => await bob(e));
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", async (e) => await bob(e));
    };
  }, []);

  return (
    <div className={className + " " + "vador"}>
      {/* <Helmet>
      // meta color-scheme managed above since it's not deleted here when added
      //TODO: add specific theme-color for dark and light
        <meta name="theme-color" content={isDark ? "#000" : "#fff"} />
      </Helmet> */}
      <button
        className={"vador__toggle" + (isDark ? " vador__toggle--dark" : "")}
        data-testid="vador-testid"
        aria-label="Toggle Dark or Light Mode"
        title="Toggle Dark or Light Mode"
        onClick={() => handleClick()}
      >
        <div className="vador__toggle__circle">
          <div className="vador__toggle__half-disc"></div>
        </div>
      </button>
      <button
        onClick={removePreferance}
        className="vador__shred"
        aria-label="Set back to system preference"
        title="Set back to system preference"
      >
        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
        <FontAwesomeIcon icon="fa-solid fa-rotate-left" />
      </button>
    </div>
  );
}

VadorToggle.propTypes = {
  className: PropTypes.string,
};
