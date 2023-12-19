import React from 'react';
import { ButtonsContainer, Button } from './Controls.styled';

export const Controls = ({ onIncrement, onDecrement }) => {
  <ButtonsContainer>
    <Button type="button" onClick={onIncrement}>
      More (+1)
    </Button>
    <Button type="button" onClick={onDecrement}>
      Less (-1)
    </Button>
  </ButtonsContainer>;
};
