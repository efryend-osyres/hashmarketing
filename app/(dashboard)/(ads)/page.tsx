"use client";

import ButtonFilters from "./components/ButtonFilters";
import { useEffect, useState } from "react";
import { Campaign } from "@/app/api/campaigns/campaigns.types";
import { campaignFilter } from "@/store/CampaignFilter";

export default function Ads() {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const clients = campaignFilter((state) => state.clients);

    // Función para obtener datos con fetch
    const fetchCampaigns = async () => {
        setLoading(true);
        setError(null);

        // Construir query string
        const params = new URLSearchParams();
        if (clients) params.append("client", clients.join(","));
        // if (platforms) params.append('platform', platforms);
        // if (states) params.append('state', states);
        // if (costMax) params.append('cost_max', costMax);

        try {
            const res = await fetch(`/api/campaigns?${params.toString()}`);
            if (!res.ok)
                throw new Error(`Error ${res.status}: ${res.statusText}`);
            const data = await res.json();
            setCampaigns(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Error desconocido");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        (async () => {
            fetchCampaigns();
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clients]);

    return (
        <div className="w-full h-full">
            <div className="py-5">
                <h2 className="font-bold text-2xl">Campañas de ads</h2>
            </div>

            <div className="w-full pt-5 pb-3 flex justify-end">
                <ButtonFilters />
            </div>

            <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cliente
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Plataforma
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre de la campaña
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Costo
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tasa de conversión
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {campaigns.map((campaign) => (
                            <tr
                                key={campaign.id}
                                className="border-b hover:bg-gray-50 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {campaign.client}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {campaign.platform}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {campaign.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {campaign.cost}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {campaign.conversion_rate}
                                </td>
                                {/*                                 
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-full ${
                                            usuario.estado === "Activo"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}>
                                        {usuario.estado}
                                    </span>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
