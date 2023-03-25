/**
 * Function to convert date from YYYY-M-D to YYYY-MM-DD i.e. 2023-03-09 will get converted to 2023-3-9
 * @param {String} dateString - date in the format of YYYY-MM-DD
 * @returns {String} - date in format of YYYY-MM-DD i.e. 2023-03-09
 */

function pickerLikeDate(dateString) {
  const [year, month, date] = dateString.split("-");

  const processedMonth = Number(month) < 10 ? `0${month}` : month;
  const processeddDate = Number(date) < 10 ? `0${date}` : date;

  return `${year}-${processedMonth}-${processeddDate}`;
}

export default pickerLikeDate;
