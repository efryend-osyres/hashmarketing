"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import Image from "next/image";
import { platforms } from "./platforms.data";

interface FilterPlatformsProps {
    selectedPlatforms: number[];
    setSelectedPlatforms: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function FilterPlatform(props: FilterPlatformsProps) {
    const { selectedPlatforms, setSelectedPlatforms } = props;

    const handleCheckboxChange = (value: number) => {
        if (selectedPlatforms.includes(value)) {
            setSelectedPlatforms(
                selectedPlatforms.filter((item) => item !== value),
            );
        } else {
            setSelectedPlatforms([...selectedPlatforms, value]);
        }
    };

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3">
            {platforms.map((platform) => {
                return (
                    <FieldLabel key={platform.id}>
                        <Field className="w-full">
                            <div className="flex items-center gap-1 rounded-sm">
                                <Checkbox
                                    id={`platform_${platform.id}`}
                                    name={`platform_${platform.id}`}
                                    value={platform.id}
                                    checked={selectedPlatforms.includes(
                                        platform.id,
                                    )}
                                    onCheckedChange={() =>
                                        handleCheckboxChange(platform.id)
                                    }
                                />
                                <div className="w-full h-12 relative">
                                    <Image
                                        className="w-full h-full"
                                        src={platform.icon}
                                        alt={`platform_${platform.id}`}
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
