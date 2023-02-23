import styles from './accessible.module.scss';
import Box from '../box';
import { AntiSubtitle } from '../anti-subtitle';
import { SubTitle } from '../subtitle';
import { Description } from '../description';
import Image from 'next/image';

const dataCard = [
  {
    title: 'Keyboard navigation',
    icon: '/icons/black-keyboard.svg',
    description: `Soporte de teclado completo, permitiendo una navegación
    más rápida sin levantar las manos del teclado.`
  },
  {
    title: 'Focus indicator',
    icon: '/icons/center-focus.svg',
    description: `Raddix brinda accesibilidad de enfoque para poder identificar
    los elementos con los que está interactuando.`
  },
  {
    title: 'Screen reader',
    icon: '/icons/record-voe-over.svg',
    description: `Raddix se probó con los principales lectores de pantalla
    como NVDA, JAWS y TalkBack. `
  }
];

export const Accessible = () => {
  return (
    <Box.Section>
      <Box.Content alignment='center'>
        <AntiSubtitle text='Accessible' />
        <SubTitle text='Accessibility out of the box' />
        <Description
          text={`Raddix helps you build accessible components,
          including full screen reader and keyboard navigation support.`}
        />
      </Box.Content>

      <div className={styles.card}>
        {dataCard.map((card, id) => (
          <div key={`${card.title}#${id}`}>
            <Image src={card.icon} alt={card.title} width={40} height={40} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </Box.Section>
  );
};
