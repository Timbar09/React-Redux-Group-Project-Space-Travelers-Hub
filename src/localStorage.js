export const loadState = (list) => {
  try {
    const serializedState = localStorage.getItem(`spaceX-${list}`);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

export const saveState = (list, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(`spaceX-${list}`, serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};
