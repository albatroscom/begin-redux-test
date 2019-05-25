// 리덕스와 연동된 컨테이너 컴포넌트 작성
import React, { Component } from 'react';
import Counter from 'components/Counter';

// CounterContainer 를 리덕스에 연결해준다.
import { connect } from 'react-redux';
import * as counterActions from 'store/modules/counter';

class CounterContainer extends Component {

    handleIncrement = () => {
        this.props.increment(); // mapDispatchToProps 에서 정의된 increment
    }

    handleDecrement = () => {
        this.props.decrement(); // mapDispatchToProps 에서 정의된 decrement
    }

    render() {

        // console.log( this.props );

        const { handleIncrement, handleDecrement } = this;
        const { number } = this.props;
        return (
            <Counter
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                number={number}
            />
        );
    }
}

// props 값으로 넣어줄 상태(state)를 정의해준다
const mapStateToProps = (state) => ({
    number: state.counter.number
});

// props 값으로 넣어 줄 액션 함수들을 정의해준다.
const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
