import Path from "./Path";
import {
    IconAd,
    IconFileDollar,
    IconHandGrab,
    IconPigMoney,
    IconSubtask,
    IconUserStar,
} from "@tabler/icons-react";

export default function Sections() {
    return (
        <>
            <Path isActive={false} text="Clientes" icon={IconUserStar} />
            <Path isActive={false} text="Cotizaciones" icon={IconFileDollar} />
            <Path isActive={false} text="Tareas asignadas" icon={IconSubtask} />
            <Path isActive={true} text="Campañas de ads" icon={IconAd} />
            <Path
                isActive={false}
                text="Informe de ingresos"
                icon={IconPigMoney}
            />
        </>
    );
}
