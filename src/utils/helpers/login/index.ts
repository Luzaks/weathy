export const validateInput = async (type: string, input: string) => {
  const localErrors: string[] = [];
  let inputType: string = type === "password" ? "password" : "username";
  let value: string;
  const expression: RegExp = /[^A-Za-z0-9]+/g;

  if (input.length < 6) {
    localErrors.push(`Your ${inputType} must be at least 6 characters`);
  } else {
    if (input.trim() !== input) {
      localErrors.push(`Your ${inputType} should not contain spaces`);
    } else {
      if (!!input.match(expression)) {
        localErrors.push(
          `Your ${inputType} should not contain special characters`
        );
      }
    }
  }
  try {
    if (localErrors.length === 0) {
      value = input;
    } else {
      value = "";
    }
  } catch {
    localErrors.push("Sorry. Something went wrong. Try again.");
    value = "";
  }
  return { hasErrors: localErrors, input: value };
};
