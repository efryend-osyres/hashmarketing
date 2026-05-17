export interface Campaign {
    id: number;
    client_id: number;
    client: string,
    platform_id: number;
    platform: string,
    name: string,
    date: string,
    state_id: number,
    state: "activa" | "pausada" | "cancelada" | "completada",
    impressions: number,
    clicks: number,
    ctr: number,
    cpc: number,
    cost: number,
    conversions: number,
    conversion_rate: number,
    conversion_value: number,
    roas: number,
}