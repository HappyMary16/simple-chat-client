export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export const SAVE_USERNAME = 'SAVE_USERNAME'

export const logIn = () => ({
    type: LOG_IN
})

export const logOut = () => ({
    type: LOG_OUT
})

export const saveUsername = (username) => ({
    type: SAVE_USERNAME,
    payload: {
        username
    }
})