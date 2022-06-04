import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

export const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          className="header__logo"
          alt=""
        />
      </Link>
      <SearchIcon className="header__searchIcon" />
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <Link to="/login">
            <span className="header__optionLineTwo" style={{ color: "white" }}>
              Sign In
            </span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingBasketIcon sx={{ color: "white" }} />
          </Link>
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
};
