// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보낸다.
// export const increment = () => ({
//     type: INCREMENT
// });
// export const decrement = () => ({
//     type: DECREMENT
// });

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// 모듈 초기 상태 정의
const initialState = {
    number: 0
};

// 리듀서
export function counter(state = initialState, action) {
    
    switch (action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state; // 아무 액션도 없으면 현재 상태를 반환한다.
    }
}

// 리듀서 
// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고 
// 두번째 파라미터( initialState )는 초기상태
export default handleActions({
    [INCREMENT]: (state, action) => {
        return { number: state.number + 1 };
    },
    // action 객체를 참조하지 않으니 아래처럼 생략 가능하다
    // state 부분에서 비구조화 할당도 해줘서 코드를 간소화 할수 있다.
    [DECREMENT]: ({ number }) => ({
        number: number - 1
    })
}, initialState);
