import { styled } from './stitches.config'; // configを作成しているので、@stitches/reactからではなく、configからimport。

const MenuList = styled('div', {
    '@tablet': {
        display: 'block'
    },
    '@pc': {
        display: 'flex',
        justifyContent: 'center',
        columnGap: '1rem',
    }
});

const MenuButtonWrapDiv = styled('div', {
    '@tablet': {
        marginBottom: '1rem'
    },
    '@pc': {
        marginBottom: '0'
    }
});

const MenuButton = styled('button', {
    padding: '0.5rem 1rem',
    border: '2px solid #OOOOOO',
    borderRadius: '20px',
    backgroundColor: '#636DFF',
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
    MenuButtonWrapDiv,
    MenuButton
}