import type { MouseEventHandler, KeyboardEvent } from "react";

export interface ButtonProps extends ButtonAriaProps {
    label: string;
    isActive?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;

}

interface ButtonAriaProps {
    tabIndex?: number;
    ariaPressed?: boolean;
    ariaLabel?: string;
    role?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
}