import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DashboardPageHeader.module.css";

export function DashboardPageHeader({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "dashboard-page-header")}
      tag="div"
    >
      <_Builtin.Heading tag="h2">{"Home"}</_Builtin.Heading>
    </_Component>
  );
}
