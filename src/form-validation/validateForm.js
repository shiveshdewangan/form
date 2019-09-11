export const validateForm = (state) => {
  console.log(state);
  if (state.firstName === "" || state.lastName === "") return;
};
