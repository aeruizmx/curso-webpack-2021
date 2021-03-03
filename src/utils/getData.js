const POKE_API = process.env.POKE_API;
const NAME_API = process.env.NAMES_API;

export const getPokeData = async (randomId) => {
  const apiURl = randomId ? `${POKE_API}${randomId}` : `${POKE_API}${1}`;
  try {
    const response = await fetch(apiURl);
    if(response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export const getNameData = async () => {
  try {
    const response = await fetch(NAME_API);
    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log('Fetch Error', error);
  };
};