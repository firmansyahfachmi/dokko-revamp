import { ReactNode } from 'react'

declare type Align = 'left' | 'center' | 'right' | 'justify'
declare type Variant =
    | 'base' 
    | 'primary'
    | 'secondary'
    | 'medium-grey'
    | 'light-grey'
    | 'dark-grey'
declare type LetterSpacing = 'xs' | 'sm' | 'normal' | 'lg' | 'xl' | '2xl' | 'none'
declare type Size =
    | 'heading-1'
    | 'heading-2'
    | 'heading-3'
    | 'heading-4'
    | 'heading-5'
    | 'heading-6'
    | 'base' 
    | 'body-1'
    | 'body-2'
    | 'caption'
declare type Transform = 'normal' | 'lowercase' | 'uppercase' | 'capitalize'
declare type Weight = 'regular' | 'medium' | 'bold' | 'ralewayRegular'

export default interface ButtonProps {
    align?: Align
    children: ReactNode
    className?: string
    variant?: Variant
    letterSpacing?: LetterSpacing
    onClick?: () => void
    size?: Size
    transform?: Transform
    weight?: Weight
}
