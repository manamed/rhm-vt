import dayjs from 'dayjs';

const displayDate = (timestamp: number) => {
  return dayjs.unix(timestamp).format('MMM D, YYYY, h:mm A');
};

export default displayDate;
