import { CodeBlock } from '../code-block';
import { AntiSubtitle } from '../home/anti-subtitle';
import Box from '../home/box';
import { Description } from '../home/description';
import { SubTitle } from '../home/subtitle';

export const Styling = () => {
  const tabs = {
    Css: {
      'Switch.jsx': `
import useSwitch from '@raddix/switch';
import './styles.css';

const Switch = props => {
  const { switchProps, state } = useSwitch.Root(props);
  const { switchThumbProps } = useSwitch.Thumb(state);

  return (
    <button {...switchProps} className='switch'>
      <span {...switchThumbProps} className='switch-thumb'></span>
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
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
  cursor: pointer;
}

.switch-thumb[data-state='checked'] {
  transform: translateX(19px);
}

.label-switch {
  margin-right: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.flex {
  display: flex;
  align-items: center;
}
      `
    }
  };

  return (
    <Box.Section>
      <Box.Content>
        <AntiSubtitle text='Styling' />
        <SubTitle text='Compatible with any styling solution' />
        <Description
          text={`You are in control of all aspects of styling, including functional
        styles. For example—by default—a Dialog Overlay won't cover the entire
        viewport. You're responsible for adding those styles, plus any
        presentation styles.`}
        />
      </Box.Content>
      <Box.GridTwo>
        <div></div>
        <CodeBlock tabs={tabs.Css} showTabs showLines />
      </Box.GridTwo>
    </Box.Section>
  );
};
