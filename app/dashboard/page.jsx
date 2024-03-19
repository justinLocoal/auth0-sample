// app/dashboard 

import React from "react";
import { 
  DashboardNav, 
  FourGrid, 
  SidebarSpacer,  
  TwoOneGrid, 
  DashboardSidebar, 
  SimpleFooter,
  DashboardPageHeader,
  OneGrid
} from '../../devlink';

export default function Home() {
  return (
    <div id="1">
      <DashboardSidebar />
      <div id="1.1" style={{ display: 'flex', flexDirection: 'row' }}>
        <SidebarSpacer />
        <div id="1.1.1" style={{ flex: 1 }}>
          <DashboardNav />
          <div id="1.1.1.1" style={{ padding: 40 }}>
            <DashboardPageHeader />
            <FourGrid />
            <TwoOneGrid />
            <OneGrid />
          </div>
          <SimpleFooter />
        </div>
      </div>   
    </div>
  );
}