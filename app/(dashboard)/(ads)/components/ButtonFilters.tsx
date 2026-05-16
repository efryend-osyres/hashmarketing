"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonDialog, ButtonIcon } from "@/components/shared/button";
import FilterCompanies from "./FilterCompanies";
import { campaignFilter } from "@/store/CampaignFilter";
import { useEffect, useRef, useState } from "react";

export default function ButtonFilters() {
    const isInitialized = useRef(false);

    const clients = campaignFilter((state) => state.clients);
    const { setClients } = campaignFilter();

    const [isOpen, setIsOpen] = useState(false);
    const [selectedClients, setSelectedClients] = useState<number[]>([]);

    useEffect(() => {
        if (!isInitialized.current && clients?.length) {
            setSelectedClients(clients);
            isInitialized.current = true;
        }
    }, [clients]);

    const ClickFilter = () => {
        console.log(selectedClients);

        setClients(selectedClients);
        setIsOpen(false);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <div>
                        <ButtonIcon />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle className="">
                            Selecciona la información que quieres visualizar.
                        </DialogTitle>
                    </DialogHeader>

                    <div className="mt-4">
                        <div className="">
                            <div className="text-sm font-semibold mb-5">
                                Compañia
                            </div>

                            <div>
                                <FilterCompanies
                                    selectedClients={selectedClients}
                                    setSelectedClients={setSelectedClients}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="">
                            <div className="text-sm font-semibold mb-5">
                                Provedor
                            </div>

                            <div>{/* <FilterCompanies /> */}</div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="">
                            <div className="text-sm font-semibold mb-5">
                                Estado
                            </div>

                            <div>{/* <FilterCompanies /> */}</div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <ButtonDialog onClick={() => ClickFilter()} />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
