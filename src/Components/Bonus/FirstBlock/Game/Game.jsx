import s from "./Game.module.css";
import shuffle from "./api/sits";
import Pixel from "./Pixel";
import {useState} from "react";
import cancel2 from "./../../../../images/cancel2.svg"
import QRcode from "./QRcode";

const Game = () => {
  let i = 0;
  let qrCode;
  const [winner,setWinner] = useState([]);
  let winnerFirst = [1, 2, 3];
  let winnerSecond = [4, 5, 6];
  let winnerThird = [7, 8, 9];
  let winnerRandom = [];
  let winnerLine;
  var now = new Date().toLocaleString();
  const [prize, setPrize]=useState("None");
  const [result, setResult] = useState("Знайди 3 однакових картки");
  const [isOpen, setOpen] = useState(false);
  const countCLick = (id) => {
    if (i === 0) {
      if (id === 1 || id === 2 || id === 3) {
        winnerRandom = winnerFirst;
        setPrize("Приз: Паливо - Дата: " + now);
      }
      if (id === 4 || id === 5 || id === 6) {
        winnerRandom = winnerSecond;
        setPrize("Приз: Кава - Дата: " + now);
      }
      if (id === 7 || id === 8 || id === 9) {
        winnerRandom = winnerThird;
        setPrize("Приз: Хот-дог - Дата: "+ now);
      }
    }
      if (i < 3) {
        i++;
       winner.push(id);
       setWinner(winner);
      } if (winner.length===3) {
        winnerLine =
          winner.length === winnerRandom.length &&
          winner.sort().every(function (value, index) {
            return value === winnerRandom.sort()[index];
          });
        if (winnerLine === true) {
          setResult("Ти виграв!");
          setOpen(true);
        } else {
          setResult("Ти програв!");
        }
      }
  };
  if (isOpen) {
    qrCode = <div className={s.qrBack}> <div className={s.qrCode}>
      <div className={s.cancel} onClick={() =>setOpen(false)}><img src={cancel2} alt="cancel"/></div>
      <span>Твій виграш!</span>
      <QRcode type={prize} />
  </div>
</div>  
}

  return (
    <div className={s.App}>
      <div className={s.label}>{result}</div>
      <div className={s.game}>
        {shuffle.map((e) => {
          return <Pixel id={e.id} type={e.type} click={countCLick} />;
        })}
      </div>
      {qrCode}
    
    </div>
  );
};

export default Game;
