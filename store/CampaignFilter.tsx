import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    clients: number[];
    setClients: (client: number[]) => void;
    platforms: number[];
    setPlatforms: (platform: number[]) => void;
    states: number[];
    setStates: (state: number[]) => void;
};

export const campaignFilter = create<Store>()(
    persist(
        (set) => ({
            clients: [],
            setClients: (value) => set({ clients: value }),
            platforms: [],
            setPlatforms: (value) => set({ platforms: value }),
            states: [],
            setStates: (value) => set({ states: value }),
        }),
        {
            name: "CampaignFilter-storage",
        },
    ),
);
