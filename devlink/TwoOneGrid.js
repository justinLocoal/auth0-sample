import React from "react";
import * as _Builtin from "./_Builtin";
import { ModuleThree } from "./ModuleThree";
import * as _utils from "./utils";
import _styles from "./TwoOneGrid.module.css";

export function TwoOneGrid({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "_2-1-grid")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <ModuleThree />
      <_Builtin.Block className={_utils.cx(_styles, "module-3")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "module-header-2")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "module-heading")}
            tag="h3"
          >
            {"Updates"}
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
            <_Builtin.Block tag="div">
              {"No new "}
              <br />
              {"updates"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
