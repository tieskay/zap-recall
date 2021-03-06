import turn from "../assets/turn.png";

export default function CardFrente({lengthDeck, pergunta, indexAtual, setFaceAtual}) {
  return (
    <div className= "card-frente">
      <span className="num-cards" data-identifier="counter">{indexAtual+1}/{lengthDeck} </span>
      <p className="pergunta">{pergunta.pergunta}</p>
      <img className="virar" src={turn} alt="" onClick={() => setFaceAtual("verso")}/>
    </div>
  );
}
