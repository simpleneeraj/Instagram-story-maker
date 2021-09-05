const Attention = () => {
  return (
    <>
      <div className={"Attention"}>
        <div>
          <img src="/image/verified.svg" alt="verified" />
          <p>This App working on Mobile Phones Only</p>
        </div>
      </div>
      <style jsx>
        {`
          .Attention {
            display: grid;
            place-content: center;
            height: 100vh;
            max-height: 1200px;
          }
          .Attention div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }
          .Attention div img {
            height: 300px;
          }
          .Attention div p {
            font-size: 1.8rem;
            color: #222;
            font-family: "HelveticaLight";
            letter-spacing: 0.03rem;
            text-transform: capitalize;
          }
        `}
      </style>
    </>
  );
};

export default Attention;
