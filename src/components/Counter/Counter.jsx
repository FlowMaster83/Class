import React from 'react';
import { Controls } from 'components/Controls/Controls';
import { CounterContainer, CounterValue } from './Counter.styled';

// обязательное расширение базового класса
class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  // обновление состояния от предыдущего
  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  // обновление состояния от предыдущего
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  // ОБЯЗАТЕЛЬНЫЙ метод класса
  render() {
    return (
      <CounterContainer>
        <CounterValue value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </CounterContainer>
    );
  }
}

export default Counter;

// React.Component - многофункционален под капотом
// render() - ОБЯЗАТЕЛЬНЫЙ метод класса
// тег - это встроенный компонент, которому передаётся проп
// обработчик событий уже встроен в реакт
// при onClick - это регистрация события (в отличии от addEventListener, где происходит делегирование)
// проблема инлайн-коллбеков: при большом объеме кода, делаем метод класса handleIncrement = () => {}
// в коде самого события передаём метод будущего объекта в контексте this
// при передаче event приходит SyntheticBaseEvent

// состояния
// под капотом у реакта находится бабель   state = {value: 0};
// обновление состояния - это асинх (после всего синх кода)
