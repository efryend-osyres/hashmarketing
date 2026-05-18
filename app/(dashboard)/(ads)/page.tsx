"use client";

import ButtonFilters from "./components/ButtonFilters";
import { useEffect, useState, useTransition } from "react";
import { Campaign } from "@/app/api/campaigns/campaigns.types";
import { campaignFilter } from "@/store/CampaignFilter";
import Table from "./components/Table";
import FilterStatus from "./components/FilterStatus";

export default function Ads() {
    const [isPending, startTransition] = useTransition();

    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [error, setError] = useState<string | null>(null);

    const clients = campaignFilter((state) => state.clients);
    const platforms = campaignFilter((state) => state.platforms);
    const states = campaignFilter((state) => state.states);

    // Función para obtener datos con fetch
    const fetchCampaigns = async () => {
        setError(null);

        const params = new URLSearchParams();
        if (clients) params.append("client", clients.join(","));
        if (platforms) params.append("platform", platforms.join(","));
        if (states) params.append("state", states.join(","));

        try {
            const res = await fetch(`/api/campaigns?${params.toString()}`);
            if (!res.ok)
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            const data = await res.json();
            setCampaigns(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
        }
    };

    useEffect(() => {
        (async () => {
            startTransition(async () => {
                await fetchCampaigns();
            });
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clients, platforms, states]);

    return (
        <div className="w-full h-full flex flex-col pb-10">
            <div className="py-5">
                <h2 className="font-bold text-2xl relative w-fit">
                    <span className="absolute h-[0.7rem] bottom-[-0.1rem] left-0 w-full bg-brand-primary" />
                    <span className="relative">Campañas de ads</span>
                </h2>
            </div>

            <div className="w-full pt-5 pb-3 flex">
                <FilterStatus />
                <ButtonFilters />
            </div>

            <Table campaigns={campaigns} isPending={isPending} error={error} />
        </div>
    );
}
