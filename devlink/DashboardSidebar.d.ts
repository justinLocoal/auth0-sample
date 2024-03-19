import * as React from "react";
import * as Types from "./types";

declare function DashboardSidebar(props: {
  as?: React.ElementType;
  sidebarLinkOneHref?: Types.Devlink.RuntimeProps;
  sidebarLinkTwoHref?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
