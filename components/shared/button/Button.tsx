import { Button } from "@/components/ui/button";
import { IconCheck, IconFilter2Edit } from "@tabler/icons-react";
import { MouseEventHandler } from "react";

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
}

export function ButtonDialog(props: ButtonDialogProps) {
    const { text = "Aplicar", onClick } = props;

    return (
        <Button
            size="lg"
            className="hover:bg-white! hover:text-black transition duration-200 flex border! border-black!"
            onClick={onClick}>
            <IconCheck />
            <span>{text}</span>
        </Button>
    );
}
