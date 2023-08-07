export const loadState = () => {
  // we use try catch to avoid any issues with the localStorage, incase the user has disabled access to the localStorage
  try {
    const serializedState = localStorage.getItem('state');
    //if the serializedState is null, it means that the key does not exist
    //we wiil return undefined so that the reducer will initialize the state instead
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};
