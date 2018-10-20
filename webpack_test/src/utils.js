export const multiply = (... number) => {
    return number.reduce((acc, item) => {
        return acc * item
    }, 1)
}

export const avg = (... numbers) => {
    return (multiply(... numbers) / numbers.length)
}

export default avg