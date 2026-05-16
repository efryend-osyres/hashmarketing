import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export function Container(props: ContainerProps) {
    const { children, className } = props;

    return (
        <div
            className={cn(
                "px-1 md:px-2 lg:px-4 xl:px-20 2xl:px-32",
                className,
            )}>
            {children}
        </div>
    );
}

interface ContainerDashboardProps {
    children: ReactNode;
    className?: string;
}

export function ContainerDashboard(props: ContainerDashboardProps) {
    const { children, className } = props;

    return (
        <div
            className={cn(
                "pr-3 md:pr-5 lg:pr-7 xl:pr-20 2xl:pr-32",
                className,
            )}>
            {children}
        </div>
    );
}

interface ContainerInfoDashboardProps {
    children: ReactNode;
    className?: string;
}

export function ContainerInfoDashboard(props: ContainerInfoDashboardProps) {
    const { children, className } = props;

    return (
        <div
            className={cn(
                "pl-3 md:pl-5 lg:pl-7 xl:pl-20 2xl:pl-32 w-full",
                className,
            )}>
            {children}
        </div>
    );
}
