export const PROCESS_MESSAGE = 'PROCESS_MESSAGE'

export const processMessage = (message) => ({
    type: PROCESS_MESSAGE,
    payload: {
        message
    }
})