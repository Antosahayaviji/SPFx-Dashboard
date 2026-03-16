import * as React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import styles from "./CalendarWidget.module.scss";

interface IHoliday {
  title: string;
  date: string;
}

const CalendarWidget: React.FC = () => {

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [days, setDays] = useState<number[]>([]);

  const holidays: IHoliday[] = [
    { title: "Ramzan", date: "20 Mar 2026" },
    { title: "Good Friday", date: "3 Apr 2026" },
    { title: "Tamil New Year", date: "14 Apr 2026" },
    { title: "Independence Day", date: "15 Aug 2026" },
    { title: "Gandhi Jayanthi", date: "02 Oct 2026" }
  ];

  const birthdays = [
    { name: "Ramesh", date: "12 Mar" },
    { name: "Abi", date: "14 Mar" },
    { name: "Kaviya", date: "16 Mar" }
  ];

  const activities = [
    { name: "Ramesh", task: "SPFx Dashboard UI" },
    { name: "Raj", task: "API Integration" },
    { name: "Dev", task: "Calendar Module" }
  ];

  useEffect(() => {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const totalDays = new Date(year, month + 1, 0).getDate();

    const daysArray: number[] = [];

    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(i);
    }

    setDays(daysArray);

  }, [currentDate]);

  const nextMonth = () => {

    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );

  };

  const prevMonth = () => {

    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );

  };

  const monthName = currentDate.toLocaleString("default", {
    month: "long"
  });

  return (

    <div className={styles.calendarLayout}>

      <div className={styles.smallCard}>

        <h4 className={styles.cardTitle}>
          <Icon iconName="Cake" className={styles.iconPurple} />
          Birthdays
        </h4>

        {birthdays.map((b, i) => (

          <div key={i} className={styles.holidayRow}>

            <span>{b.name}</span>

            <span className={styles.date}>
              {b.date}
            </span>

          </div>

        ))}

      </div>


      <div className={styles.smallCard}>

        <h4 className={styles.cardTitle}>
          <Icon iconName="LightningBolt" className={styles.iconOrange}/>
          Activity
        </h4>

        {activities.map((a, i) => (

          <div key={i} className={styles.activityRow}>

            <div className={styles.avatar}></div>

            <div>
              <strong>{a.name}</strong>
              <p>{a.task}</p>
            </div>

          </div>

        ))}

      </div>


      <div className={styles.smallCard}>

        <h4 className={styles.cardTitle}>
          <Icon iconName="Calendar" className={styles.iconBlue}/>
          Upcoming Holidays
        </h4>

        {holidays.map((holiday, index) => (

          <div key={index} className={styles.holidayRow}>

            <span>{holiday.title}</span>

            <span className={styles.date}>
              {holiday.date}
            </span>

          </div>

        ))}

      </div>

      <div className={styles.calendarCard}>

        <div className={styles.header}>

          <button onClick={prevMonth}>
            <Icon iconName="ChevronLeft" />
          </button>

          <h4 className={styles.cardTitle}>
            <Icon iconName="CalendarWeek" className={styles.iconGreen}/>
            {monthName} {currentDate.getFullYear()}
          </h4>

          <button onClick={nextMonth}>
            <Icon iconName="ChevronRight" />
          </button>

        </div>

        <div className={styles.daysHeader}>

          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>

        </div>

        <div className={styles.grid}>

          {days.map((day, index) => (

            <div key={index} className={styles.day}>
              {day}
            </div>

          ))}

        </div>

      </div>

    </div>

  );

};

export default CalendarWidget;