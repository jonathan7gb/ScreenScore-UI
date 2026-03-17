import { SunMoon } from "lucide-react";

export function ToggleThemeButton(){
    return (
        <button className="p-2 rounded-full border border-gray-600 flex flex-row justify-center items-center hover:bg-gray-600 transition-all cursor-pointer">
            <SunMoon color="white"/>
        </button>

    )
}
