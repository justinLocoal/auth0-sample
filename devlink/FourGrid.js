import React from "react";
import * as _Builtin from "./_Builtin";
import { ModuleTwo } from "./ModuleTwo";
import * as _utils from "./utils";
import _styles from "./FourGrid.module.css";

export function FourGrid({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "_4-grid")}
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <ModuleTwo />
      <_Builtin.Block className={_utils.cx(_styles, "module-3")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "link-block-2")}
          id={_utils.cx(
            _styles,
            "w-node-_4301840f-7845-c5bf-26a0-bbaf67069643-67069640"
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
              {"Ops Metrics"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "module-main")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245507_Boards.svg"
            />
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "module-3")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "link-block-3")}
          id={_utils.cx(
            _styles,
            "w-node-_4301840f-7845-c5bf-26a0-bbaf6706964a-67069640"
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
              {"LCA"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "module-main")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef24550f_Updates%20Icon.svg"
            />
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "module-3")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "link-block-4")}
          id={_utils.cx(
            _styles,
            "w-node-_4301840f-7845-c5bf-26a0-bbaf67069651-67069640"
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
              {"Support"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "module-main")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245501_Chats.svg"
            />
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
