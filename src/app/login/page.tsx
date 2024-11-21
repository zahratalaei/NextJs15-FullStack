import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LonginPage(){
    return(
        <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
            <h1>Art Shop</h1>
            <Button asChild>
                <LoginLink>Sign In</LoginLink>
            </Button>
        </main>
    )
}