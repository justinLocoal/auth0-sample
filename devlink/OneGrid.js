import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./OneGrid.module.css";

export function OneGrid({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "_1-grid")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "module-header-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "module-heading")}
          tag="h3"
        >
          {"News"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "module-main")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "empty-module-insert-2")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "empty-icon")}
            loading="lazy"
            width="27"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef24550b_Check.svg"
          />
          <_Builtin.Block tag="div">{"No news"}</_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
