import { SubmitBtn } from '../styles/SubmitButton';

const SubmitButton = (props: any): JSX.Element => {
  return (
    <SubmitBtn type='submit' onClick={props.onClick}>
      {props.text}
    </SubmitBtn>
  );
};

export default SubmitButton;
