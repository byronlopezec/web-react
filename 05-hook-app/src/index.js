import React from 'react';
import ReactDOM from 'react-dom';
// import { CallbackHook } from './components/06-memos/CallbackHook';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { HookApp } from './HookApp';
// import {MultipleCustomHooks} from './components/03-examples/MultipleCustomHooks'
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05--useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { Padre } from './components/07-tarea-memo/Padre';
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(<TodoApp />,
    document.getElementById('root')
);