const days = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];
const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

export const formatDate = (date) => {
  const newDate = new Date(date);
  let formatted_date = months[newDate.getMonth()] + ' ' + newDate.getDate() + ' ' + newDate.getFullYear();
  return formatted_date;
}

export const formatDay = (date) => {
  const newDate = new Date(date);
  let formatted_day = days[newDate.getDay()].toUpperCase();
  return formatted_day;
}

export const formatTime = (date) => {
  const newDate = new Date(date);
  
  let formatted_time = newDate.toLocaleDateString('es-ES');
  return formatted_time;
}