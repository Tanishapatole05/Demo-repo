// DashboardCalendar.tsx

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DashboardCalendar.css"; 
const DashboardCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | Date[] | null>(new Date());

  const handleDateChange = (value: Date | Date[] | null) => {
    setDate(value);
  };

  return (
    <div className="calendar-container">
      <h3>Calendar</h3>
      <Calendar
        // @ts-ignore
        onChange={(value) => handleDateChange(value)}
        value={date as Date}
      />
    </div>
  );
};

export default DashboardCalendar;
