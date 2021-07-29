import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    reactPortfolio,
    webPortfolio,
} from "../../data";

export default function Portfolio() {
    //!------------------ For future -----------------
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "react",
            title: "React App",
        },
    ];
    useEffect(() => {
        switch (selected) {
            case "web":
                setData(webPortfolio);
                break;
            case "react":
                setData(reactPortfolio);
                break;
            default:
                setData(webPortfolio);
        }
    }, [selected]);
    //!----------------------------------------
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        key={item.id}
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id}>
                        <img
                            src={d.img}
                            alt=""
                        />
                        <a href={d.link} rel="noreferrer" target="_blank">{d.title}</a>

                    </div>
                ))}
            </div>
        </div>
    );
}