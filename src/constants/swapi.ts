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