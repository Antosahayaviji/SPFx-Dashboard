import * as React from "react";
import styles from "./ManagerOverviewFragment.module.scss";
import { Icon } from "@fluentui/react";

const ManagerOverviewFragment: React.FC = () => {

  const stats = [
    { title: "Team Members", value: 4, icon: "People", color: styles.blue },
    { title: "Pending Tasks", value: 5, icon: "TaskManager", color: styles.orange },
    { title: "Overdue Tasks", value: 5, icon: "Warning", color: styles.red },
    { title: "TS Approvals", value: 2, icon: "Clock", color: styles.blue },
    { title: "Leave Requests", value: 1, icon: "CheckMark", color: styles.green },
    { title: "Attendance Approvals", value: 2, icon: "Contact", color: styles.purple }
  ];

  const allocation = [
    { name: "Sarah", percent: 95 },
    { name: "Michael", percent: 70 },
    { name: "David", percent: 90 },
    { name: "Alex", percent: 65 }
  ];

  const team = [
    { name: "Sarah Chen", role: "Senior Developer", percent: "100%", tasks: "0 tasks", initials:"SC"},
    { name: "Michael Torres", role: "Project Manager", percent: "80%", tasks: "0 tasks", initials:"MT"},
    { name: "David Kim", role: "DevOps Engineer", percent: "110%", tasks: "0 tasks", initials:"DK"}
  ];

  return (

    <div className={styles.managerContainer}>


      <div className={styles.statsRow}>

        {stats.map((s, i) => (

          <div key={i} className={styles.card}>

            <div className={styles.cardHeader}>
              <span>{s.title}</span>
              <Icon iconName={s.icon} className={s.color}/>
            </div>

            <h2>{s.value}</h2>

          </div>

        ))}

      </div>


      <div className={styles.middleGrid}>



        <div className={styles.chartCard}>

          <h4>Team Allocation %</h4>

        <div className={styles.chartArea}>

  <div className={styles.yAxis}>

    <span>100</span>
    <span>80</span>
    <span>60</span>
    <span>40</span>
    <span>20</span>
    <span>0</span>

  </div>



  <div className={styles.chartWrapper}>

    {allocation.map((item,i)=>(

      <div key={i} className={styles.chartItem}>

        <div className={styles.barContainer}>

          <div
            className={styles.chartBar}
            style={{height:`${item.percent}%`}}
          ></div>

        </div>

        <span>{item.name}</span>

      </div>

    ))}

  </div>

</div>

        </div>



        <div className={styles.teamCard}>

          <h4>
            <Icon iconName="People"/>
            My Team
          </h4>

          {team.map((t,i)=>(

            <div key={i} className={styles.teamRow}>

              <div className={styles.teamLeft}>

                <div className={styles.avatar}>
                  {t.initials}
                </div>

                <div>

                  <strong>{t.name}</strong>
                  <p>{t.role}</p>

                </div>

              </div>


              <div className={styles.teamRight}>

                <span className={styles.percent}>{t.percent} alloc</span>
                <span className={styles.tasks}>{t.tasks}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default ManagerOverviewFragment;