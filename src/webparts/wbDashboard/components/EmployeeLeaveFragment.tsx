import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./EmployeeLeaveFragment.module.scss";

const EmployeeLeaveFragment: React.FC = () => {

  const [allocation, setAllocation] = useState<any[]>([]);

  useEffect(() => {

    setAllocation([
  { name: "Sarah", value: 85 },
  { name: "Michael", value: 72 },
  { name: "Priya", value: 71 },
  { name: "David", value: 90 },
  { name: "Emma", value: 87 },
  { name: "Alex", value: 55 },
  { name: "Nina", value: 0 }
]);

  }, []);

  return (

    <div className={styles.container}>

      <div className={styles.topRow}>

        <div className={styles.card}>

          <div className={styles.cardTitle}>
            Employee Allocation %
          </div>

          <div className={styles.chartWrapper}>


            <div className={styles.yAxis}>
              <span>100</span>
              <span>75</span>
              <span>50</span>
              <span>25</span>
              <span>0</span>
            </div>


            <div className={styles.chartArea}>

              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>
              <div className={styles.gridLine}></div>

              <div className={styles.barContainer}>

                {allocation.map((emp,index)=>(
                  
                  <div key={index} className={styles.barItem}>

                    <div
                      className={styles.bar}
                      style={{height:`${emp.value * 2.2}px`}}
                    />

                    <span className={styles.barLabel}>
                      {emp.name}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

        <div className={styles.card}>

          <div className={styles.cardTitle}>
            Department Distribution
          </div>

          <div className={styles.donutWrapper}>

            <svg width="200" height="200">

              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="#1f948b"
                strokeWidth="20"
                fill="none"
                strokeDasharray="250 440"
              />

              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="#f39c12"
                strokeWidth="20"
                fill="none"
                strokeDasharray="70 440"
                strokeDashoffset="-250"
              />

              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="#2c3e50"
                strokeWidth="20"
                fill="none"
                strokeDasharray="120 440"
                strokeDashoffset="-320"
              />

            </svg>

          </div>

          <div className={styles.legend}>

            <span>
              <i style={{background:"#1f948b"}}></i>
              Engineering (4)
            </span>

            <span>
              <i style={{background:"#f39c12"}}></i>
              Design (1)
            </span>

            <span>
              <i style={{background:"#2c3e50"}}></i>
              PMO (2)
            </span>

          </div>

        </div>

      </div>

      <div className={styles.bottomRow}>


        <div className={styles.card}>

          <div className={styles.cardTitle}>
            Upcoming Birthdays
          </div>

          <div className={styles.birthdayItem}>

            <div className={styles.avatar}>
              PS
            </div>

            <div className={styles.empInfo}>

              <div className={styles.empName}>
                Priya Sharma
              </div>

              <div className={styles.empRole}>
                Design
              </div>

            </div>

            <div className={styles.date}>
              Mar 12
            </div>

          </div>

        </div>


        <div className={styles.card}>

          <div className={styles.cardTitle}>
            Projects Overview
          </div>

          <table className={styles.projectTable}>

            <thead>
              <tr>
                <th>PROJECT</th>
                <th>MANAGER</th>
                <th>STATUS</th>
                <th>TEAM</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Atlas Platform Redesign</td>
                <td>Michael Torres</td>
                <td><span className={styles.active}>Active</span></td>
                <td>5</td>
              </tr>

              <tr>
                <td>Data Pipeline v2</td>
                <td>James Wilson</td>
                <td><span className={styles.active}>Active</span></td>
                <td>3</td>
              </tr>

              <tr>
                <td>Mobile App Launch</td>
                <td>Michael Torres</td>
                <td><span className={styles.planned}>Planned</span></td>
                <td>4</td>
              </tr>

              <tr>
                <td>Security Audit 2025</td>
                <td>David Kim</td>
                <td><span className={styles.completed}>Completed</span></td>
                <td>2</td>
              </tr>

              <tr>
                <td>Client Portal</td>
                <td>Lisa Park</td>
                <td><span className={styles.hold}>On Hold</span></td>
                <td>4</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

};

export default EmployeeLeaveFragment;