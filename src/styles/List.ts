import { styled } from './stitches.config';

const ListPageWrapper = styled('div', {
  padding: '2.5rem 0',
});

const Title = styled('h1', {
  margin: '0',
  color: '$fontColorDefault',
  '@tablet': {
    textAlign: 'left',
  },
  '@pc': {
    textAlign: 'center',
  },
});

const AlternativeText = styled('p', {
  color: '$fontColorDefault',
});

const ListArea = styled('div', {
  position: 'absolute',
  left: '0',
  right: '0',
  width: '70%',
  margin: '0 auto',
});

const DeleteBtnIcon = styled('span', {
  paddingLeft: '0.5rem',
});

const BackToHomeBtnArea = styled('div', {
  position: 'absolute',
  bottom: '2.5rem',
  margin: '0 auto',
  left: '0px',
  right: '0px',
  textAlign: 'center',
});

export {
  ListPageWrapper,
  Title,
  AlternativeText,
  ListArea,
  DeleteBtnIcon,
  BackToHomeBtnArea,
};
