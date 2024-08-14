/* function lengthCheck (input, maxLength) {
  return input.length <= maxLength;
}
// Строка короче 20 символов
lengthCheck('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
lengthCheck('проверяемая строка', 18); // true
// Строка длиннее 10 символов
lengthCheck('проверяемая строка', 10); // false

function palyndromeCheck (input) {
  input = input.replaceAll(' ', '');
  input = input.toUpperCase();
  let palyndrome = input.split('');
  palyndrome = palyndrome.reverse();
  palyndrome = palyndrome.join('');
  return palyndrome === input.toUpperCase();
}
palyndromeCheck('топот'); // true
// Несмотря на разный регистр, тоже палиндром
palyndromeCheck('ДовОд'); // true
// Это не палиндром
palyndromeCheck('Кекс'); // false

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
numberReturn('2023 год'); // 2023
numberReturn('ECMAScript 2022'); // 2022
numberReturn('1 кефир, 0.5 батона'); // 105
numberReturn('агент 007'); // 7
numberReturn('а я томат'); // NaN
numberReturn(2023); // 2023
numberReturn(-1); // 1
numberReturn(1.5); // 15

function returnWorkDay (dayStart, dayFin, meetingStart, meetingLength) {
  /* переводим в минуты от полуночи*/
/*  const workDayStart = Number(dayStart.split(':')[0]) * 60 + Number(dayStart.split(':')[1]);
  const workDayFin = Number(dayFin.split(':')[0]) * 60 + Number(dayFin.split(':')[1]);
  const meetingTimeStart = Number(meetingStart.split(':')[0]) * 60 + Number(meetingStart.split(':')[1]);
  const meetingTimeEnd = meetingTimeStart + meetingLength;

  /* считаем */
/* return (workDayStart <= meetingTimeStart)
    ? (workDayFin >= meetingTimeEnd)
    : false; */

/* returnWorkDay('8:0', '10:0', '8:0', 120); // true
returnWorkDay('08:00', '14:30', '14:00', 90); // false
returnWorkDay('14:00', '17:30', '08:0', 90); // false
returnWorkDay('8:00', '17:30', '08:00', 900); // false
numberReturn(1.5); */ // 15 */ */
numberReturn(1.5); // 15 */

/* function returnWorkDay (dayStart, dayFin, meetingStart, meetingLength) {
/* бьем аргументы на секции по двоеточию */
/* переводим в единый формат записи */
/* считаем */
