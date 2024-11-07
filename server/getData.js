import axios from "axios";
import cheerio from 'cheerio';

async function fetchHTML(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function parseHTML(html) {
  const $ = cheerio.load(html);
  const events = [];

  const combinedEvent = {
    time: "",
    tournament: "",
    teams: []
  };

  $(html).each((index, element) => {
    const teams = [];

    const time = $(element).find('.column-date').text().trim();
    const tournament = $(element).find('.column-team a').text().trim();

    $(element).find('.column-club').each((index, clubElement) => {
      const clubName = $(clubElement).find('.club-name').text().trim();
      const logoElement = $(clubElement).find('.club-logo span');
      const teamLogo = 'https:' + logoElement.attr('data-responsive-image');

      const team = {
        club: clubName,
        logo: teamLogo
      };

      teams.push(team);
    });

    combinedEvent.time = time || combinedEvent.time;
    combinedEvent.tournament = tournament || combinedEvent.tournament;
    combinedEvent.teams = [...combinedEvent.teams, ...teams];
  });

  events.push(combinedEvent);

  return events;
}

async function getData(apiUrl) {
  try {
    const html = await fetchHTML(apiUrl);
    const events = parseHTML(html);
    return events;
  } catch (error) {
    throw error;
  }
}

export default getData;
