import "./mutton.scss";

function Mutton() {
  return (
    <div className="mutton">
      <input className="lines--sibling" type="checkbox" />
      <button className="lines">
        <div className="lines__center">
          <div className="lines__center__square"></div>
        </div>
        <div className="lines__line --one"></div>
        <div className="lines__line --two"></div>
        <div className="lines__line --three"></div>
        <div className="lines__line --four"></div>
      </button>
    </div>
  );
}

export default Mutton;
