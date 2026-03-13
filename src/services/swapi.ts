import { Character } from "@/types/swapi";

const BASE_URL = "https://swapi.dev/api";

export const swapiService = {
    async getCharacters(): Promise<Character[]> {
        try{
            const res = await fetch (`${BASE_URL}/people/`, {
                next: {revalidate: 3600}
            });

            if(!res.ok) {
             throw new Error(`Erro HTTP: ${res.status}`);   
            }

            const data = await res.json();

            const shuffled = data.results.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 8);

        }catch (error){
            console.error("Erro ao buscar personagens:", error);
            throw new Error("Erro ao carregar os personagens da SWAPI.");
        }
    },
    
    async searchCharacters(query: string): Promise<Character[]> {
        try{
            const res = await fetch(`${BASE_URL}/people/?search=${query}`,{
                next: {revalidate: 3600 }
            });

            if(!res.ok) throw new Error(`Erro HTTP: ${res.status}`);

            const data = await res.json();
            return data.results;
        }catch (error){
            console.error("Erro na busca:", error);
            throw new Error("Erro ao pesquisar personagem.");
        }   
    }
}