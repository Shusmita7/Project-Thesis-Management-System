/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import TeacherNavbar from "components/Navbars/TeacherNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import {teacherRoutes, teacherRoutesSidebar} from "routes.js";

const Teacher = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

  const getRoutes = (teacherRoutes) => {
    return teacherRoutes.map((prop, key) => {
      if (prop.layout === "/teacher") {
        return (
          <Route path={prop.path} element={prop.component} key={key} exact />
        );
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < teacherRoutes.length; i++) {
      if (
        props?.location?.pathname.indexOf(teacherRoutes[i].layout + teacherRoutes[i].path) !==
        -1
      ) {
        return teacherRoutes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={teacherRoutesSidebar}
        logo={{
          innerLink: "/teacher",
          imgSrc: require("../assets/img/brand/JUST_logo.jpg"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContent}>
        <TeacherNavbar
          {...props}
          brandText={getBrandText(props?.location?.pathname)}
        />
        <Routes>
          {getRoutes(teacherRoutes)}
          <Route path="*" element={<Navigate to="/teacher" replace />} />
        </Routes>
        {/* <Container fluid>
          <AdminFooter />
        </Container> */}
      </div>
    </>
  );
};

export default Teacher;
