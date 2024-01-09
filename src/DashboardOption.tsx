// DashboardOption.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

interface DashboardOptionProps {
  icon: IconDefinition;
  title: string;
  to: string;
}

const DashboardOption: React.FC<DashboardOptionProps> = ({
  icon,
  title,
  to,
}) => {
  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default DashboardOption;
