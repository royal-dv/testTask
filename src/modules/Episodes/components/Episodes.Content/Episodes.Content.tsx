import { Accordion } from '@/shared/components/Accordion/Accordion';
import { EPISODES_DATA } from './constants';

import styles from './Episodes.Content.module.scss'

export const EpisodesContent = () => {
    return (
        <div className={styles.episodesContentWrapper}>
            <p className={styles.episodesContentWrapperLabel}>Seasons and Episodes</p>
            <Accordion
                items={EPISODES_DATA}
                allowMultiple
                defaultOpenItems={['season-2']}
                ariaLabel="Episodes"
            />
        </div>
    )
}