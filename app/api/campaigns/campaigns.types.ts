export interface Campaign {
    id: number;
    client: string,
    platform: string,
    name: string,
    date: string,
    state: "active" | "paused" | "completed",
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