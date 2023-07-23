
import { Product,taxCalculation } from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description: 'iPad',
        price: 20
    }
]
const tax: number = 0.15

const [ total, taxResult ] = taxCalculation({ 
    tax, 
    products:shoppingCart 
})

console.log({'total': total, 'tax':taxResult})