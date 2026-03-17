import { ToggleThemeButton } from "./ui/ToggleThemeButton";
import { HamburguerMenu } from "./ui/HamburguerMenu";
import { Link } from "react-router-dom";



export function Header(){
    return ( 
    <header className="py-6 px-4 lg:px-16 lg:py-8 border-b border-primary/25">
        <div className="flex flex-row justify-between items-center font-sans">
            <h1 className="text-primary text-3xl font-bold hover:scale-110 transition-all duration-500">ScreenScore API</h1>
            
            {/* DESKTOP MENU */}
            <div className="text-text hidden md:flex flex-row gap-10 items-center justify-center">
                <Link to="/" className="font-medium hover:underline transition-all">Home</Link>
                <Link to="/movies" className="font-medium hover:underline transition-all">Filmes</Link>
                <ToggleThemeButton />
            </div>

            {/* MOBILE MENU */}
            <HamburguerMenu />
            
        </div>
    </header>
    )
}
