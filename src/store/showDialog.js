import {observable,action} from 'mobx';

var appState = observable({
    timer: false,
    info: true
});
appState.resetTimer = action(function reset() {
    appState.timer = false;
});
appState.initTimer = action(function reset() {
    appState.timer = true;
});
appState.successInfo = action(function reset() {
    appState.info = true;
});
appState.errorInfo = action(function reset() {
    appState.info = false;
});
export default appState