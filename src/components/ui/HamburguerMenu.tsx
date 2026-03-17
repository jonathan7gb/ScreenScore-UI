import { Menu } from "lucide-react";
import { useState } from "react";
import { ToggleThemeButton } from "./ToggleThemeButton";

export function HamburguerMenu(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                <Menu color="white" />
            </button>

            {isOpen && (
                <div className="absolute right-6 mt-4 bg-background border border-neutral-800 rounded-lg p-6 flex flex-col gap-6 shadow-lg">
                <a href="#" className="font-medium hover:underline transition-all text-text">
                    Movies
                </a>
                <ToggleThemeButton />
                </div>
            )}
        </div>
    )
}
