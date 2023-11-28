import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { booleanSwitch } from "../../utils/helpers/helpers";
import "./mainContent.scss";
import HomeNavigation from "../../components/navigations/homeNavigation";

function MainContent() {
  const outletClass = "homeContent__outlet";
  const [checkbox, setCheckbox] = useState(
    window.matchMedia("(max-width: 767.99px)").matches,
  );
  const [checked, setchecked] = useState(false);

  useEffect(() => {
    function handleResize() {
      setCheckbox(window.matchMedia("(max-width: 767.99px)").matches);
      setTimeout(() => {
        setchecked(false);
      }, 1500);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!checkbox) {
      setchecked(true);
    }
  }, [checkbox]);

  return (
    <section className="homeContent">
      {checkbox && (
        <input
          type="checkbox"
          className="homeContent__toogle"
          checked={checked}
          onChange={() => booleanSwitch(checked, setchecked)}
        />
      )}
      <aside className="homeContent__aside">
        <HomeNavigation />
      </aside>
      {/* Bellow is were the content will be rendered */}
      <Outlet context={outletClass} />
    </section>
  );
}

export default MainContent;
