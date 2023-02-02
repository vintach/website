import { Header } from '@/components/header';
import styles from './app.module.scss';

export interface AppProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default AppLayout;
