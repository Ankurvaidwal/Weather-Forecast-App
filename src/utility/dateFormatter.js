export function getWeekDay(timestamp) {
    const date = new Date(timestamp * 1000);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdayName = weekdays[date.getDay()];
    return weekdayName;
}