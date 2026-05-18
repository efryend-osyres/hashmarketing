/* eslint-disable react-hooks/exhaustive-deps */
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
import { useEffect, useLayoutEffect, useState } from "react";
import FilterPlatform from "./FilterPlatform";
import FilterState from "./FilterState";

export default function ButtonFilters() {
    const clients = campaignFilter((state) => state.clients);
    const platforms = campaignFilter((state) => state.platforms);
    const states = campaignFilter((state) => state.states);
    const { setClients, setPlatforms, setStates } = campaignFilter();

    const [isOpen, setIsOpen] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const [selectedClients, setSelectedClients] = useState<number[]>([]);
    const [selectedPlatforms, setSelectedPlatforms] = useState<number[]>([]);
    const [selectedStates, setSelectedStates] = useState<number[]>([]);

    useEffect(() => {
        (async () => {
            if (isReady) {
                if (clients?.length) setSelectedClients(clients);
                if (platforms?.length) setSelectedPlatforms(platforms);
                if (states?.length) setSelectedStates(states);
            }
        })();
    }, [isReady]);

    useLayoutEffect(() => {
        (async () => {
            setTimeout(() => {
                setIsReady(true);
            }, 2000);
        })();
    }, []);

    const ClickFilter = () => {
        setClients(selectedClients);
        setPlatforms(selectedPlatforms);
        setStates(selectedStates);
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
                <DialogContent className="sm:max-w-lg p-5 md:p-10 max-h-[95vh] overflow-y-automax-h-[95vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="">
                            Selecciona la información que quieres visualizar.
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6 py-8">
                        <div className="">
                            <div className="">
                                <div className="text-sm font-semibold mb-3">
                                    Clientes
                                </div>

                                <div>
                                    <FilterCompanies
                                        selectedClients={selectedClients}
                                        setSelectedClients={setSelectedClients}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <div className="text-sm font-semibold mb-3">
                                    Proveedor
                                </div>

                                <div>
                                    <FilterPlatform
                                        selectedPlatforms={selectedPlatforms}
                                        setSelectedPlatforms={
                                            setSelectedPlatforms
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="">
                                <div className="text-sm font-semibold mb-3">
                                    Estado
                                </div>

                                <div>
                                    <FilterState
                                        selectedState={selectedStates}
                                        setSelectedState={setSelectedStates}
                                    />
                                </div>
                            </div>
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
