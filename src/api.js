const base_url = 'https://api.rawg.io/api/';

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return (month < 10 ) ? `0${month}`: month; 
}
const getCurrentDay = () => {
  const day = new Date().getDate();
  return (day < 10 ) ? `0${day}`: day; 
}
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentYear = new Date().getFullYear();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${process.env.GAME_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const popularGamesURL = () => `${base_url}${popular_games}`;
