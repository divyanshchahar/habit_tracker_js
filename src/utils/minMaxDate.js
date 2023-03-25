/**
 * Function to return dates in `YYYY-MM-DD` format where month index starts from 1
 * @returns {Array} - Array of today's date and last date of the year
 */
function minMaxDate() {
  const today = new Date();
  const year = `${today.getFullYear()}`;
  const month =
    today.getMonth() < 10 ? `0${today.getMonth() + 1}` : `${today.getMonth()}`;
  const date = `${today.getDate()}`;

  return [`${year}-${month}-${date}`, `${year}-12-31`];
}

export default minMaxDate;
