import { EpisodesContent } from './components/Episodes.Content/Episodes.Content'
import { EpisodesInfo } from './components/Episodes.Info/Episodes.Info'

import styles from './Episodes.module.scss'

export const Episodes = () => {
    return (
        <div className={styles.episodesWrapper}>
            <EpisodesContent />
            <EpisodesInfo />
        </div>
    )
}