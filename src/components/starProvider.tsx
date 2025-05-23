import { createContext, useContext, useState } from "react";

const StarContext = createContext<{ showStar: boolean; setShowStar: (v: boolean) => void } | null>(null);

export function StarProvider({ children }: { children: React.ReactNode }) {
    const [showStar, setShowStar] = useState(false);
    return <StarContext.Provider value={{ showStar, setShowStar }}>{children}</StarContext.Provider>;
}

export function useStar() {
    const context = useContext(StarContext);
    if (!context) throw new Error("useStar must be used within a StarProvider");
    return context;
}
