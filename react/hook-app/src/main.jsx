import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHooks } from './examples/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
import './index.css'
import { CallbackHook } from './memos/CallbackHook'
import { Memorize } from './memos/Memorize'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
import { SimpleForm } from './useEffect/SimpleForm'
import { Layout } from './useLayoutEffect/Layout'
import { FocusScreen } from './useRef/FocusScreen'
import { CounterApp } from './useState/CounterApp'
import {Padre} from './07-tarea-memo/Padre'
import { TodoApp } from './useReducer/TodoApp'
import {MainApp} from './useContext/MainApp'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <BrowserRouter>
    <TodoApp/>
  </BrowserRouter>
    

    
  //</React.StrictMode>
)
