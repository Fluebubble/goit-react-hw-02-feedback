import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: #4aa8ff;
  color: white;
  font-size: 20px;
  border: 0px solid white;
  padding: 15px;
`;

const Buttons = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <ButtonBox>
      <Button name="good" type="button" onClick={onClickGood}>
        Good
      </Button>
      <Button name="neutral" type="button" onClick={onClickNeutral}>
        Neutral
      </Button>
      <Button name="bad" type="button" onClick={onClickBad}>
        Bad
      </Button>
    </ButtonBox>
  );
};

Buttons.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};

export default Buttons;
