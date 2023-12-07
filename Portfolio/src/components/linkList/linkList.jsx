import { PropTypes } from "prop-types";
import "./linkList.scss";

function LinkList({ children }) {
  return <ul className="link-list">{children}</ul>;
}

LinkList.propTypes = {
  children: PropTypes.node,
};

export default LinkList;
