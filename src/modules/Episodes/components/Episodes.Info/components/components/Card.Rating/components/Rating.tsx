import type { CardRatingProps } from "../CardRating.types"
import { RatingGreyIcon } from "./RatingGreyIcon"
import { RatingColorIcon } from "./RatingColorIcon"
import { RatingMixedIcon } from "./RatingMixedIcon"

import styles from './Rating.module.scss'

export const Rating = ({ rating }: Pick<CardRatingProps, 'rating'>) => {
    const setRating = () => {
        const totalStars = 5;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <div className={styles.rating}>
                {Array.from({ length: totalStars }, (_, index) => {
                    if (index < fullStars) return <RatingColorIcon key={index} />;
                    else if (index === fullStars && hasHalfStar) return <RatingMixedIcon key={index} />;
                    else return <RatingGreyIcon key={index} />;
                })}
            </div>
        );
    };
    return (
        <div className={styles.ratingWrapper}>
            {setRating()}
            <span className={styles.ratingLabel}>{rating}</span>
        </div>
    )
}