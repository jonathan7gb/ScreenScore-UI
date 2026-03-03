import ToggleThemeButton from "./toggleThemeButton";
import HamburguerMenu from "./hamburguerMenu";


function Header(){
    return ( 
    <header className="p-4 md:p-8 lg:px-16 lg:py-8 border-b border-primary/50">
        <div className="flex flex-row justify-between items-center font-sans">
            <h1 className="text-primary text-3xl font-bold">ScreenScore API</h1>
            
            {/* DESKTOP MENU */}
            <div className="text-text hidden md:flex flex-row gap-10 items-center justify-center">
                <a href="#" className="font-medium hover:underline transition-all">Movies</a>
                <ToggleThemeButton />
            </div>

            {/* MOBILE MENU */}
            <HamburguerMenu />
            
        </div>
    </header>
    )
}

export default Header;