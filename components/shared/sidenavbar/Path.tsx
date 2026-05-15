import { IconChevronRight, IconMoneybag } from "@tabler/icons-react";
import clsx from "clsx";

interface ComponentPath {
    isActive?: boolean;
    text: string;
}

export default function Path(props: ComponentPath) {
    const { isActive, text } = props;

    return (
        <div
            className={clsx(
                "py-3 px-3 rounded-r-full flex items-center cursor-pointer",
                "transition duration-200",
                {
                    "bg-black text-white": isActive,
                    "bg-white text-black hover:bg-brand-primary/10": !isActive,
                },
            )}>
            <div className="flex items-center w-full">
                <IconMoneybag className="size-6 shrink-0 pr-2" />
                <div className="w-full">{text}</div>
            </div>
            <IconChevronRight
                className={clsx("shrink-0 size-5", { invisible: !isActive })}
            />
        </div>
    );
}
