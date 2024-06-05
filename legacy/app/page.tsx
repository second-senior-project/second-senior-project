import Image from "next/image";
import Login from "./components/sign/Page";
import Signin from "./components/sign/Signin";

export default function Home() {
  return (
    <div><Login/>
    <Signin/>
    </div>
  );
}
