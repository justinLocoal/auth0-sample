import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { DashboardSidebar } from "./DashboardSidebar";
import { SidebarSpacer } from "./SidebarSpacer";
import { DashboardNav } from "./DashboardNav";
import { DashboardPageHeader } from "./DashboardPageHeader";
import { FourGrid } from "./FourGrid";
import { TwoOneGrid } from "./TwoOneGrid";
import { OneGrid } from "./OneGrid";
import { SimpleFooter } from "./SimpleFooter";
import * as _utils from "./utils";
import _styles from "./Dashboard.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-450":{"id":"e-450","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-451"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"719d2933-cd9b-be70-bea0-6253dbbf8e15","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"719d2933-cd9b-be70-bea0-6253dbbf8e15","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709729692079},"e-452":{"id":"e-452","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-453"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec39","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"09e608d3-5d29-ea1c-8250-9e1401f1ec39","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709731226528},"e-454":{"id":"e-454","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-23","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65e320c350e40175ef2454f4|64633bae-640c-7bf9-aaa0-38b50225967f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709744660876},"e-456":{"id":"e-456","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-25","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"appliesTo":"ELEMENT","styleBlockIds":[],"id":"541c1a9f-6843-a807-dcec-892b7d4a9a71"},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1709756446831}},"actionLists":{"a-23":{"id":"a-23","title":"Home Open","actionItemGroups":[{"actionItems":[{"id":"a-23-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-23-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-23-n-12","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}},{"id":"a-23-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":1,"unit":""}},{"id":"a-23-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":0,"unit":""}},{"id":"a-23-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-23-n-8","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-23-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-23-n-14","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}}]},{"actionItems":[{"id":"a-23-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":1,"unit":""}},{"id":"a-23-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":0,"unit":""}},{"id":"a-23-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1709729749869},"a-24":{"id":"a-24","title":"Production Open","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-24-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-24-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}}]},{"actionItems":[{"id":"a-24-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":0,"unit":""}},{"id":"a-24-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":1,"unit":""}},{"id":"a-24-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1709731157577},"a-25":{"id":"a-25","title":"System Open","actionItemGroups":[{"actionItems":[{"id":"a-25-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]}}},{"id":"a-25-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"none","target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]}}},{"id":"a-25-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"value":"block","target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]}}}]},{"actionItems":[{"id":"a-25-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".home-screen","selectorGuids":["3d60ec67-c22b-01dd-46d0-7278dd7e416e"]},"value":0,"unit":""}},{"id":"a-25-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".production-screen","selectorGuids":["2ef31eb9-38ed-48c4-d2fd-826fb7d5c317"]},"value":0,"unit":""}},{"id":"a-25-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".system-screen","selectorGuids":["9e37d31a-3091-6f7f-2673-28a7a39ff7dd"]},"value":1,"unit":""}}]}],"createdOn":1709756465332,"useFirstGroupAsInitialState":false}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Dashboard({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "dashboard")} tag="div">
      <DashboardSidebar />
      <_Builtin.Block
        className={_utils.cx(_styles, "dashboard-main")}
        tag="div"
      >
        <SidebarSpacer />
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-content")}
          tag="div"
        >
          <DashboardNav />
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-main-content-2")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "home-screen")}
              tag="div"
              id="Home-Screen"
            >
              <DashboardPageHeader />
              <FourGrid />
              <TwoOneGrid />
              <OneGrid />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "production-screen")}
              tag="div"
              id="production-screen"
            >
              <_Builtin.HtmlEmbed value="%3Ciframe%20title%3D%22IMPCT%20Dashboard%22%20width%3D%22100%25%22%20height%3D%22800px%22%20src%3D%22https%3A%2F%2Fapp.powerbi.com%2FreportEmbed%3FreportId%3De31d1424-8270-4c87-ac04-439646123b1a%26autoAuth%3Dtrue%26ctid%3D977a7731-93c8-4490-afd0-0f2f2dcb76ac%26pageName%3DKey%2520Metrics%22%20frameborder%3D%220%22%20allowFullScreen%3D%22true%22%3E%3C%2Fiframe%3E" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "system-screen")}
              tag="div"
              id="system-screen"
            >
              <_Builtin.HtmlEmbed value="%3Ciframe%20title%3D%22IMPCT%20Dashboard%22%20width%3D%22100%25%22%20height%3D%22800px%22%20src%3D%22https%3A%2F%2Fapp.powerbi.com%2FreportEmbed%3FreportId%3De31d1424-8270-4c87-ac04-439646123b1a%26autoAuth%3Dtrue%26ctid%3D977a7731-93c8-4490-afd0-0f2f2dcb76ac%26pageName%3DKey%2520Metrics%22%20frameborder%3D%220%22%20allowFullScreen%3D%22true%22%3E%3C%2Fiframe%3E" />
            </_Builtin.Block>
          </_Builtin.Block>
          <SimpleFooter />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
