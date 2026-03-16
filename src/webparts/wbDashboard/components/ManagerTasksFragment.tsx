import * as React from "react";
import styles from "./ManagerTasksFragment.module.scss";
import { Icon } from "@fluentui/react";

const ManagerTasksFragment: React.FC = () => {

  const tasks = [
    {
      task:"Implement authentication module",
      assignee:"Sarah Chen",
      priority:"Critical",
      status:"In Progress",
      due:"2025-03-05",
      progress:80
    },
    {
      task:"Set up CI/CD pipeline",
      assignee:"David Kim",
      priority:"High",
      status:"Completed",
      due:"2025-02-20",
      progress:100
    },
    {
      task:"Performance testing",
      assignee:"Alex Rivera",
      priority:"Medium",
      status:"Not Started",
      due:"2025-03-20",
      progress:0
    },
    {
      task:"Database migration script",
      assignee:"Sarah Chen",
      priority:"High",
      status:"Blocked",
      due:"2025-02-25",
      progress:30
    },
    {
      task:"Security vulnerability scan",
      assignee:"David Kim",
      priority:"Critical",
      status:"Completed",
      due:"2025-02-10",
      progress:100
    },
    {
      task:"Build notification system",
      assignee:"Sarah Chen",
      priority:"Medium",
      status:"Not Started",
      due:"2025-03-25",
      progress:0
    }
  ];

  const getPriorityClass = (priority:string)=>{
    switch(priority){
      case "Critical": return styles.critical;
      case "High": return styles.high;
      case "Medium": return styles.medium;
      default: return "";
    }
  };

  const getStatusClass = (status:string)=>{
    switch(status){
      case "In Progress": return styles.inProgress;
      case "Completed": return styles.completed;
      case "Blocked": return styles.blocked;
      case "Not Started": return styles.notStarted;
      default: return "";
    }
  };

  const getDueClass = (due:string)=>{
    const today = new Date();
    const dueDate = new Date(due);
    return dueDate < today ? styles.overdue : "";
  };

  return (

    <div className={styles.managerTasks}>

  

      <div className={styles.infoRow}>

        <div className={styles.card}>
          <h4>
            <Icon iconName="Cake"/>
            Team Birthdays
          </h4>
          <p className={styles.noBirth}>No upcoming birthdays</p>
        </div>

        <div className={styles.card}>
          <h4>
            <Icon iconName="Vacation"/>
            Team On Leave Today
          </h4>

          <div className={styles.leaveRow}>

            <div className={styles.leaveLeft}>

              <div className={styles.avatar}>SC</div>

              <div>
                <strong>Sarah Chen</strong>
                <p>2026-02-18</p>
              </div>

            </div>

          </div>

        </div>

      </div>


      <div className={styles.tableCard}>

        <h4>Team Tasks</h4>

        <div className={styles.tableHeader}>
          <span>TASK</span>
          <span>ASSIGNEE</span>
          <span>PRIORITY</span>
          <span>STATUS</span>
          <span>DUE</span>
          <span>PROGRESS</span>
        </div>

        {tasks.map((t,i)=>(

          <div key={i} className={styles.row}>

            <span>{t.task}</span>

            <span>{t.assignee}</span>

            <span className={`${styles.pill} ${getPriorityClass(t.priority)}`}>
              {t.priority}
            </span>

            <span className={`${styles.pill} ${getStatusClass(t.status)}`}>
              {t.status}
            </span>

            <span className={getDueClass(t.due)}>
              {t.due}
            </span>

            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{width:`${t.progress}%`}}
              ></div>
            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default ManagerTasksFragment;