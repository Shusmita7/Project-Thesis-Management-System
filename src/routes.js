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
import AdminDashboard from "views/admin/AdminDashboard.js";
import StudentDashboard from "views/student/StudentDashboard.js";
import TeacherDashboard from  "views/teacher/TeacherDashboard.js";
import Profile from "views/admin/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/auth/Register.js";
import StudentRegister from "views/auth/StudentRegister.js";
import TeacherRegister from "views/auth/TeacherRegister.js";
import Login from "views/auth/Login.js";
import Tables from "views/examples/Tables.js";
import AdminCalendar from "views/admin/AdminCalendar.js";
import CreateCalendar from "views/admin/CreateCalendar.js";
import AdminCommittee from "views/admin/AdminCommittee.js";
import CreateCommittee from "views/admin/CreateCommittee.js";
import StudentCalendar from "views/student/StudentCalendar.js";
import StudentCommittee from "views/student/StudentCommittee.js";
import StudentEvaluation from "views/student/StudentEvalution.js";
import StudentGroup from "views/student/StudentGroup.js";

import TeacherCalendar from "views/teacher/TeacherCalendar.js";
import TeacherCommittee from "views/teacher/TeacherCommittee.js";
import TeacherEvaluation from "views/teacher/TeacherEvaluation.js";
import CreateEvaluation from "views/teacher/CreateEvaluation.js";
import TeacherGroup from "views/teacher/TeacherGroup.js";
import CreateGroup from "views/teacher/CreateGroup.js";


import Icons from "views/examples/Icons.js";




var adminRoutes = [
  {
    path: "/",
    name: "AdminDashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <AdminDashboard />,
    layout: "/admin",
  },
  
  {
    path: "/adminCalendar",
    name: "AdminCalendar",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminCalendar />,
    layout: "/admin",
  },
  {
    path: "/createCalendar",
    name: "CreateCalendar",
    component: <CreateCalendar />,
    layout: "/admin",
  },
  {
    path: "/adminCommittee",
    name: "AdminCommittee",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminCommittee />,
    layout: "/admin",
  },
  {
    path: "/createCommittee",
    name: "CreateCommittee",
    component: <CreateCommittee />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    component: <Profile />,
    layout: "/admin",
  },
  
];

var adminRoutesSidebar = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <AdminDashboard />,
    layout: "/admin",
  },
  {
    path: "/adminCalendar",
    name: "Calendar",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminCalendar />,
    layout: "/admin",
  },
  {
    path: "/adminCommittee",
    name: "Committee",
    icon: "ni ni-bullet-list-67 text-red",
    component: <AdminCommittee />,
    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    component: <Profile />,
    layout: "/admin",
  },
  

];

var studentRoutes = [
  {
    path: "/",
    name: "StudentDashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <StudentDashboard />,
    layout: "/student",
  },
  {
    path: "/studentCalendar",
    name: "StudentCalendar",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentCalendar />,
    layout: "/student",
  },
  {
    path: "/studentCommittee",
    name: "StudentCommittee",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentCommittee />,
    layout: "/student",
  },
  {
    path: "/studentEvaluation",
    name: "StudentEvaluation",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentEvaluation />,
    layout: "/student",
  },
  {
    path: "/studentGroup",
    name: "StudentGroup",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentGroup />,
    layout: "/student",
  },
];

var studentRoutesSidebar = [
  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <StudentDashboard />,
    layout: "/student",
  },
  {
    path: "/studentCalendar",
    name: "Calendar",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentCalendar />,
    layout: "/student",
  },
  {
    path: "/studentCommittee",
    name: "Committee",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentCommittee />,
    layout: "/student",
  },
  {
    path: "/studentEvaluation",
    name: "Evaluation",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentEvaluation />,
    layout: "/student",
  },
  {
    path: "/studentGroup",
    name: "Group",
    icon: "ni ni-bullet-list-67 text-red",
    component: <StudentGroup />,
    layout: "/student",
  },
];
var teacherRoutes = [
  {
    path: "/",
    name: "TeacherDashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherDashboard />,
    layout: "/teacher",
  },
  {
    path: "/teacherCalendar",
    name: "TeacherCalendar",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherCalendar />,
    layout: "/teacher",
  },
 
  {
    path: "/teacherCommittee",
    name: "TeacherCommittee",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherCommittee />,
    layout: "/teacher",
  },
  {
    path: "/teacherEvaluation",
    name: "TeacherEvaluation",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherEvaluation />,
    layout: "/teacher",
  },
  {
    path: "/createEvaluation",
    name: "CreateEvaluation",
    icon: "ni ni-tv-2 text-primary",
    component: <CreateEvaluation />,
    layout: "/teacher",
  },
  {
    path: "/teacherGroup",
    name: "TeacherGroup",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherGroup />,
    layout: "/teacher",
  },
  {
    path: "/createGroup",
    name: "CreateGroup",
    icon: "ni ni-tv-2 text-primary",
    component: <CreateGroup />,
    layout: "/teacher",
  },
];

var teacherRoutesSidebar = [

  {
    path: "/",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherDashboard />,
    layout: "/teacher",
  },
  {
    path: "/teacherCalendar",
    name: "Calendar",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherCalendar />,
    layout: "/teacher",
  },
  {
    path: "/teacherCommittee",
    name: "Committee",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherCommittee />,
    layout: "/teacher",
  },
  {
    path: "/teacherEvaluation",
    name: "Evaluation",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherEvaluation />,
    layout: "/teacher",
  },
  {
    path: "/teacherGroup",
    name: "Group",
    icon: "ni ni-tv-2 text-primary",
    component: <TeacherGroup />,
    layout: "/teacher",
  },
]
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: <Icons />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/calendar",
  //   name: "Calendar",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Calendar />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/createCalendar",
  //   component: <CreateCalendar />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/committee",
  //   name: "Committee",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Committee />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/createCommittee",
  //   component: <CreateCommittee />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/group",
  //   name: "Group",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Group />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/createGroup",
  //   component: <CreateGroup />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/evaluation",
  //   name: "Evaluation",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Evaluation />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/createEvaluation",
  //   component: <CreateEvaluation />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: <Maps />,
  //   layout: "/admin",
  // },
  var authRoutes = [
    {
      path: "/login",
      name: "Login",
      icon: "ni ni-key-25 text-info",
      component: <Login />,
      layout: "/auth",
    },
    {
      path: "/register",
      name: "Register",
      icon: "ni ni-circle-08 text-pink",
      component: <Register />,
      layout: "/auth",
    },
    {
      path: "/studentRegister",
      name: "StudentRegister",
      component: <StudentRegister />,
      layout: "/auth",
    },
    {
      path: "/teacherRegister",
      name: "TeacherRegister",
      component: <TeacherRegister />,
      layout: "/auth",
    },
  ];
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: <Profile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: <Tables />,
  //   layout: "/admin",
  // },
  
// ];
export {adminRoutes, studentRoutes, teacherRoutes, authRoutes, adminRoutesSidebar, studentRoutesSidebar, teacherRoutesSidebar};

