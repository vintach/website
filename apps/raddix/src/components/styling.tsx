import { CodeBlock } from './code-block';
import { useState } from 'react';
import type { StylingProps } from '@/types/home-data';

const codeTabs = {
  Css: {
    'Switch.jsx': `
import useSwitch from '@raddix/switch';
import './styles.css';

const Switch = props => {
  const { switchProps, state } = useSwitch.Root(props);
  const { switchThumbProps } = useSwitch.Thumb(state);

  return (
    <button {...switchProps} className='switch'>
      <span {...switchThumbProps} className='switch-thumb' />
    </button>
  );
};

export default Switch;
      `,
    'styles.css': `
.switch {
  all: unset;
  display: block;
  width: 42px;
  height: 22px;
  background-color: rgba(15, 23, 42, 0.2);
  border-radius: 99px;
  position: relative;
  padding: 3px;
  -webkit-tap-highlight-color: black;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;
}

.switch:focus-visible {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4.5px var(--color-primary);
}

.switch[data-state='checked'] {
  background-color: var(--color-primary);
}

.switch[data-disabled='true'] {
  opacity: 0.4;
}

.switch-thumb {
  display: block;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 99px;
  transition: transform 150ms;
  transform: translateX(2px);
  will-change: transform;
  cursor: pointer;
}

.switch-thumb[data-state='checked'] {
  transform: translateX(19px);
}
      `
  },
  Sass: {
    'Switch.jsx': `
import useSwitch from '@raddix/switch';
import './styles.scss';

const Switch = props => {
  const { switchProps, state } = useSwitch.Root(props);
  const { switchThumbProps } = useSwitch.Thumb(state);

  return (
    <button {...switchProps} className='switch'>
      <span {...switchThumbProps} className='switch-thumb' />
    </button>
  );
};

export default Switch;
      `,
    'styles.scss': `
.switch {
  all: unset;
  display: block;
  width: 42px;
  height: 22px;
  background-color: rgba(15, 23, 42, 0.2);
  border-radius: 99px;
  position: relative;
  padding: 3px;
  -webkit-tap-highlight-color: black;
  cursor: pointer;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;

  &:focus-visible {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4.5px var(--color-primary);
  }

  &[data-state='checked'] {
    background-color: var(--color-primary);
  }

  &[data-disabled='true'] {
    opacity: 0.4;
  }
}


.switch-thumb {
  display: block;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 99px;
  transition: transform 150ms;
  transform: translateX(2px);
  will-change: transform;
  cursor: pointer;

  &[data-state='checked'] {
    transform: translateX(19px);
  }

}
      `
  },
  Tailwind: {
    'Switch.jsx': `
import useSwitch from '@raddix/switch';

const Switch = props => {
  const { switchProps, state } = useSwitch.Root(props);
  const { switchThumbProps } = useSwitch.Thumb(state);

  return (
    <button
      {...switchProps}
      class="w-[42px] h-[22px] bg-black-blur rounded-full p-1 box-content data-[state=checked]:bg-primary"
    >
      <span
        {...switchThumbProps}
        class="w-[22px] h-[22px] block bg-white rounded-full transition-transform translate-x-1" 
      />
    </button>
  );
};

export default Switch;
      `,
    'tailwind.config.js': `
      /** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'black': {
          'blur': 'rgba(15, 23, 42, 0.2)',
          DEFAULT: '#333',
        },
        'primary': '#312ff5'
      },
      spacing: {
        '1': '3px',
      }
    },
  },
  plugins: [],
}

    `
  },
  Emotion: {
    'Switch.jsx': `
import useSwitch from '@raddix/switch';
import { SwithRoot, SwithThumb } from './styles.js';

const Switch = props => {
  const { switchProps, state } = useSwitch.Root(props);
  const { switchThumbProps } = useSwitch.Thumb(state);

  return (
    <SwithRoot {...switchProps} >
      <SwithThumb {...switchThumbProps} />
    </SwithRoot>
  );
};

export default Switch;
      `,
    'styles.js': `
import styled from '@emotion/styled';

export const SwitchRoot = styled.button({
  all: 'unset',
  width: 42,
  height: 22,
  padding: 3,
  background: 'rgba(15, 23, 42, 0.2)',
  border: 0,
  borderRadius: 99,
  boxSizing: 'content-box',
  cursor: 'pointer',

  '&[data-state="checked"]': {
    background: '#312ff5',
  },

  '&:focus-visible': {
    boxShadow: '0 0 0 2px #fff, 0 0 0 4.5px #312ff5',
  },
});

export const SwitchThumb = styled.span({
  width: 22,
  height: 22,
  display: 'block',
  background: '#fff',
  borderRadius: 99,
  transition: 'transform 150ms',
  transform: 'translateX(2px)',

  '&[data-state="checked"]': {
    transform: 'translateX(19px)',
  },
});
    `
  }
};

type TabStyling = 'Css' | 'Sass' | 'Tailwind' | 'Emotion';

// const sizeIcon = 48;
const stylingTabs = {
  Css: {
    name: 'CSS',
    logo: '/icons/css.svg'
  },
  Sass: {
    name: 'Sass',
    logo: '/icons/sass.svg'
  },
  Tailwind: {
    name: 'Tailwind',
    logo: '/icons/tailwind-css.svg'
  },
  Emotion: {
    name: 'Emotion',
    logo: '/images/emotion.png'
  }
};

const BoxMain = () => {
  const [styling, setStyling] = useState<TabStyling>('Css');

  return (
    <div className='mx-auto w-full max-w-5xl'>
      <ul className='mb-xl flex justify-center md:gap-sm'>
        {Object.values(stylingTabs).map((item, index) => {
          const tabName = Object.keys(stylingTabs)[index];
          const activeTabStyles =
            tabName === styling ? 'bg-white/5 text-white' : '';
          return (
            <li
              key={item.name}
              onClick={() => setStyling(tabName as TabStyling)}
              className={`cursor-pointer select-none rounded-md border-0 bg-[transparent] px-sm py-xs text-sm text-gray-20 ${activeTabStyles} md:px-md md:py-sm md:text-sm`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <CodeBlock
        tabs={codeTabs[styling]}
        defaultTab={1}
        showTabs
        showLines
        height={470}
      />
    </div>
  );
};

export const Styling = () => {
  return (
    <section>
      {/* <BoxContent alignment='center'>
        <AntiSubtitle text={antisubtitle} />
        <SubTitle text={subtitle} />
        <Description text={description} />
      </BoxContent>
      <BoxMain /> */}
    </section>
  );
};
