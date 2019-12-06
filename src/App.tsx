import React from "react";
import IconLinks from "./components/IconLinks";
import Logo from "./components/Logo";
import links from "./links";

export const App = () => {
  /*const [state, setState] = useState(0);

  const calculateXY = ({ clientX: number, clientY: number }) => {
  }

  const reset = () => {
  }
  
  onMouseMove={calculateXY} onMouseLeave={reset}
  */

  return (
    <>
      <Logo color="var(--logo)" size={18} />
      <IconLinks links={links} />
    </>
  );
}

export default App;
