import { Character } from "@/types/swapi"

export const CharacterCard = ({person}: {person:Character}) => {
    return(
        <div className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6 hover:border-yellow-500 transition-colors group">
        <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-white group-hover:text-yellow-400">{person.name}</h2>
            <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
            {person.birth_year}
            </span>
        </div>
        
        <div className="space-y-2 text-sm text-zinc-400">
            <p><span className="text-zinc-500">Gênero:</span> {person.gender}</p>
            <p><span className="text-zinc-500">Altura:</span> {person.height}cm</p>
        </div>
        
        <button className="mt-6 w-full py-2 bg-zinc-800 hover:bg-yellow-600 hover:text-black text-white font-medium rounded-lg transition-all">
            Ver Detalhes
        </button>
        </div>
    );
}