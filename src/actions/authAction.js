export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const logIn = (username) => ({
    type: LOG_IN,
    payload: {
        username
    }
})

export const logOut = () => ({
    type: LOG_OUT
})