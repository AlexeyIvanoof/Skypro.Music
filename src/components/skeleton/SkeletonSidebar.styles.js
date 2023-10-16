import{ styled } from 'styled-components'

export const SidebarList = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`

export const SkeletSidebarItem = styled.div`
margin-bottom: 30px;
width: 250px;
height: 150px;
background-color: #313131;
animation: blink 1s infinite alternate;

@keyframes blink {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0.2;
    }
  }`
