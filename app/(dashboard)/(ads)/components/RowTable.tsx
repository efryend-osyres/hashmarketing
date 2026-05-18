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
                <DialogContent className="sm:max-w-lg p-5 md:p-10">
                    <DialogHeader>
                        <DialogTitle className="font-bold">
                            Detalle de la campaña
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-0 col-span-2">
                                <div className="text-base font-semibold">
                                    Nombre campaña
                                </div>
                                <div className="text-base">{campaign.name}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-base font-semibold">
                                    Cliente
                                </div>
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
                                <div className="text-base font-semibold">
                                    Plataforma
                                </div>
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

                        <div className="grid grid-cols-3 gap-5">
                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Estado
                                </div>
                                <div className="text-sm">{campaign.state}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Costo
                                </div>
                                <div className="text-sm">$ {campaign.cost}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    ROAS
                                </div>
                                <div className="text-sm">{campaign.roas}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Conversiones
                                </div>
                                <div className="text-sm">
                                    {campaign.conversions}
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Tasa Conversion
                                </div>
                                <div className="text-sm">
                                    {campaign.conversion_rate}
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Valor Conversion
                                </div>
                                <div className="text-sm">
                                    {campaign.conversion_value}
                                </div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Clicks
                                </div>
                                <div className="text-sm">{campaign.clicks}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">CTR</div>
                                <div className="text-sm">{campaign.ctr}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">CPC</div>
                                <div className="text-sm">{campaign.cpc}</div>
                            </div>

                            <div className="space-y-0">
                                <div className="text-sm font-semibold">
                                    Impresiones
                                </div>
                                <div className="text-sm">
                                    {campaign.impressions}
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 w-full" />

                        <div className="">
                            <div className="space-y-2">
                                <div className="text-sm font-semibold">
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
