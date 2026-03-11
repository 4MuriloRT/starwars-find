import { NavBar } from "./NavBar"

export const MainContainer = () => {
    return(
        <div>    
            <main className="flex flex-col h-full overflow-y-auto mt-4">
                <NavBar/>
            </main>
        </div>
    )
}