import { BallTriangle } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.overlay}>
      <BallTriangle
        className={css.loader}
        align="center"
        height={400}
        width={250}
        radius={5}
        color="#8a62d3"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
        rigth={100}
        clear="right"
      />
    </div>
  );
};
