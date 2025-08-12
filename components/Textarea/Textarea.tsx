import {TextareaProps} from "./Textarea.props";
import {ForwardedRef, forwardRef, JSX} from "react";
import styles from './Textarea.module.css';
import cn from "classnames";

export const Textarea = forwardRef(({className, ...props}: TextareaProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <textarea className={cn(className, styles.input)} ref={ref} {...props}/>
    )
});