import ListMoviePage from "./../containers/HomeTemplate/ListMoviePage";
import AboutPage from "./../containers/HomeTemplate/AboutPage";
import HomePage from "./../containers/HomeTemplate/HomePage";
import DetailPage from "./../containers/HomeTemplate/DetailMoviePage";
import DashboarPage from "../containers/AdminTemplate/DashboardPage";
import AddUserPage from "../containers/AdminTemplate/AddUserPage";
import HomeTemplate from "../containers/HomeTemplate";
import AdminTemplate from "../containers/AdminTemplate";
import Editfilm from "containers/AdminTemplate/Film/Editfilm/editfilm";
import FilmPage from "containers/AdminTemplate/Film";
import AddNew from "containers/AdminTemplate/Film/Addnew/addnew";
import BookingTicket from "containers/HomeTemplate/Booking";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/about",
    component: AboutPage,
  },
  {
    exact: false,
    path: "/list-movie",
    component: ListMoviePage,
  },
  {
    exact: false,
    path: "/detail/:id",
    component: DetailPage,
  },
  {
    exact: false,
    path: "/booking",
    component: BookingTicket,
  },
];

const routesAdmin = [
  //localhost:3000/dashboard
  {
    exact: false,
    path: "/dashboard",
    component: DashboarPage,
  },

  //localhost:3000/add-user
  {
    exact: false,
    path: "/add-user",
    component: AddUserPage,
  },
  {
    exact: false,
    path: "/film",
    component: FilmPage,
  },
  {
    exact: false,
    path: "/addnew",
    component: AddNew,
  },
  {
    exact: false,
    path: "/edit/:id",
    component: Editfilm,
  },
];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

function renderRoutesAdmin() {
  return routesAdmin.map((route, index) => {
    return (
      <AdminTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRoutesHome, renderRoutesAdmin };
