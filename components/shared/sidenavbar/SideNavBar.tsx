"use client";

import { IconChevronRight } from "@tabler/icons-react";
import clsx from "clsx";
import { useState } from "react";
import { cn } from "@/lib/utils";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Sections from "./Sections";

export function SideNavBar() {
    const [active, setActive] = useState(true);

    return (
        <div
            className={clsx(
                "hidden lg:block",
                "bg-white/30 h-full relative transition-all duration-100 rounded-r-4xl border-gray-200 border",
                {
                    "w-80": active,
                    "w-0": !active,
                },
            )}>
            <div className="w-full overflow-hidden rounded-r-4xl py-8">
                <Sections />
            </div>

            <div className="absolute right-0 top-[50%] transform translate-y-[-50%] translate-x-full cursor-pointer">
                <div
                    className={cn(
                        "border border-black bg-black text-white",
                        "hover:bg-white hover:text-black",
                        "w-5 h-20 rounded-r-lg flex items-center",
                        "transition-all duration-200",
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

export function MovileSideNavBar() {
    return (
        <Sheet>
            <SheetTrigger className="block lg:hidden fixed left-0 top-[50%] z-20">
                <div
                    className={cn(
                        "border border-black bg-black text-white",
                        "hover:bg-white hover:text-black",
                        "w-5 h-20 rounded-r-lg flex items-center",
                        "transition-all duration-200",
                    )}>
                    <IconChevronRight
                        className={clsx(
                            "size-5 transformation transition-all duration-100 stroke-2",
                        )}
                    />
                </div>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menú</SheetTitle>
                </SheetHeader>

                <div>
                    <Sections />
                </div>
            </SheetContent>
        </Sheet>
    );
}
