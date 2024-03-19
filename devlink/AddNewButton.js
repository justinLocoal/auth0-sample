import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AddNewButton.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-113":{"id":"e-113","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-114"}},"mediaQueries":["main"],"target":{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1612979392046},"e-114":{"id":"e-114","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-113"}},"mediaQueries":["main"],"target":{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec35","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1612979392046},"e-165":{"id":"e-165","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-5","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-166"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613005769577},"e-166":{"id":"e-166","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-6","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-165"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65e320c350e40175ef245570|9c0041da-08f1-6f98-cd1b-f85affa39f76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1613005769577}},"actionLists":{"a-5":{"id":"a-5","title":"Smaller Sidebar","actionItemGroups":[{"actionItems":[{"id":"a-5-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-link-text","selectorGuids":["94532733-0a6d-b7ce-3e6b-c81fc1a6d5f6"]},"value":"none"}},{"id":"a-5-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dashboard-logo","selectorGuids":["d6f4b8cb-0fe0-15dc-56ee-85b94477aee8"]},"value":"none"}},{"id":"a-5-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":"PARENT","selector":".dashboard-sidebar","selectorGuids":["dacc3b16-1736-5870-b012-7f6c752bed92"]},"widthValue":75,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-5-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-spacer","selectorGuids":["cbab18d0-79e5-06cb-ac1e-33a6b0179def"]},"widthValue":75,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-5-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":true,"id":"65e320c350e40175ef245555|Div Block 7"},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-5-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sidebar-nav","selectorGuids":["8bc7d0a3-820f-6851-221d-e6cb26d5d380"]},"widthValue":75,"widthUnit":"px","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1612914206057},"a-6":{"id":"a-6","title":"Enlarge Sidebar","actionItemGroups":[{"actionItems":[{"id":"a-6-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-link-text","selectorGuids":["94532733-0a6d-b7ce-3e6b-c81fc1a6d5f6"]},"value":"block"}},{"id":"a-6-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".dashboard-logo","selectorGuids":["d6f4b8cb-0fe0-15dc-56ee-85b94477aee8"]},"value":"block"}},{"id":"a-6-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":"PARENT","selector":".dashboard-sidebar","selectorGuids":["dacc3b16-1736-5870-b012-7f6c752bed92"]},"widthValue":220,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-6-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".sidebar-spacer","selectorGuids":["cbab18d0-79e5-06cb-ac1e-33a6b0179def"]},"widthValue":220,"widthUnit":"px","heightUnit":"PX","locked":false}},{"id":"a-6-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"easeInOut","duration":0,"target":{"useEventTarget":true,"id":"65e320c350e40175ef245555|Div Block 7"},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}},{"id":"a-6-n-6","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sidebar-nav","selectorGuids":["8bc7d0a3-820f-6851-221d-e6cb26d5d380"]},"widthValue":220,"widthUnit":"px","heightUnit":"px","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1612914206057}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AddNewButton({ as: _Component = _Builtin.DropdownWrapper }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "new-button")}
      tag="div"
      delay="0"
      hover={false}
    >
      <_Builtin.DropdownToggle
        className={_utils.cx(_styles, "new-button-toggle")}
        tag="div"
      >
        <_Builtin.Block tag="div">{"+"}</_Builtin.Block>
      </_Builtin.DropdownToggle>
      <_Builtin.DropdownList
        className={_utils.cx(_styles, "add-menu")}
        tag="nav"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "add-link")}
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
            src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef245511_Note.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-link-text")}
            tag="div"
          >
            {"New Task"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "add-link")}
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
            src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef2454fd_EnvelopeOpen.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-link-text")}
            tag="div"
          >
            {"New Email"}
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "add-link")}
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
            src="https://uploads-ssl.webflow.com/65e320c350e40175ef2454f5/65e320c350e40175ef2454fc_CalendarBlank.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "sidebar-link-text")}
            tag="div"
          >
            {"New Event"}
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.DropdownList>
    </_Component>
  );
}
