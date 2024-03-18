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
