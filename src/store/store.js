import {observable, action} from 'mobx';

var appState = observable({
    timer: true
});
appState.resetTimer = action(function reset() {
    appState.timer = false;
});
appState.initTimer = action(function reset() {
    appState.timer = true;
});
export default appState