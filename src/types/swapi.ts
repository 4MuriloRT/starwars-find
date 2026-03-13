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
    films: string[];
}

export interface Planet {
    name: string;
    climate: string;
    terrain: string;
    population: string;
    diameter: string;
    films: string[];
}

export interface Vehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    films: string[];
}

export type SwapiItem = Character & Partial<Planet> & Partial<Vehicle>;