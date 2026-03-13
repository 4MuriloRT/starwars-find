import { Menubar } from "@base-ui/react";
import Image from "next/image";
import { MenubarMenu, MenubarTrigger } from "./ui/menubar";

export const NavBar = () => {
    return(
        <header className="top-0 left-0 right-0 z-40">
            <div className="flex items-center">
                <div className="flex items-center mx-auto px-4 ">
                    <Image 
                        src="/Logo-Principal.png" 
                        alt="Logo site" 
                        width={200} 
                        height={200} 
                        className="w-auto h-auto mt-10 object-contain"
                    />
                </div>
            </div>
            <div className="flex w-full justify-center">
                <Menubar className="flex w-72 mt-5 justify-center">
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Profiles</MenubarTrigger>
                </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}