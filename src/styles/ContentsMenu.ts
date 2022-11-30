import { styled } from '@stitches/react';

const MenuList = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '1rem'
});

const MenuButton = styled('button', {
    border: '2px solid #OOOOOO',
    borderRadius: '20px',
    backgroundColor: 'red',
    color: '#FFFFFF',
    '& a': {
        textDecoration: 'none'
    },
    '& a:visited': {
        color: 'inherit'
    }
});

export {
    MenuList,
    MenuButton
}