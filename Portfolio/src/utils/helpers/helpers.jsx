/* to => remove all console logs <= with search:
  On the side bar search type: console\.log\(([^)]+)\) for multiples lines 
  or console.log.*$ for single lines then replace which you want.
*/

export function booleanSwitch(state, setState) {
  setState(!state);
}

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
export function returnFileNameWithExtension(path) {
  path = path.replace(/\\/g, "/");
  return path.substr(path.lastIndexOf("/") + 1);
}

export function removeExtension(fileNameWithExtension) {
  return fileNameWithExtension.replace(/\.[^/\\.]+$/, "");
}

export function extractLastDirectory(path) {
  // Normalize path separators to forward slashes
  path = path.replace(/\\/g, "/");
  const lastIndex = path.lastIndexOf("/");
  // If there is no '/' or it's the first character, return null
  if (lastIndex <= 0) {
    throw new Error("Invalid path");
  }
  const secondLastIndex = path.lastIndexOf("/", lastIndex - 1);
  return path.substring(secondLastIndex + 1, lastIndex);
}
