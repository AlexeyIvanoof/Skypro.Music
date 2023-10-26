import{ styled } from 'styled-components'


export const ErrorPage = styled.h1
`display: flex;
justify-content: center;
color: #0c0b0b;
margin-top: 350px`

export function NotFound() {
    return (
<div>
    <ErrorPage>Страница не найдена!</ErrorPage>
</div>
    )
}