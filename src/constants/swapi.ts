export const FILM_NAMES: Record<string, string> = {
    "1": "A New Hope",
    "2": "The Empire Strikes Back",
    "3": "Return of the Jedi",
    "4": "The Phantom Menace",
    "5": "Attack of the Clones",
    "6": "Revenge of the Sith",
};

export const getFilmTitle = (url: string) => {
    const id = url.split("/").filter(Boolean).pop();
    return id ? FILM_NAMES[id] || `Episode ${id}` : "Unknown Film";
};

export const PLANET_NAMES: Record<string, string> = {
    "1": "Tatooine",
    "2": "Alderaan",
    "7": "Endor",
    "8": "Naboo",
    "9": "Coruscant",
    "10": "Kamino",
};

export const getPlanetName = (url?: string) => {
    if(!url) return "Desconhecido";
    const id = url.split("/").filter(Boolean).pop();
    return id ? PLANET_NAMES[id] || `Sistema ${id}` : "Desconhecido";
}