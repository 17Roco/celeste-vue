import moment from 'moment';

export const formatDate = (date: Date|string) => {
    if (!date)
        return '';
    if (typeof date ==='string')
        date = new Date(date);
    return moment(date).format('YYYY-MM-DD');
}

export const toDate = (date: string) => moment(date, 'YYYY-MM-DD').toDate()

