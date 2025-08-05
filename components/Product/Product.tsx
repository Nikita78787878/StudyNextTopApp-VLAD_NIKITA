import {ProductProps} from "./Product.props";
import {JSX} from "react";


export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
    return(
        <div>
            {product.title}
        </div>
    )
};