import styles from './accessible.module.scss';
import { BoxContent, BoxSection } from '../box';
import { AntiSubtitle } from '../anti-subtitle';
import { SubTitle } from '../subtitle';
import { Description } from '../description';
import Image from 'next/image';
import type { AccessibleProps } from '@/types/home-data';

export const Accessible = ({
  antisubtitle,
  subtitle,
  description,
  main
}: AccessibleProps) => {
  return (
    <BoxSection>
      <BoxContent alignment='center'>
        <AntiSubtitle text={antisubtitle} />
        <SubTitle text={subtitle} />
        <Description text={description} />
      </BoxContent>

      <div className={styles.card}>
        {main.dataCard.map((card, id) => (
          <div key={`${card.title}#${id}`}>
            <Image src={card.icon} alt={card.title} width={40} height={40} />
            <h4>{card.title}</h4>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </BoxSection>
  );
};
