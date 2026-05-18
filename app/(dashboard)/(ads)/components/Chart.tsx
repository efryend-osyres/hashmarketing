"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
    { month: "Enero", clicks: 1230, conversion_rate: 410.2 },
    { month: "Febrero", clicks: 875, conversion_rate: 217.89 },
    { month: "Marzo", clicks: 2467, conversion_rate: 1515.54 },
    { month: "Abril", clicks: 384, conversion_rate: 120.12 },
    { month: "Mayo", clicks: 2145, conversion_rate: 155.94 },
];

const chartConfig = {
    clicks: {
        label: "Clicks",
        color: "#098fff",
    },
    conversion_rate: {
        label: "Tasa Conversion",
        color: "#2563eb",
    },
} satisfies ChartConfig;

export function Chart() {
    return (
        <ChartContainer
            config={chartConfig}
            className="min-h-10 md:min-h-50 w-full">
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="clicks" fill="var(--color-clicks)" radius={4} />
                <Bar
                    dataKey="conversion_rate"
                    fill="var(--color-conversion_rate)"
                    radius={4}
                />
            </BarChart>
        </ChartContainer>
    );
}
