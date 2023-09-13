// import React, { useState } from "react";
// import "./style.css";

// const CoinInfo = ({ heading, desc }) => {
//   const shortDesc =
//     desc.slice(0, 350) +
//     "<p style='color:var(--grey)'>  Read More...</p>";
//   const longDesc = desc + "<p style='color:var(--grey)'>  Read less</p>";
//   const [flag, setFlag] = useState(false);

//   return (
//     <div className="grey-wrapper" style={{ padding: "0.5rem 1rem" }}>
//       <h3 className="coin-info-heading">{heading}</h3>
//       {desc.length > 350 ? (
//         <p
//           onClick={() => setFlag(!flag)}
//           className="coin-info-desc"
//           dangerouslySetInnerHTML={{
//             __html: !flag ? shortDesc : longDesc,
//           }}></p>
//       ) : (
//         <p dangerouslySetInnerHTML={{ __html: desc }} />
//       )}
//     </div>
//   );
// };

// export default CoinInfo;





import React, { useState } from "react";
import "./style.css";

const CoinInfo = ({ heading, desc }) => {
  const shortDesc =
    desc && desc.length > 350
      ? desc.slice(0, 350) + "<p style='color:var(--grey)'>  Read More...</p>"
      : desc;
  const longDesc = desc + "<p style='color:var(--grey)'>  Read less</p>";
  const [flag, setFlag] = useState(false);

  return (
    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
      <h3 className="coin-info-heading">{heading}</h3>
      {desc && desc.length > 350 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{
            __html: !flag ? shortDesc : longDesc,
          }}></p>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default CoinInfo;
