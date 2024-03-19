import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SimpleFooter.module.css";

export function SimpleFooter({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "dashboard-footer")} tag="div">
      <_Builtin.Paragraph
        className={_utils.cx(_styles, "paragraph-small", "light")}
      >
        {"© IMPCT All Rights Reserved ・Powered by "}
        <_Builtin.Link
          className={_utils.cx(_styles, "simple-link", "light")}
          button={false}
          block=""
          options={{
            href: "#",
            target: "_blank",
          }}
        >
          {"LOCOAL"}
        </_Builtin.Link>{" "}
      </_Builtin.Paragraph>
    </_Component>
  );
}
