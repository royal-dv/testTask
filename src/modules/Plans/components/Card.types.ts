

export interface CardPlansProps {
    data: CardPlanData
}

interface CardPlanData {
    price: string,
    freeTrail: string,
    content: string,
    devices: string,
    cancelAnytime: string,
    hDR: string,
    dolbyAtmos: string,
    adFree: string,
    offlineViewing: string,
    familySharing: string
}

export type CardTabData = Record<'basic' | 'standard' | 'premium', CardPlanData>