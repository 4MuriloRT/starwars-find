'use client'; 

import Image from "next/image";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { useRouter, useSearchParams } from "next/navigation";

export const NavBar = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    
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
                <Menubar className="flex w-auto mt-5 justify-center bg-zinc-900 border-zinc-800">
                    <MenubarMenu>
                        <MenubarTrigger onClick={() => handleCategoryChange('people')}>Personagens</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger onClick={() => handleCategoryChange('vehicles')}>Veículos</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger onClick={() => handleCategoryChange('planets')}>Planetas</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}