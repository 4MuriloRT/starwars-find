'use client';

import { SwapiItem } from "@/types/swapi"
import { getFilmTitle } from "@/constants/swapi";
import { 
    Dialog,
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger
} from "./ui/dialog";
import { Button } from "./ui/button";

interface CharacterCardProps{
    item: SwapiItem;
}

export const CharacterCard = ({item}: CharacterCardProps) => {
    return(
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-yellow-400 transition-colors group">
            <h2 className="text-xl font-bold mb-4 group-hover:text-yellow-400">{item.name}</h2>
            
            <div className="grow space-y-2 text-sm text-zinc-400 mb-6">
                {item.gender && <p><span className="font-semibold text-zinc-300">Gênero:</span> {item.gender}</p>}
                {item.model && <p><span className="font-semibold text-zinc-300">Modelo:</span> {item.model}</p>}
                {item.terrain && <p><span className="font-semibold text-zinc-300">Terreno:</span> {item.terrain}</p>}
            </div>

            <Dialog>
                <DialogTrigger>
                    <div className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium border border-zinc-700 hover:bg-yellow-400 hover:text-black h-10 px-4 py-2 transition-colors cursor-pointer">
                        Mais detalhes
                    </div>
                </DialogTrigger>
                <DialogContent className="bg-zinc-950 border-zinc-800 text-white sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-starwars text-yellow-400">{item.name}</DialogTitle>
                    </DialogHeader>
                    
                    <div className="grid gap-4 py-4">
                        <div className="space-y-4">
                            <section>
                                <h3 className="text-lg font-semibold text-zinc-100 mb-2 border-b border-zinc-800 pb-1">Características</h3>
                                <div className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
                                    {item.height && <p>Altura: <span className="text-zinc-200">{item.height}cm</span></p>}
                                    {item.mass && <p>Peso: <span className="text-zinc-200">{item.mass}kg</span></p>}
                                    {item.hair_color && <p>Cabelo: <span className="text-zinc-200">{item.hair_color}</span></p>}
                                    {item.eye_color && <p>Olhos: <span className="text-zinc-200">{item.eye_color}</span></p>}
                                    {item.climate && <p>Clima: <span className="text-zinc-200">{item.climate}</span></p>}
                                    {item.population && <p>População: <span className="text-zinc-200">{item.population}</span></p>}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-lg font-semibold text-zinc-100 mb-2 border-b border-zinc-800 pb-1">Filmes</h3>
                                <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1">
                                    {item.films?.map((filmUrl: string) => (
                                        <li key={filmUrl}>{getFilmTitle(filmUrl)}</li>
                                    )) || <li>Nenhum filme registrado.</li>}
                                </ul>
                            </section>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}