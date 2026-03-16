import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './WbDashboard.module.scss';
import type { IWbDashboardProps } from './IWbDashboardProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem } from '@fluentui/react';

import CalendarWidget from './CalendarWidget';
import EmployeeInsights from './EmployeeInsights';
import EmployeeLeaveFragment from './EmployeeLeaveFragment';
import '../assets/style.scss';

import ManagerOverviewFragment from './ManagerOverviewFragment';
import ManagerTasksFragment from './ManagerTasksFragment';

const WbDashboard: React.FC<IWbDashboardProps> = (props) => {

  const { userDisplayName } = props;

  const [data] = useState({
    total: 53,
    present: 44,
    leave: 9,
    late: 0
  });

  const [activeWidget, setActiveWidget] = useState<string>("");

  const presentPercent = Math.round((data.present / data.total) * 100);
  const leavePercent = Math.round((data.leave / data.total) * 100);
  const latePercent = Math.round((data.late / data.total) * 100);

  const circumference = 251;

  const calcOffset = (percent: number) => {
    return circumference - (percent / 100) * circumference;
  };

  const presentEmployees = [
    { id: "EMP001", name: "Ramesh", time: "09:02", task: "SPFx Dashboard Development" },
    { id: "EMP002", name: "Raja", time: "09:04", task: "SharePoint API Integration" },
    { id: "EMP003", name: "Abi", time: "09:05", task: "UI Component Design" }
  ];

  const allEmployees = [
    { id: "EMP001", name: "Raj", role: "Frontend Developer", email: "raj@kcdc.com" },
    { id: "EMP002", name: "Dharshini", role: "Trainer", email: "dharshini@kcdc.com" },
    { id: "EMP003", name: "Kaviya", role: "Backend Developer", email: "kaviya@kcdc.com" },
    { id: "EMP004", name: "Dev", role: "UI Designer", email: "dev@kcdc.com" }
  ];

  const leaveEmployees = [
    {
      name: "Merlin",
      reason: "Medical Leave",
      type: "Sick Leave",
      date: "12 Mar 2026",
      status: "Approved",
      assignedTo: "HR Manager"
    },
    {
      name: "Raja",
      reason: "Family Function",
      type: "Casual Leave",
      date: "13 Mar 2026",
      status: "Pending",
      assignedTo: "Team Lead"
    }
  ];

  useEffect(() => {

    const canvas = document.querySelector(
      "[data-automation-id='CanvasZone'] .CanvasZoneContainer"
    ) as HTMLElement;

    if (canvas) {
      canvas.style.maxWidth = "100%";
      canvas.style.width = "100%";
      canvas.style.setProperty("max-width", "100%", "important");
    }

  }, []);

  return (

    <section className={styles.wbDashboard}>

      <div>

        <div className={styles.header}>
          <h2>Hello, {escape(userDisplayName)} 👋</h2>
          <p>Hope you're having a productive day</p>
        </div>

        <Pivot>

          <PivotItem headerText="Employee Dashboard">

            <div className={styles.topLayout}>

              <div className={styles.cards}>

                <div
                  className={styles.card}
                  onClick={() =>
                    setActiveWidget(activeWidget === "employees" ? "" : "employees")
                  }
                >

                  <div className={styles.cardHeader}>
                    <h4>Total Employees</h4>
                    <span className={styles.iconBlue}>👥</span>
                  </div>

                  <h2>{data.total}</h2>

                  <div className={styles.weekChart}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={`${styles.bar} ${styles.active}`}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                  </div>

                  <div className={styles.days}>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                  </div>

                </div>

                <div
                  className={styles.card}
                  onClick={() =>
                    setActiveWidget(activeWidget === "present" ? "" : "present")
                  }
                >

                  <div className={styles.cardHeader}>
                    <h4>Employee's Present Today</h4>
                    <span className={styles.iconGreen}>👤</span>
                  </div>

                  <h2>{data.present}</h2>

                  <div className={styles.gaugeBox}>
                    <svg viewBox="0 0 200 120">
                      <path d="M20 100 A80 80 0 0 1 180 100" className={styles.bgArc}/>
                      <path
                        d="M20 100 A80 80 0 0 1 180 100"
                        className={styles.greenArc}
                        style={{
                          strokeDasharray: circumference,
                          strokeDashoffset: calcOffset(presentPercent)
                        }}
                      />
                    </svg>

                    <div
                      className={styles.needle}
                      style={{ transform: `rotate(${presentPercent * 1.8 - 90}deg)` }}
                    ></div>

                    <span className={styles.percent}>{presentPercent}%</span>
                  </div>

                </div>

                <div
                  className={styles.card}
                  onClick={() =>
                    setActiveWidget(activeWidget === "leave" ? "" : "leave")
                  }
                >

                  <div className={styles.cardHeader}>
                    <h4>Employee's on Leave</h4>
                    <span className={styles.iconRed}>⚠️</span>
                  </div>

                  <h2>{data.leave}</h2>

                  <div className={styles.gaugeBox}>
                    <svg viewBox="0 0 200 120">
                      <path d="M20 100 A80 80 0 0 1 180 100" className={styles.bgArc}/>
                      <path
                        d="M20 100 A80 80 0 0 1 180 100"
                        className={styles.redArc}
                        style={{
                          strokeDasharray: circumference,
                          strokeDashoffset: calcOffset(leavePercent)
                        }}
                      />
                    </svg>

                    <div
                      className={styles.needle}
                      style={{ transform: `rotate(${leavePercent * 1.8 - 90}deg)` }}
                    ></div>

                    <span className={styles.percent}>{leavePercent}%</span>
                  </div>

                </div>

                <div className={styles.card}>

                  <div className={styles.cardHeader}>
                    <h4>Employee's Late Today</h4>
                    <span className={styles.iconGray}>⏰</span>
                  </div>

                  <h2>{data.late}</h2>

                  <div className={styles.gaugeBox}>
                    <svg viewBox="0 0 200 120">
                      <path d="M20 100 A80 80 0 0 1 180 100" className={styles.bgArc}/>
                      <path
                        d="M20 100 A80 80 0 0 1 180 100"
                        className={styles.grayArc}
                        style={{
                          strokeDasharray: circumference,
                          strokeDashoffset: calcOffset(latePercent)
                        }}
                      />
                    </svg>

                    <div className={styles.needle}></div>
                    <span className={styles.percent}>{latePercent}%</span>
                  </div>

                </div>

              </div>

              {activeWidget === "employees" && (

                <div className={styles.detailCard}>

                  <h4>Employee Directory</h4>

                  <div className={styles.tableHeader}>
                    <span>ID</span>
                    <span>Name</span>
                    <span>Role</span>
                    <span>Email</span>
                  </div>

                  {allEmployees.map((emp, index) => (

                    <div key={index} className={styles.tableRow}>

                      <span>{emp.id}</span>
                      <span>{emp.name}</span>
                      <span>{emp.role}</span>
                      <span>{emp.email}</span>

                    </div>

                  ))}

                </div>

              )}

              {activeWidget === "present" && (

                <div className={styles.detailCard}>

                  <h4>Employees Present Today</h4>

                  <div className={styles.tableHeader}>
                    <span>ID</span>
                    <span>Name</span>
                    <span>In Time</span>
                    <span>Today's Task</span>
                  </div>
                  

                  {presentEmployees.map((emp, index) => (

                    <div key={index} className={styles.tableRow}>
                      <span>{emp.id}</span>
                      <span>{emp.name}</span>
                      <span>{emp.time}</span>
                      <span>{emp.task}</span>
                    </div>

                  ))}

                </div>

              )}

              {activeWidget === "leave" && (

                <div className={styles.detailCard}>

                  <h4>Employees on Leave</h4>

                  <div className={styles.tableHeader}>
                    <span>Name</span>
                    <span>Reason</span>
                    <span>Leave Type</span>
                    <span>Date Requested</span>
                    <span>Status</span>
                    <span>Assigned To</span>
                  </div>

                  {leaveEmployees.map((emp, index) => (

                    <div key={index} className={styles.tableRow}>
                      <span>{emp.name}</span>
                      <span>{emp.reason}</span>
                      <span>{emp.type}</span>
                      <span>{emp.date}</span>
                      <span>{emp.status}</span>
                      <span>{emp.assignedTo}</span>
                    </div>

                  ))}

                </div>

              )}

              <CalendarWidget />

            </div>

          </PivotItem>



          <PivotItem headerText="HR Dashboard">

            <EmployeeInsights />
            <EmployeeLeaveFragment />

          </PivotItem>

<PivotItem headerText='Manager Dashboard'>
            <ManagerOverviewFragment />
            <ManagerTasksFragment />
</PivotItem>
        </Pivot>

      </div>

    </section>

  );

};

export default WbDashboard;