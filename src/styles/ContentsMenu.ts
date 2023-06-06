import { styled } from './stitches.config'; // configを作成しているので、@stitches/reactからではなく、configからimport。

const MenuList = styled('div', {
  '@tablet': {
    display: 'block',
  },
  '@pc': {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '1rem',
  },
});

const MenuButtonWrapDiv = styled('div', {
  '@tablet': {
    marginBottom: '1rem',
  },
  '@pc': {
    marginBottom: '0',
  },
});

const MenuButton = styled('button', {
  width: '10rem',
  height: '3rem',
  padding: '0.5rem 1rem',
  borderRadius: '15px',
  backgroundColor: '$menuButtonBG',
  color: '$colorWhite',
  '& a': {
    textDecoration: 'none',
  },
  '& a:visited': {
    color: '$colorWhite',
  },
});

export { MenuList, MenuButtonWrapDiv, MenuButton };
