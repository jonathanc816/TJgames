export function numGenerator(digits) {
  let numlen = Math.pow(10, digits - 1);
  let res = (Math.floor(Math.random() * numlen) + 1).toString();
  return [res, numlen];
}

export function numrange(left, right, target, guess) {
  if (Number(guess) > target) {
    right = Number(guess) - 1;
  } else if (Number(guess) < target) {
    left = Number(guess) + 1;
  } else {
    alert(`Correct! The number was: ${target}`);
    return true;
  }
  return [left, right];
}
