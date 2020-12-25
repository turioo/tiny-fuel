import React, {useState} from 'react';
import kanistra from "./../../../../images/canistra.svg";
import coffee from "./../../../../images/coffee.svg";
import hotdog from "./../../../../images/hotdog.svg";
import s from "./Game.module.css";

const Pixel = (props) => {
    const [pixelColor, setPixelColor] = useState();
    const [show, setShow] = useState("hidden");

    const element = (e) => {
        if (e === "kanistra")
          return <img src={kanistra} alt="kanistra" style={styles.match} />;
        else if (e === "coffee")
          return <img src={coffee} alt="coffee" style={styles.match} />;
        else return <img src={hotdog} alt="hotdog" style={styles.match} />;
      };
    let styles = {
        pixel: {
            background:pixelColor
        },
        match: {
          visibility:show
        }
    }
    let newPixel = () => {
        setShow("visible");
        setPixelColor("rgba(106, 176, 76, 0.2)");
        props.click(props.id);
    }

    return(
       <div className={s.block} onClick={() => newPixel()} style={styles.pixel}>{element(props.type)}
       </div>
    );
    
}

export default Pixel;