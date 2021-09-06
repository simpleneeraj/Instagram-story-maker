import React from "react";

import usePortable from "../Hooks/usePortable";

const Instagram = () => {
  const { thought, theme, fontSize, fontWeight, userImage, userImageHandler } =
    usePortable();
  const { background, color, spanBackground, spanColor, spanFontWeight } =
    theme;

  return (
    <>
      <div className={`Instagram`}>
        <div className={`InstagramImage`}>
          <label htmlFor="userImage">
            <span>
              <img src={userImage} alt="me" />
            </span>
            <input
              onChange={(e) =>
                userImageHandler(URL.createObjectURL(e.target.files[0]))
              }
              type="file"
              id="userImage"
            />
          </label>
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
            font-size: ${fontSize}px;
            font-weight: ${fontWeight};
            font-family: "HelveticaRoman";
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

          .InstagramImage {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .InstagramImage input {
            display: none;
          }
          .InstagramImage span {
            background: ${background};
            width: 45px;
            height: 45px;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            margin-top: -20px;
          }
          .InstagramImage span img {
            border-radius: 100px;
            width: 40px;
            height: 40px;
            object-fit: cover;
          }
          .InstagramText {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: -10px 0;
            padding: 0.5rem 0.8rem;
          }
          .InstagramText p {
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

          .InstagramBottom {
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .InstagramBottom div {
            background: ${spanBackground};
            padding: 0.85rem;
            border-radius: 6px;
            width: 100%;
            margin: 0.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .InstagramBottom div span {
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
