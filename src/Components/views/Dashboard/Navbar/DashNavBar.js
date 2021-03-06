import React from "react";
import "./DashNavBar.css";

export const DashNavBar = () => {
  const userInfo = {
    userName: "John Doe",
    userRole: "Administrator",
    avatar: "./img/avatar1.jpg",
  };
  return (
    <div className="navbar__container">
      <div className="navbar__wrapper">
        <div className="logo__container">
          <a className="company__logo" href="/">
            <img src="./logo.png" alt="Olive-Agro-logo" />
          </a>
          <h3>OLIVE AGRO</h3>
        </div>

        <div className="user__container">
          <div className="user__avatar">
            <img alt="" src={userInfo.avatar} />
          </div>
          <div className="user__info">
            <h5 className="user__name">Hello, {userInfo.userName}</h5>
            {/* <h6 className="user__role">
              <i>{userInfo.userRole}</i>
            </h6> */}
          </div>
        </div>
      </div>
    </div>

    // <div className="menu-position-top full-screen">
    //   <div className="all-wrapper solid-bg-all">
    //     <div className="layout-w">
    //       <div className="menu-mobile menu-activated-on-click color-scheme-dark">
    //         <div className="">
    //           <a className="mm-logo" href="index.html">
    //             <img src="../../../public/logo.png" alt="Olive-Agro-logo" />
    //             <span>Olive Agro</span>
    //           </a>
    //           <div className="mm-buttons">
    //             <div className="content-panel-open">
    //               <div className="os-icon os-icon-grid-circles"></div>
    //             </div>
    //             <div className="mobile-menu-trigger">
    //               <div className="os-icon os-icon-hamburger-menu-1"></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="menu-and-user">
    //           <div className="logged-user-w">
    //             <div className="avatar-w">
    //               <img alt="" src="../../public/img/avatar1.jpg" />
    //             </div>
    //             <div className="logged-user-info-w">
    //               <div className="logged-user-name">Maria Gomez</div>
    //               <div className="logged-user-role">Administrator</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
