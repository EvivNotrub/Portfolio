// Adjust rules for theme mode
const adjustRulesForThemeMode = (rules) => {
  rules.forEach((rule) => {
    let newMediaText = rule.media.mediaText;
    if (newMediaText.includes("light")) {
      newMediaText = newMediaText.replace("light", "dark");
    } else if (newMediaText.includes("dark")) {
      newMediaText = newMediaText.replace("dark", "light");
    }
    rule.media.mediaText = newMediaText;
  });
};
// Extract relevant rules from the stylesheet:
function extractRulesToAdjust(stylesheet) {
  const rulesToAdjust = [];
  const cssRules = stylesheet.cssRules;
  for (let i = 0; i < cssRules.length; i++) {
    const rule = cssRules[i];
    if (rule.media && rule.media.mediaText.includes("prefers-color-scheme")) {
      rulesToAdjust.push(rule);
    }
  }
  return rulesToAdjust;
}

export function switch_theme_rules() {
  /*
      Function for switching the rules for perfers-color-scheme
      Goes through each style sheet file, then each rule within each stylesheet
      and looks for any rules that require a prefered colorscheme, 
      if it finds one that requires light theme then it makes it require dark theme / vise
      versa. The idea is that it will feel as though the themes switched even if they haven't. 
  */
  const stylesheets = document.styleSheets;
  const styleLength = stylesheets.length;
  for (let sheet_file = 0; sheet_file < styleLength; sheet_file++) {
    try {
      const sheet = stylesheets[sheet_file];
      const rulesToAdjust = extractRulesToAdjust(sheet);
      adjustRulesForThemeMode(rulesToAdjust);
    } catch (e) {
      const broken_sheet = stylesheets[sheet_file].href;
      console.warn(broken_sheet + " broke something with theme toggle : " + e);
    }
  }
}
// Set the meta tag for color-scheme
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
    /* this async is necessary because the stylesheetNode has to be loaded first
    before we can access the stylesheet object . It is fired by observer that 
    looks for changes, but dosen't wait for it to be loaded */
    await new Promise((resolve, reject) => {
      stylesheetNode.onload = resolve;
      stylesheetNode.onerror = reject;
    });

    const stylesheet = stylesheetNode.sheet;

    if (!stylesheet) {
      console.error("Failed to retrieve stylesheet from node.");
      return;
    }
    const rulesToAdjust = extractRulesToAdjust(stylesheet);
    adjustRulesForThemeMode(rulesToAdjust);
  } catch (error) {
    console.error("Failed to load stylesheet:", error);
  }
};

/*// a function to change the color-scheme of the page instead of the meta tag
  function changeColorScheme(scheme) {
    document.documentElement.setAttribute("color-scheme", scheme);
  }*/
