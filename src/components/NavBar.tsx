'use client'; 

import Image from "next/image";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { useRouter, useSearchParams } from "next/navigation";

export const NavBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get('category') || 'people';
    
    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams(searchParams);
        params.set('category', category);
        params.delete('q');
        router.push(`?${params.toString()}`);
    };
    
    return(
        <header className="top-0 left-0 right-0 z-40">
            <div className="flex items-center mx-auto px-4 justify-center">
                    <Image 
                        src="/Logo-Principal.png" 
                        alt="Logo site" 
                        width={200} 
                        height={200} 
                        className="w-auto h-auto mt-10 object-contain"
                    />
            </div>
            <div className="flex w-full justify-center">
                <Menubar className="flex w-auto mt-5 justify-center bg-black/60 backdrop-blur-md border border-zinc-800 p-1 rounded-full px-2 gap-1">
                    {['people', 'vehicles', 'planets'].map((cat) => (
                        <MenubarMenu key={cat}>
                            <MenubarTrigger 
                                onClick={() => handleCategoryChange(cat)}
                                className={`
                                    px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter transition-all
                                    ${currentCategory === cat 
                                        ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]" 
                                        : "text-zinc-500 hover:text-white hover:bg-zinc-800"}
                                    focus:outline-none border-none
                                `}
                            >
                                {cat === 'people' ? 'Personagens' : cat === 'vehicles' ? 'Veículos' : 'Planetas'}
                            </MenubarTrigger>
                        </MenubarMenu>
                    ))}
                </Menubar>
            </div>
        </header>
    );
}