import { styled } from './stitches.config';

const FormArea = styled('div', {
  position: 'absolute',
  left: '0',
  right: '0',
  width: '70%',
  height: '80%',
  margin: '0 auto',
});

const Title = styled('h1', {
  margin: '2.5rem 0',
  color: '$fontColorDefault',
  '@tablet': {
    textAlign: 'left',
  },
  '@pc': {
    textAlign: 'center',
  },
});

const SubmitSuccessMessage = styled('p', {
  padding: '0.25rem 0.5rem',
  color: '$colorWhite',
  backgroundColor: '$successBG',
});

const Form = styled('form', {
  '@tablet': {
    textAlign: 'left',
  },
  '@pc': {
    textAlign: 'center',
  },
});

const PrependBtn = styled('button', {
  marginBottom: '1rem',
});

const EachFormArea = styled('div', {
  marginBottom: '1rem',
});

const FormLabel = styled('p', {
  color: '$fontColorDefault',
  fontWeight: 'bold',
  textAlign: 'left',
  margin: '0',
});

const InputArea = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const Input = styled('input', {
  width: '100%',
  boxSizing: 'border-box',
  marginRight: '0.5rem',
});

const AppendBtn = styled('button', {
  marginBottom: '2rem',
});

const ButtonsArea = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  columnGap: '1rem',
});

export {
  FormArea,
  Title,
  SubmitSuccessMessage,
  Form,
  PrependBtn,
  EachFormArea,
  FormLabel,
  InputArea,
  Input,
  AppendBtn,
  ButtonsArea,
};
