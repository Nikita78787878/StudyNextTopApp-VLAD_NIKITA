import {AdvantagesProps} from "./Advantages.props";
import {JSX} from "react";
import styles from './Advantages.module.css';
import {Card} from "@/components";
import RateIcon from './rate.svg';
import {priceRu} from "@/helpers/helpers";
import CheckIcon from './check.svg';

export const Advantages = ({advantages}: AdvantagesProps): JSX.Element => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={styles.advantages}>
                    <CheckIcon/>
                    <div className={styles.title}>{a.title}</div>
                    <div className={styles.vline}></div>
                    <div>{a.description}</div>
                </div>
            ))}
        </>

    );
};