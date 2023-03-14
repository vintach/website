import style from './card.module.scss';
import { Children } from '@/types/global';

export const CardGroup = ({ children }: Children) => {
  return <div className={style.cardGroup}>{children}</div>;
};

interface CardProps {
  as?: keyof JSX.IntrinsicElements;
  title?: string;
  text?: string;
}

export const Card = ({ as: Comp = 'div', title, text }: CardProps) => {
  return (
    <Comp className={style.card}>
      {title && <h4>{title}</h4>}
      {text && <p>{text}</p>}
    </Comp>
  );
};
