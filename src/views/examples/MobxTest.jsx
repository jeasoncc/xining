import React, {Compontent} from 'react';
import {observer} from "mobx-react";

import { observable, computed, useStrict, action, observe } from 'mobx'

class VM {
    @observable firstName = '';
    @observable lastName = ''

    @computed get fullName() {
        const { firstName, lastNmae } = this;
        if(!firstName && !lastNmae) {
            return 'please input your name'
        } else {
            return firstName + ' ' + lastNmae
        }
    }
    @action.bound
    setValue(key, event) {
        this[key] = event.target.value
    }
    @action.bound
    doReset() {
        this.firstName = ''
        this.lastName = ''
    }
}
@observer
class MyTest extends Compontent {
    render() {
        const vm = this.props.vm
        return (
            <div>
                <p>First name:
                    <input type="text" value={vm.firstName} onChange={e => vm.setValue('firstName', e)} />
                </p>
                <p>last name:
                    <input type="text" value={vm.lastName} onChange={e => vm.setValue('lastName', e)} />
                </p>
                <p>Full name: {vm.fullName}</p>
                <p><button onClick={vm.doReset}>Reset</button></p>
            </div>
        )
    }
}

export default function Welcome(props) {
    return <MyTest vm= {new VM}></MyTest>;
  }