import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useEffect, useState } from "react";
import { RegistrationApi, LoginApi } from "../../Api";
import {useAccessTokenUserMutation} from "../../serviseQuery/token";
import {setAuth} from "../../store/slices/AuthorizationSlice";
import { useDispatch } from "react-redux";


export function AuthPage({ setUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [offButton, setOffButton] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [postToken] = useAccessTokenUserMutation();
 

  const responseToken = async () => {
    await postToken({ email, password })
      .unwrap()
      .then((token) => {
        console.log("token", token);
        dispatch(
          setAuth({
            access: token.access,
            refresh: token.refresh,
            user: JSON.parse(localStorage.getItem("user")),
          })
        );
      });
  };

  const handleLogin = async () => {
    try {
      const response = await LoginApi(email, password);
      setUser(response.username);
      localStorage.setItem("user", JSON.stringify(response.username));
      responseToken();
      setOffButton(true);
      navigate("/Index");
    } catch (currentError) {
      setError(currentError.message);
    } finally {
      setOffButton(false);
    }
  };

  const handleRegister = async () => {
    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
    } else {
      try {
        const response = await RegistrationApi(email, password);
        setOffButton(true);
        setUser(response.username);
        localStorage.setItem("user",JSON.stringify(response.username));
        responseToken();
        navigate("/");
      } catch (currentError) {
        setError(currentError.message);
        console.log(error);
      } finally {
        setOffButton(false);
      }
    }
  };

  const handleIsLoginMode = () => {
    setIsLoginMode(true);
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister} disabled={offButton}>
                {offButton ? "Загружаем информацию..." : "Зарегистрироваться"}
              </S.PrimaryButton>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleLogin} disabled={offButton}>
                {offButton ? "Загружаем информацию..." : "Войти"}
              </S.PrimaryButton>
              <Link to="/">
                <S.ButtonTwo onClick={handleIsLoginMode}>
                  Зарегистрироваться
                </S.ButtonTwo>
              </Link>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}