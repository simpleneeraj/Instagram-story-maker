import BottomButtons from "./Button/Bottom";
import Templates from "./Template/Templates";
import Model from "./Button/Model";
import usePortable from "./Hooks/usePortable";

const MainComponent = () => {
  const { modelDownload } = usePortable();

  return (
    <>
      <div>
        <Templates />
        <BottomButtons />
        {modelDownload ? <Model /> : null}
      </div>
    </>
  );
};

export default MainComponent;
