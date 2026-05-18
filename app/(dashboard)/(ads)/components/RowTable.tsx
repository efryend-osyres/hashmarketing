"use client";

import { Campaign } from "@/app/api/campaigns/campaigns.types";
import { ButtonDialog } from "@/components/shared/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Chart } from "./Chart";
import Image from "next/image";
import { companies } from "../data/company.data";
import { states } from "../data/state.data";
import { IconXboxX } from "@tabler/icons-react";
import { platforms } from "../data/platforms.data";

interface RowTableProps {
    campaign: Campaign;
}

export default function RowTable(props: RowTableProps) {
    const { campaign } = props;

    const [isOpen, setIsOpen] = useState(false);

    const ClickClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <tr
                        key={campaign.id}
                        className="border-b hover:bg-gray-50 transition cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            <div className="relative w-20 h-7">
                                <Image
                                    className="w-full h-full"
                                    src={
                                        companies.find(
                                            (obj) =>
                                                obj.id === campaign.client_id,
                                        )?.icon || ""
                                    }
                                    alt={`company_${campaign.id}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">
                            <div className="relative w-20 h-7">
                                <Image
                                    className="w-full h-full"
                                    src={
                                        platforms.find(
                                            (obj) =>
                                                obj.id === campaign.platform_id,
                                        )?.icon || ""
                                    }
                                    alt={`company_${campaign.id}`}
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {campaign.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600 capitalize text-xs">
                            <div
                                className="p-1 w-fit rounded-md"
                                style={{
                                    backgroundColor: states.find(
                                        (obj) => obj.id == campaign.state_id,
                                    )?.color,
                                }}>
                                {campaign.state}
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {campaign.cost}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {campaign.roas}
                        </td>
                    </tr>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg p-5 md:p-10 max-h-[95vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="font-bold">
                            Detalle de la campaña
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-5 text-sm md:text-base">
                            <div className="space-y-0 col-span-2">
                                <div className=" font-semibold">
                                    Nombre campaña
                                </div>
                                <div className="">{campaign.name}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">Cliente</div>
                                <div className="relative w-20 h-7">
                                    <Image
                                        className="w-full h-full"
                                        src={
                                            companies.find(
                                                (obj) =>
                                                    obj.id ===
                                                    campaign.client_id,
                                            )?.icon || ""
                                        }
                                        alt={`company_${campaign.id}`}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">Plataforma</div>
                                <div className="relative w-20 h-7">
                                    <Image
                                        className="w-full h-full"
                                        src={
                                            platforms.find(
                                                (obj) =>
                                                    obj.id ===
                                                    campaign.platform_id,
                                            )?.icon || ""
                                        }
                                        alt={`company_${campaign.id}`}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 w-full" />

                        <div className="grid grid-cols-3 gap-5 text-xs md:text-sm">
                            <div className="space-y-0">
                                <div className="font-semibold">Estado</div>
                                <div className="">
                                    <div
                                        className="p-1 w-fit rounded-md"
                                        style={{
                                            backgroundColor: states.find(
                                                (obj) =>
                                                    obj.id == campaign.state_id,
                                            )?.color,
                                        }}>
                                        {campaign.state}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">Costo</div>
                                <div className="">$ {campaign.cost}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">ROAS</div>
                                <div className="">{campaign.roas}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">
                                    Conversiones
                                </div>
                                <div className="">{campaign.conversions}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">
                                    Tasa Conversion
                                </div>
                                <div className="">
                                    {campaign.conversion_rate}
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">
                                    Valor Conversion
                                </div>
                                <div className="">
                                    {campaign.conversion_value}
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">Clicks</div>
                                <div className="">{campaign.clicks}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">CTR</div>
                                <div className="text-sm">{campaign.ctr}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">CPC</div>
                                <div className="">{campaign.cpc}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="font-semibold">Impresiones</div>
                                <div className="">{campaign.impressions}</div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 w-full" />

                        <div className="">
                            <div className="space-y-2">
                                <div className="text-xs md:text-sm font-semibold">
                                    Relación clicks tasa de conversión
                                </div>
                                <Chart />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <ButtonDialog
                            text="Cerrar"
                            onClick={() => ClickClose()}
                            icon={IconXboxX}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
