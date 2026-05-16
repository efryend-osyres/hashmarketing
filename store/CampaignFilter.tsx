import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    clients: number[];
    setClients: (client: number[]) => void;
};

export const campaignFilter = create<Store>()(
    persist(
        (set) => ({
            clients: [],
            setClients: (value) => set({ clients: value }),
        }),
        {
            name: "CampaignFilter-storage",
        },
    ),
);
