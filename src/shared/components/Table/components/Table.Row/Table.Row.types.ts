import type { TableOptionsExtended } from "../../Table.types"

export interface TableRowsProps {
    rows: (string | TableOptionsExtended)[]
    header?: boolean
}