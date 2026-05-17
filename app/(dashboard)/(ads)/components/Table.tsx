import { Campaign } from "@/app/api/campaigns/campaigns.types";
import RowTable from "./RowTable";
import LoadingDots from "@/components/shared/loading/LoadingDots";
import { IconAlertHexagon, IconCloudSearch } from "@tabler/icons-react";

interface TableProps {
    campaigns: Campaign[];
    isPending?: boolean;
    error?: null | string;
}

export default function Table(props: TableProps) {
    const { campaigns, isPending, error } = props;

    return (
        <div className="overflow-x-auto shadow-md rounded-lg grow overflow-y-auto min-h-0 relative">
            {isPending && (
                <div className="sticky mt-[-50%] top-0 left-0 w-full h-full flex items-center justify-center bg-gray-50 z-10">
                    <LoadingDots />
                </div>
            )}

            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 border-b sticky top-0 z-10">
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
                            Estado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Costo
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            ROAS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {error == null ? (
                        <>
                            {campaigns.length > 0 ? (
                                <>
                                    {campaigns.map((campaign) => (
                                        <RowTable
                                            key={campaign.id}
                                            campaign={campaign}
                                        />
                                    ))}
                                </>
                            ) : (
                                <tr className="border-b hover:bg-gray-50 transition cursor-pointer">
                                    <td
                                        colSpan={6}
                                        className="px-6 py-20 whitespace-nowrap text-gray-400 text-md font-semibold">
                                        <div className="flex items-center gap-3 mx-auto w-fit">
                                            <IconCloudSearch className="size-5" />
                                            <div>Sin resultados</div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </>
                    ) : (
                        <tr className="border-b hover:bg-gray-50 transition cursor-pointer">
                            <td
                                colSpan={6}
                                className="px-6 py-20 whitespace-nowrap text-red-400 text-md font-semibold">
                                <div className="flex items-center gap-3 mx-auto w-fit">
                                    <IconAlertHexagon className="size-5" />
                                    <div>{error}</div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
