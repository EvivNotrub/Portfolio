import PropTypes from "prop-types";
import "./mutton.scss";

function Mutton({ addClass, checked, setChecked }) {
  return (
    <div
      className={"mutton" + " " + addClass}
      onClick={(e) => e.stopPropagation()}
    >
      <input
        className="lines--sibling"
        type="checkbox"
        onChange={() => setChecked(!checked)}
        checked={checked}
        value={checked}
      />
      <div className="lines">
        <div className="lines__center">
          <div className="lines__center__square"></div>
        </div>
        <div className="lines__line --one"></div>
        <div className="lines__line --two"></div>
        <div className="lines__line --three"></div>
        <div className="lines__line --four"></div>
      </div>
    </div>
  );
}

Mutton.propTypes = {
  addClass: PropTypes.string,
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
};

export default Mutton;
