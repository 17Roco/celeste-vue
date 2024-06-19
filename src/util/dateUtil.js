import moment from 'moment'

const dateFormat = 'YYYY-MM-DD'



export const formatDate = date => moment(date).format(dateFormat)