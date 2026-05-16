"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { companies } from "./company.data";
import Image from "next/image";

interface FilterCompaniesProps {
    selectedClients: number[];
    setSelectedClients: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function FilterCompanies(props: FilterCompaniesProps) {
    const { selectedClients, setSelectedClients } = props;

    const handleCheckboxChange = (value: number) => {
        if (selectedClients.includes(value)) {
            setSelectedClients(
                selectedClients.filter((item) => item !== value),
            );
        } else {
            setSelectedClients([...selectedClients, value]);
        }
    };

    return (
        <div className="w-full grid grid-cols-3 gap-3">
            {companies.map((company) => {
                return (
                    <FieldLabel key={company.id}>
                        <Field className="w-full">
                            <div className="flex items-center gap-1 rounded-sm">
                                <Checkbox
                                    id={`company_${company.id}`}
                                    name={`company_${company.id}`}
                                    value={company.id}
                                    checked={selectedClients.includes(
                                        company.id,
                                    )}
                                    onCheckedChange={() =>
                                        handleCheckboxChange(company.id)
                                    }
                                />
                                <div className="w-full h-12 relative">
                                    <Image
                                        className="w-full h-full"
                                        src={company.icon}
                                        alt={`company_${company.id}`}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                        </Field>
                    </FieldLabel>
                );
            })}
        </div>
    );
}
