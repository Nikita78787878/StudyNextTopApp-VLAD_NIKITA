import {TextareaProps} from "./Textarea.props";
import {ForwardedRef, forwardRef, JSX} from "react";
import styles from './Textarea.module.css';
import cn from "classnames";

export const Textarea = forwardRef(({error, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (

        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}

        </div>

    )
});