import moment from 'moment';

export const getFormatedDateAndTime = (date: Date) => {
  return moment(date).format('DD MMM YYYY - hh:mm:ss A');
};
