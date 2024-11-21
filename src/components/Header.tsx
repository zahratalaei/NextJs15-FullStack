import { HomeIcon,File, UserRound } from "lucide-react";
import Link from 'next/link';
import { NavButton } from "@/components/NavButton";
import { ModeToggle } from "@/components/ModeToggle";

export function Header(){
    return (
        <header className="animate-slide bg-background h12 p2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" icon={HomeIcon} label="Home"/>
                        
                    <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home"> 
                    <h1 className="hidden sm:block text-xl font-bold m-0 mt-1"> Computer Repair Shop</h1>
                    </Link>
                </div>
                <div className="flex items-center">
                <NavButton href="/tickets" icon={File} label="Tickets"/>
                <NavButton href="/customers" icon={UserRound} label="Customers"/>
                <ModeToggle/>
                </div>

            </div>
        </header>
    )
}