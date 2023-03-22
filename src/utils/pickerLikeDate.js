function pickerLikeDate(dateString) {
  const [year, month, date] = dateString.split("-");

  const processedMonth = Number(month) < 10 ? `0${month}` : month;
  const processeddDate = Number(date) < 10 ? `0${date}` : date;

  return `${year}-${processedMonth}-${processeddDate}`;
}

export default pickerLikeDate;
