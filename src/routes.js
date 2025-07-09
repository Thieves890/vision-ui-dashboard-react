// src/routes.js
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
    layout: "/auth",
    pages: [
      {
        icon: <HomeIcon className="w-5 h-5" />,
        name: "Sign In / Up",
        path: "login",
        element: <AuthPage />,
      },
    ],
  },
  {
    layout: "/dashboard",
    pages: [
      {
        icon: <HomeIcon className="w-5 h-5" />,
        name: "Home",
        path: "home",
        element: <HomePage />,
      },
      {
        icon: <ShoppingBagIcon className="w-5 h-5" />,
        name: "Belongings",
        path: "belongings",
        element: <BelongingsPage />,
      },
      {
        icon: <ListBulletIcon className="w-5 h-5" />,
        name: "Missions",
        path: "missions",
        element: <MissionsPage />,
      },
      {
        icon: <GiftIcon className="w-5 h-5" />,
        name: "Offers",
        path: "offers",
        element: <OffersPage />,
      },
      {
        icon: <StarIcon className="w-5 h-5" />,
        name: "Rewards",
        path: "rewards",
        element: <RewardsPage />,
      },
      {
        icon: <Cog6ToothIcon className="w-5 h-5" />,
        name: "Settings",
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
];

export default routes;
