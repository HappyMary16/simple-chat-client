export default class StateLoader {
    loadState() {
        try {
            let serializedState = localStorage.getItem('http://simple-chat.com:state');

            return JSON.parse(serializedState ? serializedState : {});
        } catch (err) {
            return {};
        }
    }

    saveState(state) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem('http://simple-chat.com:state', serializedState);
        } catch (err) {}
    }
}