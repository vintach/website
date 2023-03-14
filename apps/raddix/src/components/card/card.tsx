import { ComponentPropsWithoutRef, ElementType } from 'react';
import style from './card.module.scss';
import { Children } from '@/types/global';

export const CardGroup = ({ children }: Children) => {
  return <div className={style.cardGroup}>{children}</div>;
};

type CardProps<E extends ElementType> = {
  as?: E;
  title?: string;
  text?: string;
};

type Props<E extends React.ElementType> = React.PropsWithChildren<
  CardProps<E>
> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardProps<E>>;

export const Card = <E extends ElementType = 'div'>({
  as,
  title,
  text,
  ...rest
}: Props<E>) => {
  const Comp = as || 'div';

  return (
    <Comp className={style.card} {...rest}>
      {title && <h4>{title}</h4>}
      {text && <p>{text}</p>}
    </Comp>
  );
};
