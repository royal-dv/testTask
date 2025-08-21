import { useState, type KeyboardEvent, useCallback } from 'react';
import type { TabsProps } from './Tabs.types';
import { Button } from '../Button/Button';

import styles from './Tabs.module.scss'

export const Tabs = ({ tabs, defaultActiveTab, ariaLabel = 'Navigation' }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

    const handleKeyDown = useCallback((event: KeyboardEvent<HTMLButtonElement>, tabId: string) => {
        const currentIndex = tabs.findIndex(tab => tab.id === tabId);
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                {
                    event.preventDefault();
                    const nextIndex = (currentIndex + 1) % tabs.length;
                    setActiveTab(tabs[nextIndex].id);
                    break;
                }

            case 'ArrowLeft':
            case 'ArrowUp':
                {
                    event.preventDefault();
                    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
                    setActiveTab(tabs[prevIndex].id);
                    break;
                }

            case 'Home':
                event.preventDefault();
                setActiveTab(tabs[0].id);
                break;

            case 'End':
                event.preventDefault();
                setActiveTab(tabs[tabs.length - 1].id);
                break;

            case 'Enter':
            case ' ':
                event.preventDefault();
                setActiveTab(tabId);
                break;
        }
    }, [tabs]);

    if (!tabs.length) return <div className={styles.tabsNoData}>No tab data</div>;

    const activeTabContent =
        tabs.find(tab => tab.id === activeTab)?.content || <div className={styles.tabsNoData}>No content data</div>;

    return (
        <div className={styles.tabsContainer}>
            <section
                className={`${styles.tabsWrapper} ${styles.tabsCommon}`}
                role="tablist"
                aria-label={ariaLabel}
                aria-orientation="horizontal"
            >
                {tabs.map((tab) => (
                    <Button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        isActive={activeTab === tab.id}
                        label={tab.label}
                        onKeyDown={(event) => handleKeyDown(event, tab.id)}
                        tabIndex={activeTab === tab.id ? 0 : -1}
                        ariaPressed={activeTab === tab.id}
                        aria-selected={activeTab === tab.id}
                        aria-controls={`tabpanel-${tab.id}`}
                        role="tab"
                    />
                ))}
            </section>

            <div
                className={`${styles.tabsContent} ${styles.tabsCommon}`}
                id={`tabpanel-${activeTab}`}
                role="tabpanel"
                tabIndex={0}>
                {activeTabContent}
            </div>
        </div>
    );
};