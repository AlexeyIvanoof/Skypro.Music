/*/реализован скелет загрузки Sidebar/*/

import "./SkeletonSidebar.css";

export function SkeletonSidebarList() {
  return (
    <div className="sidebar__list">
      <div className="skelet-sidebar__item"></div>
      <div className="skelet-sidebar__item"></div>
      <div className="skelet-sidebar__item"></div>
    </div>
  );
}