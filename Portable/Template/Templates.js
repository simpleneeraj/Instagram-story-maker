import usePortable from "../Hooks/usePortable";
import Instagram from "./Instagram";
const Templates = () => {
  return (
    <>
      <div id="TemplatesImage">
        <div id="Background" className={`Templates`}>
          <Instagram />
        </div>
      </div>
      <Style />
    </>
  );
};

export default Templates;

const Style = () => {
  const { background } = usePortable();
  return (
    <style jsx>
      {`
        #Background {
          background: ${background};
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .Templates {
          display: grid;
          place-content: center;
          height: 100vh;
          width: 100vw;
        }
      `}
    </style>
  );
};
