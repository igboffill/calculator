export const DIGIT = 'DIGIT',
    OPERATOR = 'OPERATOR',
    CLEAR = 'CLEAR',
    EQUEALS = 'EQUEALS',
    DECIMAL = 'DECIMAL'

export const keyClick = (action, value) => {
    return {
        type:action,
        value:value
    }
}