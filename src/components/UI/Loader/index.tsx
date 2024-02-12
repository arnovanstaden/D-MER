import { Backdrop, CircularProgress } from '@mui/material';
import styles from './styles.module.scss';

const Loader: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Backdrop open={open} className={styles.Loader}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loader;
