
export function getAllStarships() {
  const BASE_URL = 'https://swapi.co/api/';
  const url = `${BASE_URL}starships`;

  return fetch(url, {mode: 'cors'}).then(res => res.json());
}

export async function getAllPilots(pilotUrls) {
  const promises = pilotUrls.map(url => fetch(url)
                            .then(res => res.json()));
  const pilotObjects = await Promise.all(promises);
  return pilotObjects;
}