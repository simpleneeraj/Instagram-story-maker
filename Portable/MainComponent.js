import BottomButtons from "./Button/Bottom";
import Templates from "./Template/Templates";
import DownloadModel from "./Models/DownloadModel";
import usePortable from "./Hooks/usePortable";
import TextModel from "./Models/TextModel";

const MainComponent = () => {
  const { modelDownload, textEditModel } = usePortable();

  return (
    <>
      <div>
        <Templates />
        <BottomButtons />
        {modelDownload ? <DownloadModel /> : null}
        {textEditModel ? <TextModel /> : null}
      </div>
    </>
  );
};

export default MainComponent;
