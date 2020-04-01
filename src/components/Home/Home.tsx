import React, { FC } from "react";
import links from "../../links";
import IconLinks from "../IconLinks";
import Logo from "../Logo";


export const Home: FC<{}> = () => (
    <>
        <Logo color="var(--logo)" size={18} />
        <IconLinks links={links} />
    </>
);

export default Home;
