
export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

export function divide(x,y){
    if(y===0){
        return 'cannot divide by zero';
    }
    return x / y;
}

export function multiply(x,y){
    return x * y;
}

export const num1 = 4;
export const num2 = 12;
export const zero = 0;