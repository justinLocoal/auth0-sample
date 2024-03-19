import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ModuleTwo.module.css";

export function ModuleTwo({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "module-3")}
      editable="false"
      tag="figure"
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "link-block")}
        id={_utils.cx(
          _styles,
          "w-node-_6d2f26ef-5a43-d742-949a-75fe1ca7afdc-1ca7afdb"
        )}
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "module-header-2", "minimal")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "module-heading")}
            tag="h3"
          >
            {"Dashboard"}
          </_Builtin.Heading>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "module-main")} tag="div">
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245526_SquaresFour.svg"
          />
        </_Builtin.Block>
      </_Builtin.Link>
    </_Component>
  );
}
