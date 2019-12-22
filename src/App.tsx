import React from "react";
import IconLinks from "./components/IconLinks";
import Logo from "./components/Logo";
import links from "./links";

export const App = () => (
  <>
    <Logo color="var(--logo)" size={18} />
    <IconLinks links={links} />
  </>
);

export default App;
