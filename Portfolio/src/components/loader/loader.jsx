import "./loader.scss";

function Loader() {
  return (
    <div className="loader">
      <h2 className="loader__title">Loading...</h2>
      <div className="loader__container">
        <div className="loader__container__spinner --outside">
          <div className="loader__container__spinner --inside">
            <div className="loader__container__spinner --inception"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
