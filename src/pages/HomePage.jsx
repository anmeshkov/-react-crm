/* ----------------------------------------------------------------
  Home Page
---------------------------------------------------------------- */
import LeftPanel from "../components/LeftPanel";
import MainWrapper from "../components/MainWrapper";

const HomePage = () => {
  document.body.classList.add("with-nav", "body--dashboard");

  return (
    <div>
      <LeftPanel />
      <MainWrapper />
    </div>
  );
};

export default HomePage;