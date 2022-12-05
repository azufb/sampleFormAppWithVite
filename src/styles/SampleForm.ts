import { styled } from "./stitches.config";

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

const FormLabel = styled('label', {
    color: '$fontColorDefault',
    fontWeight: 'bold'
});

export {
    Title,
    Form,
    FormLabel
};