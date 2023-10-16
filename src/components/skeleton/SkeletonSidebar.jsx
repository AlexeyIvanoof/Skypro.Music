/*/реализован скелет загрузки Sidebar/*/
import * as S from './SkeletonSidebar.styles.js'


export function SkeletonSidebarList() {
  return (
    <S.SidebarList>
      <S.SkeletSidebarItem></S.SkeletSidebarItem>
      <S.SkeletSidebarItem></S.SkeletSidebarItem>
      <S.SkeletSidebarItem></S.SkeletSidebarItem>
    </S.SidebarList>
  );
}