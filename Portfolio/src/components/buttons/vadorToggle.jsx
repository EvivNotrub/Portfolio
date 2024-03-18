import { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "./vadorToggle.scss";

function VadorToggle({ className }) {
  /*boolean: prefersDark = true/false*/
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  /*string: systemDark = "dark" / "light"*/
  const [systemTheme, setSystemTheme] = useState(
    prefersDark ? "dark" : "light",
  );
  const [isDark, setIsDark] = useState(prefersDark);
  const [wantsDark, setWantsDark] = useState(
    JSON.parse(localStorage.getItem("wantsDark")),
  );
  // wantsDark || (wantsDark === null && prefersDark),
  // );

  console.log(
    " => isDark: ",
    isDark,
    "||  => systemTheme: ",
    systemTheme,
    "||  => prefersDark: ",
    prefersDark,
    "||  => wantsDark: ",
    wantsDark,
  );

  const removePreferance = useCallback(() => {
    const localPref = localStorage.getItem("wantsDark");
    console.log(
      "local_theme in removePreferance: ",
      localPref,
      "system_theme: ",
      systemTheme,
    );
    if (localPref !== null) {
      console.log("removeItem from storage in removePreferance");
      localStorage.removeItem("wantsDark");
      setWantsDark(null);
    }
    if (systemTheme != (isDark === true ? "dark" : "light")) {
      console.log("switch_theme_rules in removePreferance");
      switch_theme_rules();
      setIsDark(!isDark);
    }
  }, [isDark, systemTheme]);

  function switch_theme_rules() {
    /*
      Function for switching the rules for perfers-color-scheme
      Goes through each style sheet file, then each rule within each stylesheet
      and looks for any rules that require a prefered colorscheme, 
      if it finds one that requires light theme then it makes it require dark theme / vise
      versa. The idea is that it will feel as though the themes switched even if they haven't. 
  */

    for (
      var sheet_file = 0;
      sheet_file < document.styleSheets.length;
      sheet_file++
    ) {
      try {
        for (
          var sheet_rule = 0;
          sheet_rule < document.styleSheets[sheet_file].cssRules.length;
          sheet_rule++
        ) {
          const rule = document.styleSheets[sheet_file].cssRules[sheet_rule];

          if (
            rule &&
            rule.media &&
            rule.media.mediaText.includes("prefers-color-scheme")
          ) {
            const rule_media = rule.media.mediaText;
            let new_rule_media;
            if (rule_media.includes("light")) {
              new_rule_media = rule_media.replace("light", "dark");
            }
            if (rule_media.includes("dark")) {
              new_rule_media = rule_media.replace("dark", "light");
            }
            rule.media.deleteMedium(rule_media);
            rule.media.appendMedium(new_rule_media);
          }
        }
      } catch (e) {
        const broken_sheet = document.styleSheets[sheet_file].href;
        console.warn(
          broken_sheet + " broke something with theme toggle : " + e,
        );
      }
    }
  }

  function handleClick() {
    localStorage.setItem("wantsDark", !isDark);
    setWantsDark(!isDark);
    console.log(
      "BUTTON sates: isDark: ",
      isDark,
      "wantsDark: ",
      wantsDark,
      "new wantsDark: ",
      !isDark,
    );
  }

  // check if the theme state is dark or light and changes the theme accordingly
  useEffect(() => {
    console.log(
      "useEffect on wantsDark != isDark , wantsDark : ",
      wantsDark,
      "isDark: ",
      isDark,
    );
    // change the view state if the user changes the theme
    if (wantsDark !== null && wantsDark != isDark) {
      console.log("\nSwitch!!!");
      switch_theme_rules();
      setIsDark(wantsDark);
    }
    // change the view state if the system theme changes and the user has no preferance
    if (wantsDark === null && (systemTheme === "dark") !== isDark) {
      console.log("change isDark for no preferance");
      setIsDark(systemTheme === "dark");
    }
  }, [systemTheme, wantsDark, isDark]);

  // listens for changes in the theme and changes the theme accordingly
  //TODO: check behavior with chrome and other pages...maybe remove local storage
  // on cahnge of system theme
  useEffect(() => {
    const bob = (e) => {
      console.log(
        "useEffect on prefers-color-scheme",
        "|| e.matches dark =",
        e.matches,
        "\nSwitch by theme!!",
      );
      console.log("Switch by theme listener again!!");
      // avoid changes if the user has a preferance
      const localPref = localStorage.getItem("wantsDark");
      if (localPref !== null) {
        switch_theme_rules();
      }
      // update the system theme state => has an effect on the view state above
      setSystemTheme(e.matches ? "dark" : "light");
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => bob(e));
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (e) => bob(e));
    };
  }, []);

  return (
    <div className={className + " " + "vador"}>
      <button
        className={"vador__toggle" + (isDark ? " vador__toggle--dark" : "")}
        data-testid="vador-testid"
        aria-label="Toggle Dark Mode"
        onClick={() => handleClick()}
      >
        <div className="vador__toggle__circle">
          <div className="vador__toggle__half-disc"></div>
        </div>
      </button>
      <button onClick={removePreferance} className="vador__shred">
        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
        <FontAwesomeIcon icon="fa-solid fa-rotate-left" />
      </button>
    </div>
  );
}

VadorToggle.propTypes = {
  className: PropTypes.string,
};

export default VadorToggle;
