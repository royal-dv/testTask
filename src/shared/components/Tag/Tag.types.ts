export interface TagProps {
    label: string;
    variant?: TagVariant
}

type TagVariant = 'primary' | 'secondary'