
const getAnimeById = async (id, setter) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    setter(data.data);
  };

  const getCharactersById = async (id,setter) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    const data = await response.json();
    setter(data.data);
  };

  const getCharactersFullInfoById = async (id,setter) => {
    const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/full`);
    const data = await response.json();
    setter(data.data);
  };

  const getApparitionsById = async (id, setter) => {
    const response = await fetch(`https://api.jikan.moe/v4/characters/${id}/anime`)
    const data = await response.json();
    setter(data.data);
  }

  export { getAnimeById, getCharactersById, getCharactersFullInfoById, getApparitionsById};