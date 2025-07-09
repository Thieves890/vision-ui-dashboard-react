// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

import {
  HomeIcon,
  ShoppingBagIcon,
  StarIcon,
  GiftIcon,
  ListBulletIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

// Pages
import AuthPage from "pages/AuthPage.jsx";
import HomePage from "pages/HomePage.jsx";
import BelongingsPage from "pages/BelongingsPage.jsx";
import MissionsPage from "pages/MissionsPage.jsx";
import OffersPage from "pages/OffersPage.jsx";
import RewardsPage from "pages/RewardsPage.jsx";
import SettingsPage from "pages/SettingsPage.jsx";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Belongings",
    key: "belongings",
    route: "/belongings",
    icon: <IoBagHandle size="15px" color="inherit" />,
    component: BelongingsPage,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Missions",
    key: "missions",
    route: "/missions",
    icon: <IoList size="15px" color="inherit" />,
    component: MissionsPage,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Offers",
    key: "offers",
    route: "/offers",
    icon: <IoGift size="15px" color="inherit" />,
    component: OffersPage,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Rewards",
    key: "rewards",
    route: "/rewards",
    icon: <IoTrophy size="15px" color="inherit" />,
    component: RewardsPage,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    route: "/settings",
    icon: <IoSettings size="15px" color="inherit" />,
    component: SettingsPage,
    noCollapse: true,
  },
  {
    type: "title",
    title: "Account Pages",
    key: "account-pages",
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/sign-in",
    icon: <IoLogIn size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/sign-up",
    icon: <IoPersonAdd size="15px" color="inherit" />,
    component: SignUp,
    noCollapse: true,
  },
];

export default routes;
