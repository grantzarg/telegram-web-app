export const isEmailValid = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailRegex.test(email);
};

export const isValidSBPPhone = (phone) => {
  const phoneNumberRegex = /^((\+7|7|8)[ -]?(\d[ -]?){10})$/;

  return phoneNumberRegex.test(phone);
};
