import style from "./SignInOverlay.module.scss";
import ReactDOM from "react-dom";

const SignInOverlay = (props: any) => {
  return ReactDOM.createPortal(
    <div className={style.container} onClick={props.onClick}></div>,
    document.querySelector("#overlay-root") as HTMLElement
  );
};

export default SignInOverlay;
