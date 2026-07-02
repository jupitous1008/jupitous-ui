// src/data/statsData.js

// import {
//   FiUsers,
//   FiMapPin,
//   FiSmile,
//   FiPackage,
//   FiTruck,
//   FiShield,
// } from "react-icons/fi";

// import {
//   Users,
//   MapPin,
//   Smile,
//   Package,
//   Truck,
//   ShieldCheck,
// } from "lucide-react";

import {
  faAward,
  faMapLocationDot,
  faUsers,
  faBoxesStacked,
  faTruckFast,
  faCircleCheck,
  faSmile
} from "@fortawesome/free-solid-svg-icons";

export const statsData = [
  {
    id: 1,
    value: "1+",
    title: "Years of Excellence",
    icon: faUsers,
  },
  {
    id: 2,
    value: "50+",
    title: "Distributors Pan India",
    icon: faMapLocationDot,
  },
  {
    id: 3,
    value: "10k+",
    title: "Happy Customers",
    icon: faSmile,
  },
  {
    id: 4,
    value: "10+",
    title: "Products Range",
    icon: faBoxesStacked,
  },
  {
    id: 5,
    value: "",
    title: "Timely Delivery",
    icon: faTruckFast,
  },
  {
    id: 6,
    value: "",
    title: "Quality Assurance",
    icon: faCircleCheck,
  },
];