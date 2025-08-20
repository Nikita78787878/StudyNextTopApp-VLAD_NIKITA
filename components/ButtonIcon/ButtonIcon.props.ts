import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import up from './upv.svg'
import close from './close.svg'
import menu from './menu.svg'

export const icons = {
    up,
    close,
    menu
}

export type IconName = keyof typeof icons

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconName;
    // Здесь цвета задаются primary и ghost
    appearance: 'primary' | 'white';
}

