import { swapiService } from "@/services/swapi"
import { Character } from "@/types/swapi";
import { NavBar } from "./NavBar"
import Image from "next/image";
import { CharacterCard } from "./CharacterCard";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

export const MainContainer = async() => {
    let characters:Character[] = [];
    let error = null;

    try{
        characters = await swapiService.getCharacters();
    }catch (e) {
        error = "Não foi possível carregar os personagens. Tente novamente mais tarde.";
    }
    
    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
            <NavBar />
            <div className="hidden xl:block fixed left-0 bottom-0 z-0 opacity-50 hover:opacity-100 transition-opacity">
                <Image 
                    src="/vader.png" 
                    alt="Vader" 
                    width={400} 
                    height={600} 
                    className="object-contain"
                />
            </div>
            <div className="hidden xl:block fixed right-0 bottom-0 z-0 opacity-50 hover:opacity-100 transition-opacity">
                <Image 
                    src="/obi-wan.png" 
                    alt="Obi-Wan" 
                    width={400} 
                    height={600} 
                    className="object-contain"
                />
            </div>
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-12 text-center">
                    <div className="flex w-full justify-center">
                        <InputGroup className="max-w-xs">
                            <InputGroupInput placeholder="Procurar Personagem" />
                            <InputGroupAddon>
                                <Search/>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </header>
                {error ? (
                    <div className="text-center text-red-500 font-bold p-10 bg-zinc-900 rounded-lg">
                        {error}
                    </div>
                ): (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {characters.map((person) => (
                            <CharacterCard key={person.name} person={person} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}