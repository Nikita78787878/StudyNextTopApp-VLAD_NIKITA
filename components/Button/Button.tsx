'use client';
import {JSX, useEffect} from "react";
import styles from './Button.module.css';
import {ButtonProps} from "@/components/Button/Button.props";
import cn from "classnames";
import ArrowIcon from './arrow.svg';
import {motion, useMotionValue} from "framer-motion";

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {

    // это нужно чтобы посмотреть как в консоле меняются значения и всё
    // const scale = useMotionValue(1);
    //
    // useEffect(() =>{
    //     scale.onChange(s => console.log(s));
    // }, [])

    return (
        <motion.button
            whileHover={{scale: 1.05}}
            className={cn(styles.button, className,{
                [styles.primary]: appearance === "primary",
                [styles.ghost]: appearance === "ghost",
            })}
            // style = {{scale}} // это нужно чтобы посмотреть как в консоле меняются значения и всё
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down',
            })}>
                <ArrowIcon />
            </span>}
            </motion.button>
    );
};