import { PropTypes } from "prop-types";
import "./linkList.scss";

function LinkList({ children, className }) {
  return (
    <ul className={"link-list" + " " + (className && className)}>
      {children.map((child, index) => {
        return <li key={index}>{child}</li>;
      })}
    </ul>
  );
}

LinkList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default LinkList;
