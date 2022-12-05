import { styled } from './stitches.config';

const Title = styled('h1', {
    margin: '0',
    '@tablet': {
        textAlign: 'left'
    },
    '@pc': {
        textAlign: 'center'
    }
});

export {
    Title
};