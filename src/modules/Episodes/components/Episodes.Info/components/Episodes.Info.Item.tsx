import type { EpisodesInfoItemProps } from "./Episodes.Info.Item.types"

import styles from './Episodes.Info.Item.module.scss'

export const EpisodesInfoItem = ({ label, icon, content }: EpisodesInfoItemProps) => {
    return (
        <div className={styles.episodesInfoWrapper}>
            <section className={styles.episodesInfoHeader}>
                {icon && <span>{icon}</span>}
                <span className={styles.episodesInfoItemLabel}>{label}</span>
            </section>
            {content}
        </div>
    )
}