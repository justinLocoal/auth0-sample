import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./DashboardSidebar.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main"],"target":{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1612979392046},"e-114":{"id":"e-114","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main"],"target":{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1612979392046},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613005769577},"e-166":{"id":"e-166","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613005769577},"e-452":{"id":"e-452","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-453"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709731226528},"e-454":{"id":"e-454","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef2454f4|64633bae-640c-7bf9-aaa0-38b50225967f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709744660876},"e-456":{"id":"e-456","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"541c1a9f-6843-a807-dcec-892b7d4a9a71"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709756446831}},"actionLists":{"a-5":{"id":"a-5","title":"Smaller Sidebar","actionItemGroups":[{"actionItems":[{"id":"a-5-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-link-text","selectorGuids":["94532733-0a6d-b7ce-3e6b-c81fc1a6d5f6"]},"value":"none"}},{"id":"a-5-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dashboard-logo","selectorGuids":["d6f4b8cb-0fe0-15dc-56ee-85b94477aee8"]},"value":"none"}},{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":"PARENT","selector":".dashboard-sidebar","selectorGuids":["dacc3b16-1736-5870-b012-7f6c752bed92"]},"widthValue":75,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-5-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-spacer","selectorGuids":["cbab18d0-79e5-06cb-ac1e-33a6b0179def"]},"widthValue":75,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":true,"id":"65e320c350e40175ef245555|Div Block 7"},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sidebar-nav","selectorGuids":["8bc7d0a3-820f-6851-221d-e6cb26d5d380"]},"widthValue":75,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1612914206057},"a-6":{"id":"a-6","title":"Enlarge Sidebar","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-link-text","selectorGuids":["94532733-0a6d-b7ce-3e6b-c81fc1a6d5f6"]},"value":"block"}},{"id":"a-6-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dashboard-logo","selectorGuids":["d6f4b8cb-0fe0-15dc-56ee-85b94477aee8"]},"value":"block"}},{"id":"a-6-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":"PARENT","selector":".dashboard-sidebar","selectorGuids":["dacc3b16-1736-5870-b012-7f6c752bed92"]},"widthValue":220,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-6-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-spacer","selectorGuids":["cbab18d0-79e5-06cb-ac1e-33a6b0179def"]},"widthValue":220,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-6-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":true,"id":"65e320c350e40175ef245555|Div Block 7"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-6-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sidebar-nav","selectorGuids":["8bc7d0a3-820f-6851-221d-e6cb26d5d380"]},"widthValue":220,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1612914206057},"a-24":{"id":"a-24","title":"Production Open","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-24-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-24-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}}]},{"actionItems":[{"id":"a-24-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":0,"unit":""}},{"id":"a-24-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":1,"unit":""}},{"id":"a-24-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709731157577},"a-23":{"id":"a-23","title":"Home Open","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-23-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-23-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":1,"unit":""}},{"id":"a-23-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":0,"unit":""}},{"id":"a-23-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-23-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-23-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}}]},{"actionItems":[{"id":"a-23-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":1,"unit":""}},{"id":"a-23-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":0,"unit":""}},{"id":"a-23-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709729749869},"a-25":{"id":"a-25","title":"System Open","actionItemGroups":[{"actionItems":[{"id":"a-25-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-25-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-25-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}}]},{"actionItems":[{"id":"a-25-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":0,"unit":""}},{"id":"a-25-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":0,"unit":""}},{"id":"a-25-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":1,"unit":""}}]}],"createdOn":1709756465332,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function DashboardSidebar({
  as: _Component = _Builtin.NavbarWrapper,
  sidebarLinkOneHref = {},
  sidebarLinkTwoHref = {},
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "sidebar-nav")}
      tag="div"
      data-collapse="medium"
      data-animation="over-left"
      data-duration="400"
      config={{
        animation: "over-left",
        easing: "ease",
        easing2: "ease",
        duration: 400,
        docHeight: false,
        collapse: "medium",
        noScroll: false,
      }}
    >
      <_Builtin.NavbarMenu
        className={_utils.cx(_styles, "dashboard-sidebar")}
        tag="nav"
        role="navigation"
      >
        <_Builtin.Block tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-logo-section")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "dashboard-logo")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "sidebar-logo")}
                vis={{
                  main: true,
                  medium: true,
                  small: true,
                  tiny: true,
                }}
                width="125"
                height="auto"
                loading="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245529_dark%20locoal%20logo.svg"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.Block
              className={_utils.cx(_styles, "sidebar-collapse")}
              data-w-id="09e608d3-5d29-ea1c-8250-9e1401f1ec35"
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245500_Collapse%20Icon.svg"
              />
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-menu")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "sidebar-menu-section",
                "bottom-divider"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "sidebar-link")}
                data-w-id="64633bae-640c-7bf9-aaa0-38b50225967f"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sidebar-icon")}
                  loading="lazy"
                  width="27"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef2454ff_House.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sidebar-link-text")}
                  tag="div"
                >
                  {"Home"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "sidebar-link")}
                data-w-id="09e608d3-5d29-ea1c-8250-9e1401f1ec39"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
                {...sidebarLinkTwoHref}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sidebar-icon")}
                  loading="lazy"
                  width="27"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245526_SquaresFour.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sidebar-link-text")}
                  tag="div"
                >
                  {"Dashboard"}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "sidebar-link")}
                data-w-id="541c1a9f-6843-a807-dcec-892b7d4a9a71"
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sidebar-icon")}
                  loading="lazy"
                  width="27"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245507_Boards.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sidebar-link-text")}
                  tag="div"
                >
                  {"Ops Metrics"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "sidebar-menu-section",
                "bottom-divider"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "sidebar-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                  preload: "none",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sidebar-icon")}
                  loading="lazy"
                  width="27"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef24550f_Updates%20Icon.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sidebar-link-text")}
                  tag="div"
                >
                  {"LCA "}
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "sidebar-link")}
                button={false}
                block="inline"
                options={{
                  href: "#",
                  preload: "prefetch",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "sidebar-icon")}
                  loading="lazy"
                  width="27"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245501_Chats.svg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "sidebar-link-text")}
                  tag="div"
                >
                  {"Support"}
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "sidebar-footer")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "sidebar-link")}
            button={false}
            block="inline"
            options={{
              href: "#",
              preload: "none",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "sidebar-icon")}
              loading="lazy"
              width="27"
              height="auto"
              alt=""
              src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef24550d_Question.svg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "sidebar-link-text")}
              tag="div"
            >
              {"Help & Feedback"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.NavbarMenu>
      <_Builtin.NavbarButton
        className={_utils.cx(_styles, "sidebar-button")}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="22"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245513_Menu.svg"
        />
      </_Builtin.NavbarButton>
    </_Component>
  );
}
