import type { CardRatingProps } from "./CardRating.types"
import { Rating } from "./components/Rating"

import styles from './Card.Rating.module.scss'

export const CardRating = ({ label, rating }: CardRatingProps) => {
    return (
        <div className={styles.cardRatingWrapper}>
            <span className={styles.cardRatingLabel}>{label}</span>
            <Rating rating={rating} />
        </div>
    )
}