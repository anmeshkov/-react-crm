// функкция для перевода даты из формата ISO в формат dd.mm.yyyy hh:mm:ss
const modifyDate = (date) => {
  // опции для форматирования даты
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  // форматирование даты в формат dd.mm.yyyy hh:mm:ss
  return new Date(date).toLocaleDateString("ru-RU", options);
}
 
export default modifyDate;