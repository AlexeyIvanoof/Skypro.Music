import "./Signin.css"
import { Link } from "react-router-dom";

export function Signin({ user, onAuthButtonClick }) {
  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter">
              <Link to="index">
              Войти
              </Link>
            </button>
            <button className="modal__btn-signup" onClick={onAuthButtonClick}>
               {user ? "Авторизован" : "Не авторизован"}
          
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
