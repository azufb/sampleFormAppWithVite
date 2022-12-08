import { styled } from "./stitches.config";

const FormArea = styled('div', {
    position: 'absolute',
    left: '0',
    right: '0',
    width: '70%',
    height: '80%',
    margin: '0 auto',
});

const Title = styled('h1', {
    color: '$fontColorDefault',
    '@tablet': {
        textAlign: 'left'
    },
    '@pc': {
        textAlign: 'center'
    }
});

const Form = styled('form', {
    '@tablet': {
        textAlign: 'left'
    },
    '@pc': {
        textAlign: 'center'
    }
});

const FormLabel = styled('p', {
    color: '$fontColorDefault',
    fontWeight: 'bold',
    textAlign: 'left',
    margin: '0'
});

const Input = styled('input', {
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '1.5rem'
});

export {
    FormArea,
    Title,
    Form,
    FormLabel,
    Input
};