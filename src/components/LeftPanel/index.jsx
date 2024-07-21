/* ----------------------------------------------------------------
  Left Panel Component
---------------------------------------------------------------- */
import { useState } from "react";
import User from "../User";
import LeftPanelNavigation from "../LeftPanelNavigation";

const LeftPanel = ({filterByStatus, counter}) => {

  return (
    <div className="left-panel blue-skin">
      {/* Logo */}
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">учебный проект webcademy</div>
      </div>
      {/* // Logo */}
      {/* User */}
      <User/>
      {/* // User */}
      {/* Navigation 1 */}
      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <LeftPanelNavigation filterByStatus={filterByStatus} counter={counter}/>
      </div>
      {/* // Navigation 1 */}
    </div>
  );
}

export default LeftPanel;