import type { AccordionItem } from "@/shared/components/Accordion/Accordion.types";
import { EpisodesContentItem } from "./components/Episodes.Content.Item/Episodes.Content.Item";
import type { EpisodesContentItemProps } from "./components/Episodes.Content.Item/Episodes.Content.Item.types";
import ep1 from '@assets/ep1.webp'
import ep2 from '@assets/ep2.webp'
import ep3 from '@assets/ep3.webp'
import ep4 from '@assets/ep4.webp'
import ep5 from '@assets/ep5.webp'

import styles from './Episodes.Content.module.scss'

const VIDEO_DATA: Record<'seasonOne' | 'seasonTwo' | 'seasonThree', EpisodesContentItemProps['data'][]> = {
    seasonOne: [
        {
            episode: 1,
            preview: ep1,
            title: 'Chapter One : The Vanishing of Will Byers',
            description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
            duration: 49
        },
        {
            episode: 2,
            preview: ep2,
            title: 'Chapter Two: The Weirdo on Maple Street',
            description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
            duration: 56
        },
        {
            episode: 3,
            preview: ep3,
            title: 'Chapter Three: Holly, Jolly',
            description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan"s been up to. Joyce is convinced Will is trying to talk to her.',
            duration: 52
        },
        {
            episode: 4,
            preview: ep4,
            title: 'Chapter Four: The Body',
            description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.',
            duration: 51
        },
        {
            episode: 5,
            preview: ep5,
            title: 'Chapter Five: The Flea and the Acrobat',
            description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
            duration: 53
        },
        {
            episode: 6,
            preview: ep1,
            title: 'Chapter Two: The Weirdo on Maple Street',
            description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
            duration: 56
        },
        {
            episode: 7,
            preview: ep2,
            title: 'Chapter Three: Holly, Jolly',
            description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan"s been up to. Joyce is convinced Will is trying to talk to her.',
            duration: 46
        },
        {
            episode: 8,
            preview: ep3,
            title: 'Chapter Four: The Body',
            description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.',
            duration: 51
        },
        {
            episode: 9,
            preview: ep4,
            title: 'Chapter Five: The Flea and the Acrobat',
            description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
            duration: 56
        }
    ],
    seasonTwo: [
        {
            episode: 1,
            preview: ep1,
            title: 'Chapter One : The Vanishing of Will Byers',
            description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
            duration: 49
        },
        {
            episode: 2,
            preview: ep2,
            title: 'Chapter Two: The Weirdo on Maple Street',
            description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
            duration: 56
        },
        {
            episode: 3,
            preview: ep3,
            title: 'Chapter Three: Holly, Jolly',
            description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan"s been up to. Joyce is convinced Will is trying to talk to her.',
            duration: 52
        },
        {
            episode: 4,
            preview: ep4,
            title: 'Chapter Four: The Body',
            description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.',
            duration: 51
        },
        {
            episode: 5,
            preview: ep5,
            title: 'Chapter Five: The Flea and the Acrobat',
            description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
            duration: 53
        }
    ],
    seasonThree: [
        {
            episode: 1,
            preview: ep5,
            title: 'Chapter One : The Vanishing of Will Byers',
            description: 'On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.',
            duration: 49
        },
        {
            episode: 2,
            preview: ep4,
            title: 'Chapter Two: The Weirdo on Maple Street',
            description: 'Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.',
            duration: 56
        },
        {
            episode: 3,
            preview: ep3,
            title: 'Chapter Three: Holly, Jolly',
            description: 'An increasingly concerned Nancy looks for Barb and finds out what Jonathan"s been up to. Joyce is convinced Will is trying to talk to her.',
            duration: 52
        },
        {
            episode: 4,
            preview: ep2,
            title: 'Chapter Four: The Body',
            description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.',
            duration: 51
        },
        {
            episode: 5,
            preview: ep1,
            title: 'Chapter Five: The Flea and the Acrobat',
            description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
            duration: 53
        },
        {
            episode: 6,
            preview: ep4,
            title: 'Chapter Four: The Body',
            description: 'Refusing to believe Will is dead, Joyce tries to connect with her son. The boys give Eleven a makeover.',
            duration: 51
        },
        {
            episode: 7,
            preview: ep5,
            title: 'Chapter Five: The Flea and the Acrobat',
            description: 'Hopper breaks into the lab while Nancy and Jonathan confront the force that took Will. The boys ask Mr. Clarke how to travel to another dimension.',
            duration: 53
        }
    ],
}

export const EPISODES_DATA: AccordionItem[] = [
    {
        id: 'season-1',
        title: 'Season 01',
        subTitle: '9 Episodes',
        content:
            <div className={styles.episodesContainer}>
                {VIDEO_DATA.seasonOne.map(item => <EpisodesContentItem data={item} />)}
            </div>
    },
    {
        id: 'season-2',
        title: 'Season 02',
        subTitle: '5 Episodes',
        content:
            <div className={styles.episodesContainer}>
                {VIDEO_DATA.seasonTwo.map(item => <EpisodesContentItem data={item} />)}
            </div>
    },
    {
        id: 'season-3',
        title: 'Season 03',
        subTitle: '7 Episodes',
        content:
            <div className={styles.episodesContainer}>
                {VIDEO_DATA.seasonThree.map(item => <EpisodesContentItem data={item} />)}
            </div>
    }
];