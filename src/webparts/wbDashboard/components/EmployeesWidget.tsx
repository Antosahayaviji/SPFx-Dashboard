import * as React from 'react';
import styles from './EmployeesWidget.module.scss';

const EmployeesWidget: React.FC = () => {

  const employees = [
    { name: 'Abc', time: '09.02' },
    { name: 'ghi', time: '09.04' },
    { name: 'xyz', time: '09.05' }
  ];

  const leaves = [
    { name: 'Abc', days: '2/3 days' },
    { name: 'ghi', days: '4/5 days' }
  ];

  return (

    <div className={styles.widgets}>

      <div className={styles.widgetCard}>

        <div className={styles.widgetHeader}>
          <h4>Employees Present</h4>
          <span className={styles.iconBlue}>👤</span>
        </div>

        {employees.map((emp, index) => (
          <div key={index} className={styles.row}>
            <span>{emp.name}</span>
            <span>{emp.time}</span>
            <span className={styles.greenDot}></span>
          </div>
        ))}

      </div>

      <div className={styles.widgetCard}>

        <div className={styles.widgetHeader}>
          <h4>Employees on Leave</h4>
          <span className={styles.iconOrange}>🏖</span>
        </div>

        {leaves.map((emp, index) => (
          <div key={index} className={styles.row}>
            <span>{emp.name}</span>
            <span>{emp.days}</span>
          </div>
        ))}

      </div>


      <div className={styles.widgetCard}>

        <div className={styles.widgetHeader}>
          <h4>Upcoming Birthdays</h4>
          <span className={styles.iconPink}>🎂</span>
        </div>

        <div className={styles.row}>
          <span>abc</span>
          <span>11 March</span>
        </div>

      </div>

    </div>

  );

};

export default EmployeesWidget;