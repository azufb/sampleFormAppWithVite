import { styled } from './stitches.config';

const Title = styled('h1', {
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