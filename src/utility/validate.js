export function validate(email, password) {
  const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidation =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!emailValidation) return "Email is not valid";
  if (!passwordValidation) return "Password is not valid";
  return null;
}
