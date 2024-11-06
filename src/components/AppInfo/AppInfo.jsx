import React from "react";
import "./AppInfo.css"
function AppInfo({increased, employees}){
    return(
        <div className="appInfo">
            <h2 className="companyName">Учет сотрудников в компании:</h2>
            <h2>Общее колличество сотрудников: {employees}</h2>
        </div>
    )
}
export default AppInfo;