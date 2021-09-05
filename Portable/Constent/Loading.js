const Three_Circle_Loading = ({ size, color, boxHeight, boxWidth, flex }) => {
  return (
    <>
      <div className={`Three_Circle_Loading`}>
        <svg
          size={size || `100`}
          width={size || `100`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          x="0"
          y="0"
        >
          <circle fill={color || `#aaa`} stroke="none" cx="30%" cy="50%" r="6">
            <animate
              attributeName="opacity"
              dur="1.2s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill={color || `#aaa`} stroke="none" cx="50%" cy="50%" r="6">
            <animate
              attributeName="opacity"
              dur="1.2s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill={color || `#aaa`} stroke="none" cx="70%" cy="50%" r="6">
            <animate
              attributeName="opacity"
              dur="1.2s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
      </div>
      <style jsx>
        {`
          .Three_Circle_Loading {
            display: grid;
            place-content: center;
            size: ${boxHeight};
            width: ${boxWidth};
            flex: ${flex || "none"};
          }
        `}
      </style>
    </>
  );
};

const One_Circle_Loading = ({
  size,
  color,
  radius,
  boxHeight,
  boxWidth,
  flex,
}) => {
  return (
    <>
      <div className={`One_Circle_Loading`}>
        <svg
          size={size || `100`}
          width={size || `100`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 0 0"
          x="0"
          y="0"
        >
          <circle
            stroke={color || `#666`}
            r={radius || "20"}
            strokeWidth={"2"}
            fill="none"
            cx="50%"
            cy="50%"
          >
            <animate
              attributeName="opacity"
              dur="0.8s"
              values="0.8;1;0.8"
              repeatCount="indefinite"
              begin="0.5"
            />
          </circle>
        </svg>
      </div>
      <style jsx>
        {`
          .One_Circle_Loading {
            display: grid;
            place-content: center;
            size: ${boxHeight};
            width: ${boxWidth};
            flex: ${flex || "none"};
          }
        `}
      </style>
    </>
  );
};

const Linear_Gradient_Loading = ({
  size,
  color1,
  color2,
  radius,
  flex,
  strokeWidth,
  boxHeight,
  boxWidth,
}) => {
  return (
    <>
      <div className={`Linear_Gradient_Loading`}>
        <svg
          size={size || `150`}
          width={size || `150`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          x="0"
          y="0"
        >
          <linearGradient id="color" x="0" y="0">
            <stop offset="0%" stopColor={color1 || "#a445b2"}></stop>
            <stop offset="100%" stopColor={color2 || "#d41872"}></stop>
          </linearGradient>
          <circle
            stroke={"url(#color)"}
            r={radius || "20"}
            strokeWidth={strokeWidth || "2"}
            fill="none"
            cx="50%"
            cy="50%"
          >
            <animate
              attributeName="opacity"
              dur="1s"
              values="0.4;1;0.4"
              repeatCount="indefinite"
              begin="0"
            />
          </circle>
        </svg>
      </div>
      <style jsx>
        {`
          .Linear_Gradient_Loading {
            display: grid;
            place-content: center;
            height: ${boxHeight};
            width: ${boxWidth};
            flex: ${flex || "none"};
            background: black;
          }
        `}
      </style>
    </>
  );
};

export { Three_Circle_Loading, One_Circle_Loading, Linear_Gradient_Loading };
