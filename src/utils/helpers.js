import moment from 'moment';

moment.locale('en');

const time = {
  convertTime: (timestamp) => moment(timestamp * 1000).format('ddd, MMM D'),
}

export default time;
