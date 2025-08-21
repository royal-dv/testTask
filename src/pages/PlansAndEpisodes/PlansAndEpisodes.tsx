import { Episodes } from '../../modules/Episodes/Episodes'
import { Plans } from '../../modules/Plans/Plans'

import styles from './PlansAndEpisodes.module.scss'

const PlansAndEpisodes = () => {
    return (
        <div className={styles.plansAndEpisodesWrapper}>
            <Episodes />
            <Plans />
        </div>
    )
}

export default PlansAndEpisodes