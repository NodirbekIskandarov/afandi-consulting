import React, { useEffect, useState } from "react";
import styles from "./team.module.scss";
import { getRequest } from "../../utils/request";
import { team } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";
function Team() {
  const [data, setData] = useState([]);
  const {t, i18n} = useTranslation()
  const language = i18n.language
  const fullnameKey = `fullname_${language}`
  const positionKey = `position_${language}`
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
      <h3>{t("Our team")}</h3>
      <div className={styles.cards}>
        {data?.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <img src={item.image} alt="odam rasm" />
              <span className={styles.name}>{item?.[fullnameKey]}</span>
              <div className={styles.position}>
                <div></div>
                <span>{item?.[positionKey]}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
