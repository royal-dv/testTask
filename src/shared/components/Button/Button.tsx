import type { KeyboardEvent, MouseEvent } from "react";

import type { ButtonProps } from "./Button.types"

import styles from './Button.module.scss'

export const Button = ({
    label,
    onClick,
    isActive,
    tabIndex = 0,
    ariaPressed,
    ariaLabel,
    role = "button",
    onKeyDown
}: ButtonProps) => {
    const handleKeyPress = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            onClick?.(event as unknown as MouseEvent<HTMLButtonElement>);
        }
        onKeyDown?.(event);
    };
    return (
        <button
            className={`${styles.buttonWrapper} ${styles[isActive ? 'buttonActive' : 'buttonInActive']}`}
            onClick={onClick}
            tabIndex={tabIndex}
            aria-pressed={ariaPressed ?? isActive}
            aria-label={ariaLabel ?? label}
            role={role}
            onKeyDown={handleKeyPress}
        >
            {label}
        </button>
    )
}