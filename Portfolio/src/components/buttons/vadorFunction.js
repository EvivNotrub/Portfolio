export function switch_theme_rules() {
  /*
      Function for switching the rules for perfers-color-scheme
      Goes through each style sheet file, then each rule within each stylesheet
      and looks for any rules that require a prefered colorscheme, 
      if it finds one that requires light theme then it makes it require dark theme / vise
      versa. The idea is that it will feel as though the themes switched even if they haven't. 
  */
  for (
    let sheet_file = 0;
    sheet_file < document.styleSheets.length;
    sheet_file++
  ) {
    try {
      for (
        let sheet_rule = 0;
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
      console.warn(broken_sheet + " broke something with theme toggle : " + e);
    }
  }
}

export function setMetaColorScheme(isDark) {
  const meta = document.querySelector('meta[name="color-scheme"]');
  if (meta) {
    meta.setAttribute("content", isDark ? "dark" : "light");
  } else {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<meta name="color-scheme" content="${isDark ? "dark" : "light"}">`,
    );
  }
  if (isDark === null) {
    document
      .querySelector('meta[name="color-scheme"]')
      .setAttribute("content", "dark light");
  }
}

export const adjustStylesheetForThemeMode = async (stylesheetNode) => {
  try {
    await new Promise((resolve, reject) => {
      stylesheetNode.onload = resolve;
      stylesheetNode.onerror = reject;
    });

    const stylesheet = stylesheetNode.sheet;
     

    if (!stylesheet) {
      console.error("Failed to retrieve stylesheet from node.");
      return;
    }

    const rulesToAdjust = [];
    // Extract relevant rules from the stylesheet
    const cssRules = stylesheet.cssRules;
    for (let i = 0; i < cssRules.length; i++) {
      const rule = cssRules[i];
      if (rule.media && rule.media.mediaText.includes("prefers-color-scheme")) {
        rulesToAdjust.push(rule);
      }
    }

    // Adjust rules for theme mode
    rulesToAdjust.forEach((rule) => {
      let newMediaText = rule.media.mediaText;
      if (newMediaText.includes("light")) {
        newMediaText = newMediaText.replace("light", "dark");
      } else if (newMediaText.includes("dark")) {
        newMediaText = newMediaText.replace("dark", "light");
      }
      rule.media.mediaText = newMediaText;
    });
  } catch (error) {
    console.error("Failed to load stylesheet:", error);
  }
};

/*// a function to change the color-scheme of the page
  function changeColorScheme(scheme) {
    document.documentElement.setAttribute("color-scheme", scheme);
  }*/
