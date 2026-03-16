import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./EmployeeInsights.module.scss";

import { Icon } from "@fluentui/react/lib/Icon";
import { Stack, Text } from "@fluentui/react";

export interface IHRKpiCardsFragmentProps {}

const EmployeeInsights: React.FC<IHRKpiCardsFragmentProps> = () => {

  const [kpiData, setKpiData] = useState({
    employees: 0,
    activeProjects: 0,
    utilization: 0,
    onBench: 0,
    pendingTS: 0,
    overAllocated: 0,
    pendingLeave: 0,
    manualAttendance: 0,
    payslips: 0
  });

  useEffect(() => {

    setKpiData({
      employees: 7,
      activeProjects: 2,
      utilization: 76,
      onBench: 1,
      pendingTS: 2,
      overAllocated: 1,
      pendingLeave: 2,
      manualAttendance: 2,
      payslips: 4
    });

  }, []);

  return (

    <div className={styles.kpiContainer}>

      <Stack horizontal tokens={{ childrenGap: 20 }} className={styles.kpiRow}>  

        <Stack.Item grow> 
          <div className={styles.kpiCard}>
            <Stack>
              <Text className={styles.kpiLabel}>EMPLOYEES</Text>
              <Text className={styles.kpiValue}>{kpiData.employees}</Text> 
            </Stack>

            <div className={styles.iconGreen}>
              <Icon iconName="People" />
            </div>
          </div>
        </Stack.Item>


        <Stack.Item grow>
          <div className={styles.kpiCard}>
            <Stack>
              <Text className={styles.kpiLabel}>ACTIVE PROJECTS</Text>
              <Text className={styles.kpiValue}>{kpiData.activeProjects}</Text>
            </Stack>

            <div className={styles.iconGreen}>
              <Icon iconName="Package" />
            </div>
          </div>
        </Stack.Item>


        <Stack.Item grow>
          <div className={styles.kpiCard}>
            <Stack>
              <Text className={styles.kpiLabel}>UTILIZATION</Text>
              <Text className={styles.kpiValue}>{kpiData.utilization}%</Text>
            </Stack>

            <div className={styles.iconGreen}>
              <Icon iconName="LineChart" />
            </div>
          </div>
        </Stack.Item>


        <Stack.Item grow>
          <div className={styles.kpiCard}>
            <Stack>
              <Text className={styles.kpiLabel}>ON BENCH</Text>
              <Text className={styles.kpiValue}>{kpiData.onBench}</Text>
            </Stack>

            <div className={styles.iconPurple}>
              <Icon iconName="Contact" />
            </div>
          </div>
        </Stack.Item>


        <Stack.Item grow>
          <div className={styles.kpiCard}>
            <Stack>
              <Text className={styles.kpiLabel}>PENDING TS</Text>
              <Text className={styles.kpiValue}>{kpiData.pendingTS}</Text>
            </Stack>

            <div className={styles.iconYellow}>
              <Icon iconName="PageList" />
            </div>
          </div>
        </Stack.Item>


        <Stack.Item grow>
          <div className={styles.kpiCard}>
            <Stack>
              <Text className={styles.kpiLabel}>OVER ALLOCATED</Text>
              <Text className={styles.kpiValue}>{kpiData.overAllocated}</Text>
            </Stack>

            <div className={styles.iconRed}>
              <Icon iconName="Warning" />
            </div>
          </div>
        </Stack.Item>

      </Stack>


      <Stack horizontal tokens={{ childrenGap: 20 }} className={styles.kpiRowTwo}>

        <Stack.Item grow>

          <div className={styles.wideCard}>

            <div className={styles.iconYellow}>
              <Icon iconName="Clock" />
            </div>

            <Stack>
              <Text className={styles.kpiValue}>{kpiData.pendingLeave}</Text>
              <Text className={styles.kpiSub}>Pending Leave Requests</Text>
            </Stack>

          </div>

        </Stack.Item>


        <Stack.Item grow>

          <div className={styles.wideCard}>

            <div className={styles.iconBlue}>
              <Icon iconName="ContactCard" />
            </div>

            <Stack>
              <Text className={styles.kpiValue}>{kpiData.manualAttendance}</Text>
              <Text className={styles.kpiSub}>Manual Attendance Approvals</Text>
            </Stack>

          </div>

        </Stack.Item>


        <Stack.Item grow>

          <div className={styles.wideCard}>

            <div className={styles.iconGreen}>
              <Icon iconName="Calendar" />
            </div>

            <Stack>
              <Text className={styles.kpiValue}>{kpiData.payslips}</Text>
              <Text className={styles.kpiSub}>Payslips Released (Jan)</Text>
            </Stack>

          </div>

        </Stack.Item>

      </Stack>

    </div>
  );
};

export default EmployeeInsights;
