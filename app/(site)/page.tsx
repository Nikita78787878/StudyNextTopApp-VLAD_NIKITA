import styles from './page.module.css';
import {Metadata} from "next";
import {Menu} from "@/app/(site)/components/menu";
import {Input, Textarea} from "@/components";


export async function generateMetadata(): Promise<Metadata> {
    //...
    return {
        title: 'ComputedMeta',
    };
}



/**
 * Это сделанно для Page Router
 */
// const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
//     firstCategory: 0
// });

export default async function Home() {

     // console.log('I am home');
    return (
        <main className={styles.main}>
            Главная страница
            <Input placeholder="тест" />
            <Textarea placeholder="тест area"/>
            <Menu/>
        </main>
    );
}
