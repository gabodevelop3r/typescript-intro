
export function whatsMyType <T>( argument:T ): T {
    return argument
}


let amIString = whatsMyType<string>('Hola mundo')

let amINumber = whatsMyType<number>(100)

let amIArray = whatsMyType<number[]>([1,2,3,4])

console.log({
    'string': amIString.split(''),
    'number': amINumber.toFixed(),
    'array': amIArray.join('-')
})