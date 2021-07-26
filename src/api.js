const base_url = 'https://api.rawg.io/api/';
const KEY = 'd668e7c837aa4ea2abc4df008427a22a'
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

const popular_games = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (gameId) => `${base_url}games/${gameId}?key=${KEY}`;
export const gameScreenShotURL = (gameId) => `${base_url}games/${gameId}/screenshots?key=${KEY}`;
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9&key=${KEY}`;