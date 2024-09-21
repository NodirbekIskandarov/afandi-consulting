import React, { useEffect, useState } from "react";
import styles from "./team.module.scss";
import { getRequest } from "../../utils/request";
import { team } from "../../utils/API_urls";
function Team() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRequest(team)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className={styles.team}>
      <h3>Our team</h3>
      <div className={styles.cards}>
        {data?.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img src={item.image} alt="odam rasm" />
              <span className={styles.name}>{item.fullname}</span>
              <div className={styles.position}>
                <div></div>
                <span>{item.position}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
