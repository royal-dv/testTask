import type { TableData } from "@/shared/components/Table/Table.types"
import type { Tab } from "@/shared/components/Tabs/Tabs.types";

import { Card } from "./components/Card";
import type { CardTabData } from "./components/Card.types";

export const PLANS_ROWS_DATA: TableData = [
    {
        options: ['Price', '$9.99/Month', '$12.99/Month', '$14.99/Month'],
    },
    {
        options: [
            'Content',
            'Access to a wide selection of movies and shows, including some new releases.',
            'Access to a wider selection of movies and shows, including most new releases and exclusive content',
            'Access to a widest selection of movies and shows, including all new releases and Offline Viewing'
        ]
    },
    {
        options: [
            'Devices',
            'Watch on one device simultaneously',
            'Watch on Two device simultaneously',
            'Watch on Four device simultaneously'
        ]
    },
    {
        options: ['Free Trail', '7 Days', '7 Days', '7 Days']
    },
    {
        options: ['Cancel Anytime', 'Yes', 'Yes', 'Yes',]
    },
    {
        options: ['HDR', 'No', 'Yes', 'Yes',]
    },
    {
        options: ['Dolby Atmos', 'No', 'Yes', 'Yes',]
    },
    {
        options: ['Ad - Free', 'No', 'Yes', 'Yes',]
    },
    {
        options: [
            'Offline Viewing',
            'No',
            'Yes, for select titles.',
            'Yes, for all titles.'
        ]
    },
    {
        options: [
            'Family Sharing',
            'No',
            'Yes, up to 5 family members.',
            'Yes, up to 6 family members.'
        ]
    },
]

export const PLANS_COLUMNS_DATA: TableData = [
    {
        options: [
            'Features',
            { label: 'Basic', mostPopular: false },
            { label: 'Standard', mostPopular: true },
            { label: 'Premium', mostPopular: false }
        ]
    },
]

const data: CardTabData = {
    basic: {
        price: "$9.99/Month",
        freeTrail: "7 Days",
        content: "Access to a wide selection of movies and shows, including some new releases.",
        devices: "Watch on one device simultaneously",
        cancelAnytime: "Yes",
        hDR: "No",
        dolbyAtmos: "No",
        adFree: "No",
        offlineViewing: "No",
        familySharing: "No"
    },
    standard: {
        price: "$12.99/Month",
        freeTrail: "7 Days",
        content: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        devices: "Watch on Two device simultaneously",
        cancelAnytime: "Yes",
        hDR: "Yes",
        dolbyAtmos: "Yes",
        adFree: "Yes",
        offlineViewing: "Yes, for select titles.",
        familySharing: "Yes, up to 5 family members."
    },
    premium: {
        price: "$14.99/Month",
        freeTrail: "7 Days",
        content: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        devices: "Watch on Four device simultaneously",
        cancelAnytime: "Yes",
        hDR: "Yes",
        dolbyAtmos: "Yes",
        adFree: "Yes",
        offlineViewing: "Yes, for all titles.",
        familySharing: "Yes, up to 6 family members."
    }
}

export const TABS: Tab[] = [
    {
        id: 'Basic',
        label: 'Basic',
        content: <Card data={data.basic} />
    },
    {
        id: 'Standard',
        label: 'Standard',
        content: <Card data={data.standard} />
    },
    {
        id: 'Premium',
        label: 'Premium',
        content: <Card data={data.premium} />
    }
];