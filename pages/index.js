import dynamic from "next/dynamic";
import { Linear_Gradient_Loading } from "../Portable/Constent/Loading";

//----------------------------------//
// Attention Component For user
//----------------------------------//
const MainComponent = dynamic(
  async () => await import("../Portable/MainComponent"),
  {
    loading: () => <Linear_Gradient_Loading boxHeight={"100vh"} />,
  }
);

export default function Home() {
  return <MainComponent />;
}
