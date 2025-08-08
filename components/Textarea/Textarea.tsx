import {TextareaProps} from "./Textarea.props";
import {JSX} from "react";
import styles from './Textarea.module.css';
import cn from "classnames";

export const Textarea = ({className, ...props}: TextareaProps): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} {...props}/>
    )
};