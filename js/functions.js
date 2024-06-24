function lengthCheck (input, maxLength) {
  return input.length <= maxLength;
}
lengthCheck();

function palyndromeCheck (input) {
  input = input.replaceAll(' ', '');
  input = input.toUpperCase();
  let palyndrome = input.split('');
  palyndrome = palyndrome.reverse();
  palyndrome = palyndrome.join('');
  return palyndrome === input.toUpperCase();
}
palyndromeCheck ();

function numberReturn (input) {
  input = input.toString().split('');
  let inputNumber = [];
  for (let i = 0; i < input.length; i++) {
    if(!isNaN(parseInt(input[i], 10))) {
      inputNumber[i] = input[i];
    }
  }
  inputNumber = inputNumber.join('');
  if(inputNumber > 0) {
    return inputNumber;
  } else {
    return NaN;
  }
}
numberReturn();
