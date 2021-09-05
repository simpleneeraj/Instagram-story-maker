//----------------------------------//
// Generate Random String
//----------------------------------//
export const Random = () => {
  const string = require("crypto").randomBytes(8).toString("hex");
  return string;
};
