import React from "react";
import { 
  DashboardNav, 
  SidebarSpacer,  
  DashboardSidebar, 
  SimpleFooter,
} from '../devlink';

export default function Home() {
  return (
    <div id="1">
      <DashboardSidebar />
      <div id="2" style={{ display: 'flex', flexDirection: 'row' }}>
        <SidebarSpacer />
        <div id="3" style={{ flex: 1 }}>
          <DashboardNav />
          <div style={{ }}>
          <iframe 
          title="IMPCT Dashboard" 
          width="100%" 
          height="800px" 
          src="https://app.powerbi.com/reportEmbed?reportId=e31d1424-8270-4c87-ac04-439646123b1a&autoAuth=true&ctid=977a7731-93c8-4490-afd0-0f2f2dcb76ac&pageName=Key%20Metrics" 
          frameBorder={0} 
          allowFullScreen={true}
          >
          </iframe>
          </div>
          <SimpleFooter />
        </div>
      </div>   
    </div>
  );
}