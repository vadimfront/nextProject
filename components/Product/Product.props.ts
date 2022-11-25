import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react'
import { ProductModel } from '../../interfaces/product.interface'

export interface ProducProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    product: ProductModel
}