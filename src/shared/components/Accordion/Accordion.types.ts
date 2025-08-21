import type { ReactNode } from "react";

export interface AccordionProps {
    items: AccordionItem[];
    allowMultiple?: boolean;
    defaultOpenItems?: string[];
    ariaLabel?: string;
}

export interface AccordionItem {
    id: string;
    title: string;
    subTitle?: string
    content: ReactNode;
}