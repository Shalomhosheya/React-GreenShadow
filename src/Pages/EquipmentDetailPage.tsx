import React from "react"
import AccountDetails from "../Component/AccountDetail"
import Sidebar from "../Component/Sidebar"
function EquipmentDetailPage(){
  return(
    <body>
        <AccountDetails/>
        <div className="dashboard-container">
            <Sidebar/>
        </div>
    </body>
  )

}
export default EquipmentDetailPage 