import React, { useState, forwardRef } from 'react';
// interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     children: React.ReactNode;
//   }
  
//   function Button({ children, ...props }: Props) {
//     const [focusVisible, setFocusVisible] = useState(false);
//     return <button {...props}>{children} 12345</button>;
//   }
  
//   export default Button;
// 버튼의 Props 타입 정의
type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;           // 기본값 false
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onFocus?: React.FocusEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  [key: string]: any; // 기타 props를 위한
};

// 유틸리티 클래스 생성 함수
const getButtonUtilityClass = ({ active, focusVisible, disabled }: { active: boolean; focusVisible: boolean; disabled: boolean; }) => {
  const classes = ['button'];

  if (disabled) {
    classes.push('button-disabled');
  }
  if (active) {
    classes.push('button-active');
  }
  if (focusVisible) {
    classes.push('button-focus');
  }

  return classes.join(' ');
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const {
    children,
    disabled = false,
    onClick,
    onFocus,
    onBlur,
    ...other
  } = props;

  // 상태 관리: 포커스 여부 및 활성화 상태
  const [focusVisible, setFocusVisible] = useState(false);
  const [active, setActive] = useState(false);

  // 포커스 핸들러
  const handleFocus: React.FocusEventHandler<HTMLButtonElement> = (event) => {
    setFocusVisible(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  // 블러 핸들러
  const handleBlur: React.FocusEventHandler<HTMLButtonElement> = (event) => {
    setFocusVisible(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  // 마우스 다운 핸들러
  const handleMouseDown = () => {
    setActive(true);
  };

  // 마우스 업 핸들러
  const handleMouseUp = () => {
    setActive(false);
  };

  return (
    <button
      ref={ref}
      onClick={!disabled ? onClick : undefined}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      disabled={disabled}
      className={getButtonUtilityClass({ active, focusVisible, disabled })}
      {...other}
    >
      {children}
    </button>
  );
});

export default Button;