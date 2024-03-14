export function abbreviateString(input) {
  if (input.length <= 8) {
    return input; // Return the original string if it has 8 or fewer characters
  }
  const f_letters = input.slice(0, 4);
  const l_letters = input.slice(-4);

  return `${f_letters}...${l_letters}`;
}
