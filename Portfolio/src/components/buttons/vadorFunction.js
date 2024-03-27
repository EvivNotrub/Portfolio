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

/*// a function to change the color-scheme of the page
  function changeColorScheme(scheme) {
    document.documentElement.setAttribute("color-scheme", scheme);
  }*/
