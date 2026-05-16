import { IconChevronRight, IconMoneybag, IconProps } from "@tabler/icons-react";
import clsx from "clsx";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface ComponentPath {
    isActive?: boolean;
    text: string;
    icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export default function Path(props: ComponentPath) {
    const { isActive, text, icon: Icon = IconMoneybag } = props;

    return (
        <div
            className={clsx(
                "py-3 px-3 flex items-center cursor-pointer",
                "transition duration-200",
                {
                    "bg-black text-white rounded-r-full": isActive,
                    "bg-white text-black hover:bg-brand-primary/10": !isActive,
                },
            )}>
            <div className="flex items-center w-full">
                <Icon className="size-6 shrink-0 pr-2" />
                <div className="w-full">{text}</div>
            </div>
            <IconChevronRight
                className={clsx("shrink-0 size-5", { invisible: !isActive })}
            />
        </div>
    );
}
