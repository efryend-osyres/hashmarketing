import {
    ContainerDashboard,
    ContainerInfoDashboard,
} from "@/components/shared/container";
import { NavbarDashboard } from "@/components/shared/navbar";
import { SideNavBar } from "@/components/shared/sidenavbar/SideNavBar";
import { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
}

export default function Home(props: PageProps) {
    const { children } = props;

    return (
        <div className="h-screen relative bg-gray-50">
            <NavbarDashboard />

            <ContainerDashboard className="flex h-full pt-16">
                <SideNavBar />
                <ContainerInfoDashboard>{children}</ContainerInfoDashboard>
            </ContainerDashboard>
        </div>
    );
}
