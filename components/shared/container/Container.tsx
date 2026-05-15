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
                "pr-1 md:pr-2 lg:pr-4 xl:pr-20 2xl:pr-32",
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
                "pl-1 md:pl-2 lg:pl-4 xl:pl-20 2xl:pl-32 w-full",
                className,
            )}>
            {children}
        </div>
    );
}
