import Image from "next/image";

export const NavBar = () => {
    return(
        <header className="fixed top-0 left-0 right-0 z-40 lg:static">
            <div className="flex items-center">
                <div className="h-10 flex items-center mx-auto px-4 ">
                    <Image src="/Logo.png" alt="Logo site" width={100} height={100} />
                </div>
            </div>
        </header>
    );
}