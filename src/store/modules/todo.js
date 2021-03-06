import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; // todo 아이템에 들어갈 고유값 

const intialState = Map({
    input: '', 
    todos: List()
});

export default handleActions({
    // 한줄짜리 코드로 변환 할 수 있는 경우엔 다음과 같이 블록 { } 을 생략할 수 있다.
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, { payload: text }) => {
        // 위 코드는 action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다라는 의미
        const item = Map({ id: id++, checked: false, text });
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
        // id 값을 가진 index 찾아서 checked 값을 반전시킨다.
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, { payload: id}) => {
        // id 값을 가진 index 를 찾아서 지운다.
        const index = state.get('todos').findIndex(item => item.get('idx') === id);
        return state.deleteIn(['todos', index]);
    }
}, intialState);

export function todo(state = {}, action = {}) {
    switch (action.type) {
        // do reducer stuff
        default: return state;
    }
}
