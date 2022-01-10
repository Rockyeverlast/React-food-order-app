import { Fragment } from "react";

import MenuSummary from "./MenuSummary";
import AvailableMenu from "./AvailableMenu";

const Menu = () => {
  return (
    <Fragment>
      <MenuSummary />
      <AvailableMenu />
    </Fragment>
  );
};
export default Menu;
