import {ReviewFormProps} from "./ReviewForm.props";
import {JSX} from "react";
import styles from './ReviewForm.module.css';
import cn from "classnames";
import {Button, Input, Rating, Textarea} from "@/components";
import CloseIcon from '@/components/ReviewForm/close.svg'
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "@/components/ReviewForm/ReviewForm.interface";

export const ReviewForm = ({productId, className, ...props}: ReviewFormProps): JSX.Element => {

    const {register, control, handleSubmit, formState: {errors}} = useForm<IReviewForm>()

    const onSubmit = (data: IReviewForm ) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(styles.reviewForm, className)}
                 {...props}
            >
                <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                       placeholder='Имя'
                       error={errors.name}
                />
                <Input  {...register('title',  {required: {value: true, message: 'Заполните заголовок'}})}
                        placeholder='Заголовок отзыва'
                        error={errors.title}
                        className={styles.title}

                />
                <div className={styles.rating}>
                    <span>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        render={({field}) => (
                            <Rating isEditable rating={field.value} ref={field.ref} setRating={field.onChange}/>
                        )}
                    />

                </div>
                <Textarea {...register('description',  {required: {value: true, message: 'Заполните описание'}})}
                          placeholder='Текст отзыва'
                          className={styles.description}
                          error={errors.description}
                />
                <div className={styles.submit}>
                    <Button appearance="primary">Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыв отправлен</div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки, чёрт.
                </div>
                <CloseIcon className={styles.close}/>

            </div>
        </form>
    );
};