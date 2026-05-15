import Image from "next/image";
import { Container } from "../container";
import { cn } from "@/lib/utils";

export function NavbarDashboard() {
    return (
        <Container className={cn("w-full fixed top-0 left-0 py-2")}>
            <div
                className={cn(
                    "w-full justify-between items-center flex h-16",
                    "bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg",
                )}>
                <div className="relative h-full w-40">
                    <Image
                        src="/svg/logo/logo.svg"
                        alt="logo"
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                    />
                </div>

                <div>
                    <div className="rounded-full w-12 h-12 overflow-hidden relative">
                        <Image
                            src="/img/user/dua.jpg"
                            alt="user"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}
