import { swapiService } from "@/services/swapi"
import Image from "next/image";
import { CharacterCard } from "./CharacterCard";
import { SearchInput } from "./SearchInput";
import { SwapiItem } from "@/types/swapi";
import { NavBar } from "./NavBar";

interface MainContainerProps {
    searchParams: Promise<{
        q?: string;
        category?: string;
    }>;
}

export const MainContainer = async ({ searchParams }: MainContainerProps) => {
    
    const resolvedParams = await searchParams; 
    const query = resolvedParams.q;
    const category = resolvedParams.category || 'people';
    
    let items: SwapiItem[] = [];
    let error = null;

    try{
        items = await swapiService.getByType(category, query);

        if (!query && category === 'people'){
            items = [...items].sort(() => 0.5 - Math.random()).slice(0, 8);
        }
    }catch (e) {
        error = "Não foi possível carregar os dados. Tente novamente mais tarde.";
    }
    
    return (
        <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
            <NavBar />
            <div className="hidden xl:flex fixed left-0 top-0 bottom-0 items-center z-0 opacity-40 hover:opacity-100 transition-opacity pointer-events-none">
                <Image 
                    src="/vader.png" 
                    alt="Vader" 
                    width={450} 
                    height={700} 
                    className="object-contain translate-x-[-10%]" 
                />
            </div>
            <div className="hidden xl:flex fixed right-0 top-0 bottom-0 items-center z-0 opacity-40 hover:opacity-100 transition-opacity pointer-events-none">
                <Image 
                    src="/obi-wan.png" 
                    alt="Obi-Wan" 
                    width={450} 
                    height={700} 
                    className="object-contain translate-x-[10%]"
                />
            </div>  
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-8 text-center">
                    <div className="flex w-full justify-center flex-col items-center gap-4">
                        <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold">
                            Pesquisando por: <span className="text-yellow-400">{category === 'people' ? 'Personagens' : category === 'vehicles' ? 'Veículos' : 'Planetas'}</span>
                        </p>
                        <div className="w-full max-w-sm">
                            <SearchInput category={category} />
                        </div>
                    </div>
                </header>
                {error ? (
                    <div className="text-center text-red-500 font-bold p-10 bg-zinc-900 rounded-lg">
                        {error}
                    </div>
                ) : items.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {items.map((item) => (
                            <CharacterCard key={item.name} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center p-20 bg-zinc-900/30 rounded-xl border border-dashed border-zinc-800">
                        <p className="text-xl text-zinc-500 font-medium">
                            {category === 'people' ? 'Personagem' : category === 'vehicles' ? 'Veículo' : 'Planeta'} não encontrado.
                        </p>
                        <p className="text-sm text-zinc-600 mt-2">Tente procurar por outro nome ou termo.</p>
                    </div>
                )}
            </main>
        </div>
    )
}