"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { states } from "../data/state.data";

interface FilterPlatformsProps {
    selectedState: number[];
    setSelectedState: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function FilterState(props: FilterPlatformsProps) {
    const { selectedState, setSelectedState } = props;

    const handleCheckboxChange = (value: number) => {
        if (selectedState.includes(value)) {
            setSelectedState(selectedState.filter((item) => item !== value));
        } else {
            setSelectedState([...selectedState, value]);
        }
    };

    return (
        <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-3">
            {states.map((state) => {
                return (
                    <Field key={state.id} className="w-full">
                        <div className="flex items-center gap-1 rounded-sm">
                            <Checkbox
                                id={`state_${state.id}`}
                                name={`state_${state.id}`}
                                value={state.id}
                                checked={selectedState.includes(state.id)}
                                onCheckedChange={() =>
                                    handleCheckboxChange(state.id)
                                }
                            />
                            <FieldLabel
                                className="w-full p-2 text-xs text-center font-semibold rounded-md capitalize"
                                style={{ backgroundColor: state.color }}
                                htmlFor={`state_${state.id}`}>
                                {state.name}
                            </FieldLabel>
                        </div>
                    </Field>
                );
            })}
        </div>
    );
}
