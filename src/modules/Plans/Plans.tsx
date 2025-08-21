import { Table } from '@/shared/components/Table/Table'
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';
import { Tabs } from '@/shared/components/Tabs/Tabs';

import { PLANS_COLUMNS_DATA, PLANS_ROWS_DATA, TABS } from './constants'

import styles from './Plans.module.scss'

export const Plans = () => {
    const isMobile = useMediaQuery('(max-width: 1439px)');

    return (
        <div className={styles.plansWrapper}>
            <div className={styles.plansWrapperText}>
                <h2 className={styles.plansTitle}>Compare our plans and find the right one for you</h2>
                <h3 className={styles.plansDescription}>StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.</h3>
            </div>
            {!isMobile && <Table rows={PLANS_ROWS_DATA} columns={PLANS_COLUMNS_DATA} />}
            {isMobile && <Tabs tabs={TABS} defaultActiveTab={TABS[1].id} />}
        </div>
    )
}