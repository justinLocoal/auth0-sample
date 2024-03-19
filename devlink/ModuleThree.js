import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ModuleThree.module.css";

export function ModuleThree({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "module-3")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "module-header-2")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "module-heading")}
          tag="h3"
        >
          {"Notifications"}
        </_Builtin.Heading>
        <_Builtin.Link
          className={_utils.cx(_styles, "module-button-2")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"See All"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "module-main")} tag="div">
        <_Builtin.Block tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "email-element-2", "simple")}
            button={false}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "notification-top")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "notification-dot-2")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-title-2")}
                tag="div"
              >
                {"AudioHunt"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "email-time-2")}
                tag="div"
              >
                {"1:34pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "notification-subtitle-2")}
            >
              {"New music is out!"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "notification-description-2")}
            >
              {"The playlist made just for you, every Friday"}
            </_Builtin.Paragraph>
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "email-element-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "notification-top")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "notification-dot-2")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-title-2")}
                tag="div"
              >
                {"Domains R Us"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "email-time-2")}
                tag="div"
              >
                {"12:52pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "notification-subtitle-2")}
            >
              {"Your domain will expire soon"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "notification-description-2")}
            >
              {"Your domain “nicehats.com” is set to expire"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "email-element-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "notification-top")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "notification-dot-2")}
                tag="div"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "notificaiton-title-2")}
                tag="div"
              >
                {"Gooble Accounts"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "email-time-2")}
                tag="div"
              >
                {"9:39am"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "notification-subtitle-2")}
            >
              {"Security alert"}
            </_Builtin.Paragraph>
            <_Builtin.Paragraph
              className={_utils.cx(_styles, "notification-description-2")}
            >
              {"A new device from New York has signed in"}
            </_Builtin.Paragraph>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
