export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILED = 'LOG_IN_FAILED'

export const logIn = (username) => ({
    type: LOG_IN,
    payload: {
        username
    }
})

export const logOut = () => ({
    type: LOG_OUT
})

export const logInFailed = () => ({
    type: LOG_IN_FAILED
})