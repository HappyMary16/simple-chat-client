export const LOAD_MESSAGES = 'LOAD_MESSAGES'
export const RENDER_MESSAGES = 'RENDER_MESSAGES'
export const RENDER_MESSAGE = 'PROCESS_MESSAGE'

export const SEND_MESSAGE = 'SEND_MESSAGE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const loadMessages = () => ({
    type: LOAD_MESSAGES
})

export const renderMessages = (messages) => ({
    type: RENDER_MESSAGES,
    payload: {
        messages
    }
})

export const renderMessage = (message) => ({
    type: RENDER_MESSAGE,
    payload: {
        message
    }
})

export const clearMessage = () => ({
    type: CLEAR_MESSAGE
})

export const sendMessage = (username, messageText) => ({
    type: SEND_MESSAGE,
    payload: {
        username,
        messageText
    }
})