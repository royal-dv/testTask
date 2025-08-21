import type { CardInfoProps } from "./Card.Info.types"

import styles from './Card.Info.module.scss'

export const CardInfo = ({ label, value }: CardInfoProps) => {
    return (
        <div className={styles.cardInfoWrapper}>
            <span className={`${styles.cardInfoCommon} ${styles.cardInfoLabel}`}>{label}</span>
            <span className={`${styles.cardInfoCommon} ${styles.cardInfoLabel}`}>{value}</span>
        </div>
    )
}