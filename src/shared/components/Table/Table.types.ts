
export interface TableProps {
    rows: TableData;
    columns: TableData
}

export type TableData = {
    options: (string | TableOptionsExtended)[]
}[]

export type TableOptionsExtended = {
    label: string;
    mostPopular?: boolean;
}