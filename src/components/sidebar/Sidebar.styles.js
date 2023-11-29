import styled, { keyframes } from 'styled-components';


export const MainSidebar = styled.div
`max-width: 418px;
padding: 20px 90px 20px 78px;`

export const SidebarPesonal = styled.div
` display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 12px 0 15px 0;`

export const SidebarPesonalName = styled.p
`font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #ffffff;
margin-right: 16px;`

export const SidebarIcon = styled.div
` width: 43px;
height: 43px;
background-color: #313131;
border-radius: 50%;
cursor: pointer;`

export const SidebarBlock = styled.div
` height: 100%;
padding: 240px 0 0 0;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;
`
  
  export const SidebarList = styled.ul `
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  `
  export const SidebarItem  = styled.li`
    width: 250px;
    height: 150px;
    margin-bottom: 30px;
 `
  
  export const SidebarLink  = styled.a`
    width: 100%;
    height: 100%;
  `
  
  export const SidebarImg  = styled.img `
    width: 250px;
    height: 150px;
  `
  const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
`;

  export const SkeletonSidebar = styled.div `
    background-color: #313131;
    width: 100%;
    height: 100%;
    animation: ${blink} 1s infinite alternate;
  `