import * as S from './Signin.styles'
import { NavLink } from "react-router-dom";

export function Signin({ onAuthButtonClick }) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalFormLoginLink href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </S.ModalFormLoginLink>
            <S.ModalInput type="text" name="login" placeholder="Почта" />
            <S.ModalInput
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalButtonEnter onClick={onAuthButtonClick} to='index'>Войти</S.ModalButtonEnter>
            <NavLink to = '/Signup'>
            <S.ModalButtonReg>
                Зарегистрироваться
            </S.ModalButtonReg>
            </NavLink>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.Container>
    </S.Wrapper>
  )
}

/*/<button className="modal__btn-enter">
              <Link to="index">
              Войти
              </Link>
            </button>
            <button className="modal__btn-signup" onClick={onAuthButtonClick}>
               {user ? "Авторизован" : "Не авторизован"}
          
            </button>/*/