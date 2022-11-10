import React, { FC } from 'react';
import { StyledButton } from './styles';

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  variant?: 'outlined' | 'contained';
}
export const Button: FC<IButton> = (props) => {
  const { variant = 'contained', children, ...rest } = props;
  return (
    //@ts-expect-error
    <StyledButton {...rest} variant={variant}>
      {children}
    </StyledButton>
  );
};
