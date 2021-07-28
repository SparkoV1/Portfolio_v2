import "./portfolioList.scss";
import React from "react";

const PortfolioList = ({title, active, setSelected}) => {
    return (
        <li className={active ? "portfolioList active" : "portfolioList"}>
            {title}
        </li>
    );
}

export default PortfolioList;