import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren
} from 'react';
import type { Children } from '@/types/global';

export const CardGroup = ({ children }: Children) => {
  return <div className='mt-2xl grid grid-cols-1 gap-sm'>{children}</div>;
};

export interface CardProps<E extends ElementType> {
  as?: E;
  title?: string;
  text?: string;
}

type Props<E extends ElementType> = PropsWithChildren<CardProps<E>> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardProps<E>>;

export const Card = <E extends ElementType = 'div'>({
  as,
  title,
  text,
  ...rest
}: Props<E>) => {
  const Comp = as ?? 'div';

  return (
    <Comp
      className='box-border rounded-xl bg-white/5 px-md py-lg transition-colors duration-100 hover:bg-white/10'
      {...rest}
    >
      {title && <h4 className='text-lg font-medium'>{title}</h4>}
      {text && <p className='mt-sm leading-6 text-white/70'>{text}</p>}
    </Comp>
  );
};
