"use client";

import { IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";
import Path from "./Path";
import { cn } from "@/lib/utils";

export function SideNavBar() {
    const [active, setActive] = useState(true);

    return (
        <div
            className={clsx(
                "bg-white-200 h-full relative transition-all duration-100 rounded-r-4xl border-black/20 border",
                {
                    "w-80": active,
                    "w-0": !active,
                },
            )}>
            <div className="w-full overflow-hidden rounded-r-4xl py-8">
                <Path isActive={false} text="Clientes" />
                <Path isActive={false} text="Cotizaciones" />
                <Path isActive={false} text="Tareas asignadas" />
                <Path isActive={true} text="Campañas de ads" />
                <Path isActive={false} text="Informe de egresos" />
            </div>

            <div className="absolute right-0 top-[50%] transform translate-y-[-50%] translate-x-full cursor-pointer">
                <div
                    className={cn(
                        "w-5 h-20 rounded-r-lg flex items-center bg-gray-200",
                        "transition-all duration-200 hover:bg-brand-primary/20",
                    )}
                    onClick={() => setActive(!active)}>
                    <IconChevronRight
                        className={clsx(
                            "size-5 transformation transition-all duration-100 stroke-2",
                            { "rotate-180": !active },
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
