export const CONNECTED = 'CONNECTED'
export const CONNECTION_FAILED = 'CONNECTION_FAILED'

export const connected = () => ({
    type: CONNECTED
})

export const connectionFailed = () => ({
    type: CONNECTION_FAILED
})