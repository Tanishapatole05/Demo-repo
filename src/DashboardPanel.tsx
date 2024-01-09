// DashboardPanel.tsx

import React from "react";
import {
  faUser,
  faBook,
  faBuilding,
  faBell,
  faQuestionCircle,
  faCog,
  faBars,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";
import DashboardOption from "./DashboardOption";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardPanel: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "0 auto",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>
        <FontAwesomeIcon icon={faBars} style={{ marginRight: "10px" }} />
        Dashboard
      </h2>

      {/* Dashboard Options with Icons and Links */}
      <DashboardOption
        icon={faUser}
        title="Student Details"
        to="/student-details"
      />
      <DashboardOption icon={faBook} title="Courses" to="/courses" />
      <DashboardOption
        icon={faBuilding}
        title="Course Provider"
        to="/course-provider"
      />
      <DashboardOption
        icon={faBell}
        title="Notifications"
        to="/notifications"
      />
      <DashboardOption icon={faQuestionCircle} title="Help" to="/help" />
      <DashboardOption icon={faCog} title="Settings" to="/settings" />

      {/* Image */}
      <img
        src="pin6.jpg"
        alt="Description of the image"
        style={{ width: "100%", marginTop: "20px" }}
      />
    </div>
  );
};

export default DashboardPanel;
