import { useEffect, useState, useCallback } from "react";
import "./vadorToggle.scss";

function VadorToggle() {
  let prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [systemTheme, setSystemTheme] = useState(get_system_theme());
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

  function get_system_theme() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    return theme;
  }

  const removePreferance = useCallback(() => {
    const localPref = localStorage.getItem("wantsDark");
    console.log(
      "local_theme in removePreferance: ",
      localPref,
      "system_theme: ",
      get_system_theme(),
    );
    // if (localPref !== null) {
    // if (systemTheme != (localPref === true ? "dark" : "light")) {
    //   console.log("switch_theme_rules in removePreferance");
    //   switch_theme_rules();
    // }
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

  // check if the theme state is dark or light and changes the theme accordingly
  useEffect(() => {
    console.log(
      "useEffect on wantsDark != isDark , wantsDark : ",
      wantsDark,
      "isDark: ",
      isDark,
    );
    if (wantsDark !== null && wantsDark != isDark) {
      console.log("\nSwitch!!!");
      switch_theme_rules();
      setIsDark(wantsDark);
    }
    if (wantsDark === null && (systemTheme === "dark") !== isDark) {
      console.log("change isDark for no preferance");
      setIsDark(systemTheme === "dark");
    }
  }, [systemTheme, wantsDark, isDark]);

  // listens for changes in the theme and changes the theme accordingly
  useEffect(() => {
    const bob = (e) => {
      console.log(
        "useEffect on prefers-color-scheme",
        "|| e.matches dark =",
        e.matches,
        "\nSwitch by theme!!",
      );
      console.log("Switch by theme listener again!!");
      const localPref = localStorage.getItem("wantsDark");
      if (localPref !== null) {
        switch_theme_rules();
      }
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
    <>
      <button
        className="vador-toggle"
        data-testid="vador-testid"
        aria-label="Toggle Dark Mode"
        onClick={() => {
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
        }}
      >
        <svg
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 496"
        >
          <path
            fill="currentColor"
            d="M8,256C8,393,119,504,256,504S504,393,504,256,393,8,256,8,8,119,8,256ZM256,440V72a184,184,0,0,1,0,368Z"
            transform="translate(-8 -8)"
          />
        </svg>
      </button>
      <p> ---- </p>
      <button onClick={removePreferance}>Remove Theme</button>
    </>
  );
}

export default VadorToggle;
