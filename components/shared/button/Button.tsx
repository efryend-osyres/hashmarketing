import { Button } from "@/components/ui/button";
import { IconCheck, IconFilter2Edit, IconProps } from "@tabler/icons-react";
import {
    ForwardRefExoticComponent,
    MouseEventHandler,
    RefAttributes,
} from "react";

export function ButtonIcon() {
    return (
        <Button
            size={"lg"}
            className="hover:bg-white! hover:text-black transition duration-200 flex border! border-black!">
            <IconFilter2Edit />
            <span>Filtrar</span>
        </Button>
    );
}

interface ButtonDialogProps {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export function ButtonDialog(props: ButtonDialogProps) {
    const { text = "Aplicar", onClick, icon: Icon = IconCheck } = props;

    return (
        <Button
            size="lg"
            className="hover:bg-white! hover:text-black transition duration-200 flex border! border-black!"
            onClick={onClick}>
            <Icon />
            <span>{text}</span>
        </Button>
    );
}
