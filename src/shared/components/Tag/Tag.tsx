import type { TagProps } from "./Tag.types"

import styles from './Tag.module.scss'

export const Tag = ({ label, variant = 'primary' }: TagProps) => {
    return (
        <div className={`${styles.tag} ${styles[variant === 'primary' ? 'tagPrimary' : 'tagSecondary']}`}>
            <span className={styles.tagLabel}>{label}</span>
        </div>
    )
}