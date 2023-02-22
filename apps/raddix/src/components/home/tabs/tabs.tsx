import { Children } from '@/types/global';

type TabsComponent<P = {}> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P>
> & {
  Item: typeof TabsItem;
};

type ClassName = { className?: string };

interface TabsItemProps extends Children, ClassName {
  active?: boolean;
  onClick?: () => void;
}

export const Tabs = (({ children, className }) => {
  return <div className={className}>{children}</div>;
}) as TabsComponent<Children & ClassName>;

export const TabsItem = ({ children, onClick, className }: TabsItemProps) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Tabs;
