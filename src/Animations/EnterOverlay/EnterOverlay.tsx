import style from './EnterOverlay.module.scss';
import { motion } from "framer-motion";
import ReactDOM from 'react-dom';

const EnterOverlay = () => {
    return(
        ReactDOM.createPortal(<motion.div className={style.overlay}
        initial={{opacity: 1, display: 'block'}}
        animate={{opacity: 0, display: 'none'}}
        transition={{opacity: {duration: 1, delay: 1.5}, display: { delay: 2.5}}}
        ></motion.div>, document.getElementById("overlay-root") as HTMLElement)
    )
}

export default EnterOverlay;