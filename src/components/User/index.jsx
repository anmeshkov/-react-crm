/* ----------------------------------------------------------------
  User Component
---------------------------------------------------------------- */

import { useState, useEffect } from "react";
import userAvatar from "../../assets/img/avatar-128.jpg"

const User = () => {
  const [userName, setUserName] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
  });

  useEffect(() => {
    setUserName({
      firstName: "Петр",
      lastName: "Васильевич",
      avatar: userAvatar,
    });
  }, []);

  return (
    <div className="left-panel__user clearfix">
      <div className="left-panel__user-photo">
        <img src={userName.avatar} alt={userName.firstName + ' ' + userName.lastName} title={userName.firstName + ' ' + userName.lastName} />
      </div>
      <div className="left-panel__user-name">
        {userName.firstName} <br />
        {userName.lastName} <br />
      </div>
    </div>
  );
};

export default User;
