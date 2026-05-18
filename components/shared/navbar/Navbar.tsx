import Image from "next/image";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { UserMenu } from "../usermenu";

export function NavbarDashboard() {
    return (
        <Container className={cn("w-full fixed top-0 left-0 py-2 z-20")}>
            <div
                className={cn(
                    "w-full justify-between items-center flex h-16 px-3",
                    "bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg",
                )}>
                <div className="relative h-full w-28 md:w-40">
                    <Image
                        src="/svg/logo/logo.svg"
                        alt="logo"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>

                <UserMenu />
            </div>
        </Container>
    );
}
