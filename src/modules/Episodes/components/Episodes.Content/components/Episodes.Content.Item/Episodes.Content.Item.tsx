import type { EpisodesContentItemProps } from "./Episodes.Content.Item.types"

import { TimeIcon } from "@/shared/components/Icons/TimeIcon"
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

import styles from './Episodes.Content.Item.module.scss'
import { PlayIcon } from "@/shared/components/Icons/PlayIcon";

export const EpisodesContentItem = ({ data }: EpisodesContentItemProps) => {
    const isMobile = useMediaQuery('(max-width: 1439px)');

    return (
        <div className={styles.contentItemWrapper}>
            <div className={styles.contentItemPreview}>
                <div className={styles.contentItemEpisode}>{data.episode <= 9 ? '0' + data.episode : data.episode}</div>
                <div className={styles.contentItemPreviewPlayContainer}>
                    <img src={data.preview} alt='PREVIEW' width={172} height={118} />
                    <div className={styles.contentItemPlay}><PlayIcon /></div>
                </div>
            </div>
            <section className={styles.contentItemInfoWrapper}>
                <div className={styles.contentItemHeader}>
                    <span className={styles.contentItemTitle}>{data.title}</span>
                    <div className={styles.contentItemDurationWrapper}>
                        <TimeIcon />
                        <span className={styles.contentItemDuration}>{data.duration} min</span>
                    </div>
                </div>
                {!isMobile && <span className={styles.contentItemDescription}>{data.description}</span>}
            </section>
        </div>
    )
}