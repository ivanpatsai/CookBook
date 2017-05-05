import moment from 'moment';

export const renderDate = (created) => {
    return moment(created).format('D MMM YY [at] H:mm')
};