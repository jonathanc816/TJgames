export function numGenerator(digits) {
  let numlen = Math.pow(10, digits - 1);
  let res = Math.floor(Math.random() * numlen + 1).toString();
  return [res, numlen];
}

export function numrange(left, right, target, guess) {
  if (guess > target) {
    right = guess;
  } else if (guess < target) {
    left = guess;
  } else {
    alert(`Correct! The number was: ${target}`);
    return true;
  }
  return [left, right];
}
