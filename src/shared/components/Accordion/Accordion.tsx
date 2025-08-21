import { useState, useId, type KeyboardEvent } from 'react';
import type { AccordionProps } from './Accordion.types';
import { ArrowDownIcon } from '../Icons/ArrowDownIcon';

import styles from './Accordion.module.scss'

export const Accordion = ({
    items,
    allowMultiple = false,
    defaultOpenItems = [],
    ariaLabel = 'Accordion'
}: AccordionProps) => {
    const [openItems, setOpenItems] = useState(defaultOpenItems);
    const accordionId = useId();
    const toggleItem = (itemId: string) => {
        if (allowMultiple) {
            setOpenItems(prev =>
                prev.includes(itemId)
                    ? prev.filter(id => id !== itemId)
                    : [...prev, itemId]
            );
        } else {
            setOpenItems(prev =>
                prev.includes(itemId) ? [] : [itemId]
            );
        }
    };

    const isItemOpen = (itemId: string) => openItems.includes(itemId);

    const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, itemId: string) => {
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                toggleItem(itemId);
                break;
            case 'Home':
                {
                    event.preventDefault();
                    const firstButton = document.getElementById(`${accordionId}-header-${items[0].id}`);
                    firstButton?.focus();
                    break;
                }
            case 'End':
                {
                    event.preventDefault();
                    const lastButton = document.getElementById(`${accordionId}-header-${items[items.length - 1].id}`);
                    lastButton?.focus();
                    break;
                }
            case 'ArrowDown':
                event.preventDefault();
                moveFocus(itemId, 1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                moveFocus(itemId, -1);
                break;
        }
    };

    const moveFocus = (currentItemId: string, direction: number) => {
        const currentIndex = items.findIndex(item => item.id === currentItemId);
        const newIndex = (currentIndex + direction + items.length) % items.length;
        const newButton = document.getElementById(`${accordionId}-header-${items[newIndex].id}`);
        newButton?.focus();
    };

    return (
        <div
            className={styles.accordionWrapper}
            role="region"
            aria-label={ariaLabel}
        >
            {items.map((item) => {
                const isOpen = isItemOpen(item.id);
                const headerId = `${accordionId}-header-${item.id}`;
                const contentId = `${accordionId}-content-${item.id}`;

                return (
                    <div key={item.id}>
                        <button
                            id={headerId}
                            className={`${styles.accordionButton} ${isOpen ? styles.accordionButtonIsOpen : ''}`}
                            onClick={() => toggleItem(item.id)}
                            onKeyDown={(e) => handleKeyDown(e, item.id)}
                            aria-expanded={isOpen}
                            aria-controls={contentId}
                            type="button"
                        >
                            <section className={styles.accordionTitleWrapper}>
                                <span className={styles.accordionTitleWrapperTitle}>{item.title}</span>
                                {item.subTitle && <span className={styles.accordionTitleWrapperSubTitle}>{item.subTitle}</span>}
                            </section>

                            <div
                                className={`${styles.accordionIconWrapper} ${isOpen ? styles.accordionIconWrapperIsOpen : ''}`}
                                aria-hidden="true"
                            >
                                <ArrowDownIcon />
                            </div>
                        </button>

                        <div
                            id={contentId}
                            className={`${styles.accordionContent} ${isOpen ? styles.accordionContentIsOpen : ''}`}
                            role="region"
                            aria-labelledby={headerId}
                            aria-hidden={!isOpen}
                        >
                            {item.content}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};