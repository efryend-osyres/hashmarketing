// components/ui/LoadingDots.tsx
import { cn } from "@/lib/utils";
import styles from "./LoadingDots.module.css";

interface LoadingDotsProps {
    size?: number;
}

export default function LoadingDots({ size = 1 }: LoadingDotsProps) {
    return (
        <div className={styles.container}>
            {[0, 1, 2, 3, 4].map((dot) => (
                <span
                    key={dot}
                    className={cn("bg-brand-primary", styles.dot)}
                    style={{
                        width: `${size}rem`,
                        height: `${size}rem`,
                        animationDelay: `${dot * 0.15}s`,
                    }}
                />
            ))}
        </div>
    );
}
