import { styled } from './stitches.config';

const Title = styled('h1', {
    margin: '2.5rem 0',
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