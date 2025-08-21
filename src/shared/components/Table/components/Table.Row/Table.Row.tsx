import { TableCell } from "../Table.Cell/Table.Cell"
import type { TableRowsProps } from "./Table.Row.types"

import styles from './Table.Row.module.scss'

export const TableRow = ({ rows, header }: TableRowsProps) => {
    return (
        <div className={styles.tableRowWrapper}>
            {rows.map((item, index) =>
                <TableCell header={header} key={index}
                    label={typeof item === 'string' ? item : item.label}
                    tag={typeof item !== 'string' ? item.mostPopular : false}
                />)
            }
        </div>
    )
}