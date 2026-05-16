"use client";

import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    IconChevronDown,
    IconLogout,
    IconUser,
    IconZeroConfig,
} from "@tabler/icons-react";

export function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="flex items-center cursor-pointer">
                    <IconChevronDown
                        className="size-4 stroke-gray-500"
                        stroke={"2"}
                    />
                    <div className="rounded-full size-12.5 overflow-hidden relative border border-gray-200 hover:border-brand-primary transition duration-200">
                        <Image
                            src="/img/user/dua.jpg"
                            alt="user"
                            fill
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                    <DropdownMenuItem>
                        <IconUser /> Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <IconZeroConfig /> Configuración
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <IconLogout /> Cerrar sesión
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
