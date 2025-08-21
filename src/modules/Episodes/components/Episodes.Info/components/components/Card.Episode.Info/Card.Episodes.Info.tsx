import type { CardEpisodeInfoProps } from "./Card.Episode.Info.types"

import styles from './Card.Episodes.Info.module.scss'

export const CardEpisodesInfo = ({ image, label, subLabel }: CardEpisodeInfoProps) => {
    return (
        <div className={styles.contentCard}>
            <img src={image} alt="Photo" width={47} height={50} />
            <div className={styles.contentCardInfo}>
                <span className={styles.contentCardInfoLabel}>{label}</span>
                <span className={styles.contentCardInfoSubLabel}>{subLabel}</span>
            </div>
        </div>
    )
}