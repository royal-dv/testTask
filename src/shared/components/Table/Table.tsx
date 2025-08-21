import { TableRow } from './components/Table.Row/Table.Row'
import type { TableProps } from './Table.types'

import styles from './Table.module.scss'

export const Table = ({ rows, columns }: TableProps) => {
    return (
        <div className={styles.tableWrapper}>
            {columns.map((item, index) => <TableRow key={index} header rows={item.options} />)}
            {rows.map((item, index) => <TableRow key={index} rows={item.options} />)}
        </div>
    )
}
