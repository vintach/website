import { styled } from '@stitches/react';

export const StyledHero = styled('section', {
  width: '100%',
  maxWidth: 'var(--max-width)',
  margin: '12rem auto 40px',
  height: '800px',
  position: 'relative',
  overflow: 'visible',
  zIndex: 2,
  '& h1': {
    marginBottom: '4rem',
    fontSize: 'clamp(68px, 68rem, 45px)',
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  '& p': {
    fontSize: 'clamp(24px, 24rem, 22px)',
    opacity: 0.8,
    textAlign: 'center'
  }
});

export const HightLight = styled('div', {
  position: 'absolute',
  top: '0%',
  left: '115%',
  transform: 'translate(-50%, -50%)',
  width: '1200px',
  height: '1200px',
  backgroundImage:
    'radial-gradient(at center center, rgb(66,20,159,27%), transparent 56%)',
  zIndex: '-1',
  pointerEvents: 'none'
});

export const HightLight2 = styled('div', {
  position: 'absolute',
  top: '75%',
  left: '-20%',
  transform: 'translate(-50%, -50%)',
  width: '1200px',
  height: '1200px',
  backgroundImage:
    'radial-gradient(at center center, rgb(66,20,159,27%), transparent 56%)',
  zIndex: '-1',
  pointerEvents: 'none'
});
