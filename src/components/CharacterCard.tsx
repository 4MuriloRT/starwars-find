import { SwapiItem } from "@/types/swapi"

interface CharacterCardProps{
    item: SwapiItem;
}

export const CharacterCard = ({item}: CharacterCardProps) => {
    return(
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-yellow-400 transition-colors group">
            <h2 className="text-xl font-bold mb-4 group-hover:text-yellow-400">{item.name}</h2>
            
            <div className="space-y-2 text-sm text-zinc-400">
                {item.gender && <p><span className="font-semibold">Gênero:</span> {item.gender}</p>}
                {item.eye_color && <p><span className="font-semibold">Olhos:</span> {item.eye_color}</p>}
                
                {item.climate && <p><span className="font-semibold">Clima:</span> {item.climate}</p>}
                {item.terrain && <p><span className="font-semibold">Terreno:</span> {item.terrain}</p>}
                
                {item.model && <p><span className="font-semibold">Modelo:</span> {item.model}</p>}
                {item.manufacturer && <p><span className="font-semibold">Fabricante:</span> {item.manufacturer}</p>}
            </div>
        </div>
    );
}