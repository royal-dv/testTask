import { CalendarIcon } from '@/shared/components/Icons/CalendarIcon'
import { GernesIcon } from '@/shared/components/Icons/GernesIcon'
import { RatingIcon } from '@/shared/components/Icons/RatingIcon'
import { LanguageIcon } from '@/shared/components/Icons/LanguageIcon'
import { Tag } from '@/shared/components/Tag/Tag'

import { EpisodesInfoItem } from './components/Episodes.Info.Item'
import { CardEpisodesInfo } from './components/components/Card.Episode.Info/Card.Episodes.Info'

import { RATINGS, TAG_INFO } from './constants'
import director from '@assets/director.png'
import music from '@assets/music.png'

import { CardRating } from './components/components/Card.Rating/Card.Rating'

import styles from './Episodes.Info.module.scss'

export const EpisodesInfo = () => {
    return (
        <div className={styles.episodesinfoWrapper}>
            <EpisodesInfoItem label='Released Year' icon={<CalendarIcon />}
                content={<span className={styles.episodesinfoContentCalendar}>2022</span>}
            />
            <EpisodesInfoItem label='Available Languages' icon={<LanguageIcon />}
                content={
                    <div className={styles.episodesinfoContentArray}>
                        {TAG_INFO.languages.map((item, index) =>
                            <Tag variant='secondary' key={index} label={item}
                            />)
                        }
                    </div>
                }
            />
            <EpisodesInfoItem label='Ratings' icon={<RatingIcon />}
                content={
                    <div className={`${styles.episodesinfoContentArrayRating} ${styles.episodesinfoContentArray}`}>
                        {RATINGS.map((item, index) => <CardRating key={index} label={item.label} rating={item.rating} />)
                        }
                    </div>
                }
            />
            <EpisodesInfoItem label='Gernes' icon={<GernesIcon />}
                content={
                    <div
                        className={styles.episodesinfoContentArray}>
                        {TAG_INFO.gernes.map((item, index) =>
                            <Tag variant='secondary'
                                key={index} label={item}
                            />)
                        }
                    </div>}
            />
            <EpisodesInfoItem label='Director'
                content={<CardEpisodesInfo image={director} label='The Duffer Brothers' subLabel='From USA' />}
            />
            <EpisodesInfoItem label='Music'
                content={<CardEpisodesInfo image={music} label='Kyle Dixon' subLabel='From USA' />}
            />
        </div>
    )
}