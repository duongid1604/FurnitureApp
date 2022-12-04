const leadingZeroLessTwoDigits = (num: number) => {
  if (num === 0) {
    return 0;
  }
  if (num < 10) {
    return ('0' + num).slice(-2);
  }
  return num;
};

export default leadingZeroLessTwoDigits;
