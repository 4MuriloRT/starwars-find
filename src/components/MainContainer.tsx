import { swapiService } from "@/services/swapi"
import { NavBar } from "./NavBar"
import { CharacterCard } from "./CharacterCard";

export const MainContainer = async() => {
    const characters = await swapiService.getCharacters();
    
    return(
        <div className="min-h-screen bg-black text-white">
            <NavBar />
            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                    Personagens <span className="text-yellow-500">SWAPI</span>
                </h1>
                <p className="mt-4 text-zinc-400">Explore os habitantes da galáxia muito, muito distante.</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {characters.map((person) => (
                    <CharacterCard key={person.name} person={person} />
                ))}
                </div>
            </main>
        </div>
    )
}   