import { Puff } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

const Loader = () => (
  <div className={s.loader}>
    <Puff color="#7dcdff" />
  </div>
);

export default Loader;
