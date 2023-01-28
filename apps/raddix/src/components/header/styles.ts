import { styled } from '@stitches/react';

export const StyledHeader = styled('header', {
  width: '100%',
  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 9,
  transition: 'all 50ms',
  '& .logo h1': {
    fontWeight: 500
  }
});

export const StyleContainer = styled('div', {
  width: '100%',
  height: '80px',
  maxWidth: 'var(--max-width)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 auto',
  padding: '15px 0'
});

export const StyleNav = styled('nav', {
  display: 'flex'
});

export const StyleList = styled('ol', {
  display: 'flex',
  '& li': {
    listStyle: 'none',
    fontSize: '16px',
    marginLeft: '40px',
    padding: '15px 0',
    transition: 'opacity 0.1s',
    '&:first-child': {
      margin: 0
    },
    '&:hover': {
      cursor: 'pointer',
      opacity: '0.85'
    }
  }
});
