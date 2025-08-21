import type { ReactNode } from "react";

export interface TabsProps {
    tabs: Tab[];
    defaultActiveTab?: string;
    className?: string;
    ariaLabel?: string;
}

export interface Tab {
    id: string;
    label: string;
    content: ReactNode;
}