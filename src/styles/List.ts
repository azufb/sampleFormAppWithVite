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

const AlternativeText = styled('p', {
    color: '$fontColorDefault'
});

const ListArea = styled('div', {
    position: 'absolute',
    left: '0',
    right: '0',
    width: '70%',
    height: '80%',
    margin: '0 auto',
    border: '2px solid $fontColorDefault'
});

export {
    Title,
    AlternativeText,
    ListArea
};