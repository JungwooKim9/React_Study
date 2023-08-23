import React, { useReducer, createContext, useContext, useRef } from 'react';
    // 'react' 라이브러리에서 React는 export default
        // import에서 받을 시 이름을 변경해서 받을 수 있음
        // 한 라이브러리에서 한 개만 설정
    // 'react' 라이브러리에서 {useReducer, createContext, useContext, useRef}
        // 반드시 {} 블락에서 받아야 하고, 이름 변경이 불가
        // 한 라이브러리에서 여러 개를 설정
const initialTodos = [
 {
 id: 1,
 text: '프로젝트 생성하기',
 done: true
 },
 {
 id: 2,
 text: '컴포넌트 스타일링하기',
 done: true
 },
 {
 id: 3,
 text: 'Context 만들기',
 done: false
 },
 {
 id: 4,
 text: '기능 구현하기',
 done: false
 }
];

function todoReducer(state, action) {
    switch (action.type) {
     case 'CREATE':
     return state.concat(action.todo);
     case 'TOGGLE':
     return state.map(todo =>
     todo.id === action.id ? { ...todo, done: !todo.done } : todo
     );
     case 'REMOVE':
     return state.filter(todo => todo.id !== action.id);
     default:
     throw new Error(`Unhandled action type: ${action.type}`);
     }
    }
    
    const TodoStateContext = createContext();
    const TodoDispatchContext = createContext();
    const TodoNextIdContext = createContext();

    export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
     <TodoStateContext.Provider value={state}>
        <TodoDispatchContext.Provider value={dispatch}>
            <TodoNextIdContext.Provider value={nextId}>
                {children}
            </TodoNextIdContext.Provider>
        </TodoDispatchContext.Provider>
     </TodoStateContext.Provider>
     );

    }
    export function useTodoState() {
     return useContext(TodoStateContext);
    }
    export function useTodoDispatch() {
        return useContext(TodoDispatchContext);
    }
    export function useTodoNextId() {
     return useContext(TodoNextIdContext);
    }