// src/components/Logo/Logo.tsx

import "./Logo.css";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo.svg";

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Go to home">
      <img src={logo} className="logo-circle"/>
    </Link>
  );
}