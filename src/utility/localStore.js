
export function setWeeklyWeatherData(data) {
    localStorage.setItem('weeklydata', JSON.stringify(data));
}
export function getWeeklyWeatherData() {
    const data = JSON.parse(localStorage.getItem('weeklydata'));
    return data;
}
export function setTodaysWeatherData(data) {
    localStorage.setItem('todaysData', JSON.stringify(data));
}
export function getTodaysWeatherData() {
    const data = JSON.parse(localStorage.getItem('todaysData'));
    return data;
}