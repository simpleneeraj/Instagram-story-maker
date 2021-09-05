import React from "react";
import usePortable from "../Hooks/usePortable";
// import QuetosText from "../Constent/QuetosText";

const Instagram = () => {
  const { thought, theme } = usePortable();
  const { background, color, spanBackground, spanColor, spanFontWeight } =
    theme;

  return (
    <>
      <div className={`Instagram`}>
        <div className={`InstagramImage`}>
          <span>
            <img src="/image/SimpleNeeraj.png" alt="me" />
          </span>
        </div>
        <div className={`InstagramText`}>
          <p
            spellCheck={false}
            contentEditable={true}
            suppressContentEditableWarning
            className="EditableDiv"
          >
            {thought.content}
          </p>
        </div>
        <div className={`InstagramBottom`}>
          <div>
            <span
              spellCheck={false}
              contentEditable={true}
              suppressContentEditableWarning
            >
              {thought.author}
            </span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .EditableDiv {
            font-size: 1rem;
            font-family: "HelveticaMedium";
          }
          .Instagram {
            height: auto;
            display: grid;
            border-radius: 10px;
            background-color: ${background};
            z-index: 4;
            margin: 0 1rem;
            max-width: 310px;
          }

          .Instagram .InstagramImage {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .Instagram .InstagramImage span {
            background: ${background};
            width: 44px;
            height: 44px;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            transform: translateY(-50%);
          }

          .Instagram .InstagramImage span img {
            border-radius: 100px;
            width: 40px;
            height: 40px;
          }
          .Instagram .InstagramText {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: -10px 0;
            padding: 0.7rem 0.4rem;
          }
          .Instagram .InstagramText p {
            color: ${color};
            width: 95%;
            text-align: center;
            border: none;
            outline: none;
            user-select: none;
            font-weight: 500;
            letter-spacing: 0.05rem;
            line-height: 1.4;
            max-width: 300px;
          }

          .Instagram .InstagramBottom {
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .Instagram .InstagramBottom div {
            background: ${spanBackground};
            padding: 0.85rem;
            border-radius: 6px;
            width: 100%;
            margin: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .Instagram .InstagramBottom div span {
            color: ${spanColor};
            font-weight: ${spanFontWeight};
            text-align: center;
            font-size: 0.9rem;
            width: 100%;
            text-align: center;
            border: none;
            outline: none;
            user-select: none;
            max-width: 300px;
          }
        `}
      </style>
    </>
  );
};

export default Instagram;
