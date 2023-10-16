import * as S from './PlayList.styles.js'

export function PlayList(props) {
    return (
<S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg
                  src={props.img}
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
    )
};

