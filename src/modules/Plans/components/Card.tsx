import type { CardPlansProps } from "./Card.types"
import { CardInfo } from "./components/Card.Info"

import styles from './Card.module.scss'

export const Card = ({ data }: CardPlansProps) => {
    return (
        <section className={styles.cardWrapper}>
            <div className={styles.cardRows}>
                <CardInfo label="Price" value={data.price} />
                <CardInfo label="Free Trail" value={data.freeTrail} />
            </div>
            <div>
                <CardInfo label="Content" value={data.content} />
            </div>
            <div>
                <CardInfo label="Devices" value={data.devices} />
            </div>
            <div className={styles.cardRows}>
                <CardInfo label="Cancel Anytime" value={data.cancelAnytime} />
                <CardInfo label="HDR" value={data.hDR} />
            </div>
            <div className={styles.cardRows}>
                <CardInfo label="Dolby Atmos" value={data.dolbyAtmos} />
                <CardInfo label="Ad - Free" value={data.adFree} />
            </div>
            <div className={styles.cardRows}>
                <CardInfo label="Offline Viewing" value={data.offlineViewing} />
                <CardInfo label="Family Sharing" value={data.familySharing} />
            </div>
        </section>
    )
}