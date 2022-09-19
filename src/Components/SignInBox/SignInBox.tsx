import style from "./SignInBox.module.scss";
import ReactDOM from "react-dom";
import { BsPersonCircle } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { Input, Button } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SignInBox = (props: any) => {
  const [signUp, setSignUp] = useState(false);

  const dispatch = useDispatch();

  const handleSignUp = () => {
    setSignUp(!signUp);
  };

  const handleLogIn = (event: any) => {
    event.preventDefault();
    dispatch({ type: "SIGN_IN" });
    setTimeout(props.exitButton, 100);
  };

  return ReactDOM.createPortal(
    <div className={style.container}>
      <ImCross className={style.exit} onClick={props.exitButton} />
      <BsPersonCircle className={style.personIcon} />
      <h1>{!signUp ? "Zaloguj się" : "Zarejestruj się"}</h1>
      <div className={style.formBox}>
        <form>
          <Input bordered labelPlaceholder="E-mail" size="lg" color="error" />
          <Input.Password
            bordered
            labelPlaceholder="Hasło"
            size="lg"
            color="error"
          />
          <Button
            className={style.submitButton}
            bordered
            color="error"
            shadow
            type="submit"
            onClick={handleLogIn}
          >
            {!signUp ? "Zaloguj się" : "Zarejestruj się"}
          </Button>
        </form>
      </div>
      <p>
        {!signUp ? "Nie masz jeszcze konta? " : "Posiadasz już konto? "}
        <span className={style.SignUp} onClick={handleSignUp}>
          {!signUp ? "Zarejestruj się" : "Zaloguj sie"}
        </span>
      </p>
    </div>,
    document.querySelector("#modal-root") as HTMLElement
  );
};

export default SignInBox;
