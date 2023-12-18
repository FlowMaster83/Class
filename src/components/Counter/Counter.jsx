import React from 'react';

class Counter extends React.Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div>
        <span>{this.state.value}</span>

        <div>
          <button type="button" onClick={this.handleIncrement}>
            More (+1)
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Less (-1)
          </button>
        </div>
      </div>
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
