export function booleanSwitch(state, setState) {
  setState(!state);
}

export function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
