const days = ['LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO', 'DOMINGO'];

export const getDay = (date, startsAtSunday) => {
  const newDate = new Date(date);
  let day;
  if (startsAtSunday) {
    day = days[newDate.getDay() - 1];
  } else {
    day = days[newDate.getDay()];
  }
  return day;
}

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Date(date);
  let formattedDate = newDate.toLocaleDateString(undefined, options);
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