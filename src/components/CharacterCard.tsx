'use client';

import { SwapiItem } from "@/types/swapi"
import { getFilmTitle, getPlanetName } from "@/constants/swapi";
import { 
    Dialog,
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger
} from "./ui/dialog";

interface CharacterCardProps{
    item: SwapiItem;
}

export const CharacterCard = ({item}: CharacterCardProps) => {
    return(
        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:border-yellow-400 transition-colors group">
            <h2 className="text-xl font-bold mb-2 group-hover:text-yellow-400">
                {item.name}
            </h2>
            
            <div className="grow space-y-2 text-sm text-zinc-400 mb-4">
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
                        <DialogTitle className="text-2xl text-yellow-400">{item.name}</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-6 py-4">
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-3">
                                {item.model ? "Especificações do Veículo" : item.climate ? "Dados Planetários" : "Informações Biológicas"}
                            </h3>
                            {item.climate ? (
                                <>
                                    <div>
                                        <p className="text-zinc-500">Clima</p>
                                        <p className="text-zinc-200 font-medium">{item.climate}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Gravidade</p>
                                        <p className="text-zinc-200 font-medium">{item.gravity || 'N/A'}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-zinc-500">Terreno</p>
                                        <p className="text-zinc-200 font-medium">{item.terrain}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">População</p>
                                        <p className="text-zinc-200 font-medium">{item.population}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Diâmetro</p>
                                        <p className="text-zinc-200 font-medium">{item.diameter}km</p>
                                    </div>
                                </>
                            ) : item.model ? (
                                <>
                                    <div className="col-span-2">
                                        <p className="text-zinc-500">Modelo</p>
                                        <p className="text-zinc-200 font-medium">{item.model}</p>
                                    </div>
                                    <div className="col-span-2">
                                        <p className="text-zinc-500">Fabricante</p>
                                        <p className="text-zinc-200 font-medium">{item.manufacturer}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Velocidade Máx.</p>
                                        <p className="text-zinc-200 font-medium">{item.max_atmosphering_speed} km/h</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Custo</p>
                                        <p className="font-medium text-yellow-500">
                                            {item.cost_in_credits !== "unknown" ? `${item.cost_in_credits} créditos` : "Preço sob consulta"}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Tripulação</p>
                                        <p className="text-zinc-200 font-medium">{item.crew}</p>
                                    </div>
                                    <div>
                                        <p className="text-zinc-500">Passageiros</p>
                                        <p className="text-zinc-200 font-medium">{item.passengers}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="grid grid-cols-2 gap-4 text-sm bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                                        <div>
                                            <p className="text-zinc-500">Planeta Natal</p>
                                            <p className="text-zinc-200 font-medium">{getPlanetName(item.homeworld)}</p>
                                        </div>
                                        <div>
                                            <p className="text-zinc-500">Gênero</p>
                                            <p className="text-zinc-200 font-medium">{item.gender || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-zinc-500">Cabelo</p>
                                            <p className="text-zinc-200 font-medium">{item.hair_color || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <p className="text-zinc-500">Olhos</p>
                                            <p className="text-zinc-200 font-medium">{item.eye_color || 'N/A'}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </section>
                        {item.eye_color ? (
                            <section className="grid grid-cols-2 gap-4">
                                <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 text-center">
                                    <p className="text-xs text-zinc-500 uppercase">Altura</p>
                                    <p className="text-lg font-bold text-yellow-400">{item.height}cm</p>
                                </div>
                                <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800 text-center">
                                    <p className="text-xs text-zinc-500 uppercase">Peso</p>
                                    <p className="text-lg font-bold text-yellow-400">{item.mass}kg</p>
                                </div>
                            </section>
                        ):(
                            <></>
                        )}
                        <section>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-2">Aparições em Filmes</h3>
                            <div className="flex flex-wrap gap-2">
                                {item.films?.map((filmUrl: string) => (
                                    <span key={filmUrl} className="px-3 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs border border-zinc-700">
                                        {getFilmTitle(filmUrl)}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}