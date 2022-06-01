const days = ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'];

export const getDay = (date) => {
  const newDate = new Date(date);
  let day = days[newDate.getDay()];
  return day;
}

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Date(date);
  let formattedDate = newDate.toLocaleDateString('es-ES', options);
  return formattedDate;
}


export const testDate = (date) => {
  const newDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  let day = days[newDate.getDay()];
  let formattedDate = newDate.toLocaleDateString('es-ES', options);
  let formatted_time = day + ' ' + formattedDate;
  return formatted_time;
}