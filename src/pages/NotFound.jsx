import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import TopBar from "../components/TopBar";

export default function NotFound() {
  return (
   <>
    <TopBar/>
    <div className="not-found">
      <div className="text-big">404</div>
      <h1>Sorry !</h1>
      <p>The link you followed may be broken or is the page has been removed</p>

      <Link to={"/"}>
        <button className="home-btn" type="button">
          <Icon iconName="arrow-left" extra="fa-thin" />
          Back To Home Page
        </button>
      </Link>
    </div></>
  );
}
