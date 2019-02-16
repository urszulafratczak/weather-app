const WEEKDAYS = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export const getDayName = (date) => {
    return WEEKDAYS[date.getDay()];
}

export default getDayName;