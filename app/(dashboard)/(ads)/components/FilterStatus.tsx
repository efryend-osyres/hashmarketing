/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { campaignFilter } from "@/store/CampaignFilter";
import { useEffect, useState } from "react";
import { companies } from "./company.data";
import { platforms } from "./platforms.data";
import { states } from "./state.data";

export default function FilterStatus() {
    const clientsFilter = campaignFilter((state) => state.clients);
    const platformsFilter = campaignFilter((state) => state.platforms);
    const statesFilter = campaignFilter((state) => state.states);

    const [stringFilter, setStringFilter] = useState<string>("Ninguno");

    useEffect(() => {
        const string: string[] = [];

        const clientsString: string[] = [];
        clientsFilter.forEach((obj) => {
            const company = companies.find((data) => data.id == obj);
            if (company) clientsString.push(company.name);
        });

        const platformString: string[] = [];
        platformsFilter.forEach((obj) => {
            const platform = platforms.find((data) => data.id == obj);
            if (platform) platformString.push(platform.name);
        });

        const stateString: string[] = [];
        statesFilter.forEach((obj) => {
            const state = states.find((data) => data.id == obj);
            if (state) stateString.push(state.name);
        });

        if (clientsString.length > 0)
            string.push(`Clientes: (${clientsString.join(",")})`);

        if (platformString.length > 0)
            string.push(`Plataformas: (${platformString.join(",")})`);

        if (stateString.length > 0)
            string.push(`Estados: (${stateString.join(", ")})`);

        setStringFilter(string.length == 0 ? "Ninguno" : string.join(", "));
    }, [clientsFilter, platformsFilter, statesFilter]);

    return (
        <div className="w-full text-sm text-gray-400">
            Filtros: {stringFilter}
        </div>
    );
}
