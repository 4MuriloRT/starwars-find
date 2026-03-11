export interface Character {
    name: string;
    birth_year: string;
    eye_color: string;
    hair_color: string;
    skin_color: string;
    gender: string;
    height: string;
    mass: string;
    homeworld: string;
    species: string[];
}

export interface SwaipResponse {
    results: Character[];
}