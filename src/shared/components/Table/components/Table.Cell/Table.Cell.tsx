import { Tag } from '@/shared/components/Tag/Tag'
import type { TableCellProps } from './Table.Cell.types'

import styles from './Table.Cell.module.scss'

export const TableCell = ({ label, header, tag }: TableCellProps) => {
    return (
        <div className={`${styles.tableCellWrapper} ${header && styles.tableCellWrapperHeader}`}>
            <span className={`${styles.tableCellLabel} ${header && styles.tableCellLabelHeader}`}>{label}</span>
            {tag && <Tag label='Popular' />}
        </div>
    )

} 