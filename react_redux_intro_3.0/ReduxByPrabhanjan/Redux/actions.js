// Action creators!
export const ADD_COUNT = "ADD_COUNT";

export const addCount = (data) => {
  return {
    type: ADD_COUNT,
    payload: data,
  };
};
