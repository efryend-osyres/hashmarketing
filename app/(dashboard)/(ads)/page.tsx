const datos = [
    {
        id: 1,
        client: "Telcel",
        platform: "Google",
        name: "Búsqueda Branding",
        cost: "3187.50",
        conversion_rate: "4.99",
    },
    {
        id: 2,
        client: "Telcel",
        platform: "Meta",
        name: "Prospección Instagram",
        cost: "5294.50",
        conversion_rate: "3.65",
    },
    {
        id: 3,
        client: "Telcel",
        platform: "Google",
        name: "Búsqueda Branding",
        cost: "3187.50",
        conversion_rate: "4.99",
    },
    {
        id: 4,
        client: "Telcel",
        platform: "Google",
        name: "Búsqueda Branding",
        cost: "3187.50",
        conversion_rate: "4.99",
    },
];

export default function Ads() {
    return (
        <div className="w-full h-full">
            <div className="py-5">
                <h2 className="font-bold text-2xl">Campañas de ads</h2>
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
                        {datos.map((usuario) => (
                            <tr
                                key={usuario.id}
                                className="border-b hover:bg-gray-50 transition">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {usuario.client}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {usuario.platform}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {usuario.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {usuario.cost}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {usuario.conversion_rate}
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
