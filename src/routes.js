import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import Sales from "views/examples/Sales";
import ShoppingProduct from "views/examples/ShoppingProduct";
import ShoppingCar from "views/examples/ShoppingCar";
import tourBus from "views/tourBus/tourBus.jsx";
import ChangeInfo from "views/user/ChangeInfo";
import ChangePassword from "views/user/ChangePassword";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/sales",
    name: "Sales",
    icon: "ni ni-tv-2 text-primary",
    component: Sales,
    layout: "/Shopping"
  },
  {
    path: "/tourBus",
    name: "tourBus",
    icon: "ni ni-tv-2 text-primary",
    component: tourBus,
    layout: "/Shopping"
  },
  {
    path: "/ShoppingProduct",
    name: "ShoppingProduct",
    icon: "ni ni-tv-2 text-primary",
    component: ShoppingProduct,
    layout: "/Shopping"
  },
  {
    path: "/ShoppingCar",
    name: "ShoppingCar",
    icon: "ni ni-tv-2 text-primary",
    component: ShoppingCar,
    layout: "/Shopping"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/Shopping"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/Shopping"
  },
  {
    path: "/changeInfo",
    name: "ChangeInfo",
    icon: "ni ni-single-02 text-yellow",
    component: ChangeInfo,
    layout: "/Shopping"
  },
  {
    path: "/changePassword",
    name: "ChangePassword",
    icon: "ni ni-single-02 text-yellow",
    component: ChangePassword,
    layout: "/Shopping"
  },

  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  }
];
export default routes;
