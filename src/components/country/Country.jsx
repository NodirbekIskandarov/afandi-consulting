import React, { useEffect, useState } from "react";
import styles from "./country.module.scss";
import { getRequest } from "../../utils/request";
import { country } from "../../utils/API_urls";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Country() {
  const [data, setData] = useState([]);
  const {t} = useTranslation()
  useEffect(() => {
    getRequest(country)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate()
  function navigateFunc(item) {
    localStorage.setItem('uuid', item.uuid);
    navigate('/details/jobs')
  }
  return (
    <div className={styles.country}>
      <div className={styles.title}>
        <span>{t("Country")}</span>
        <p>
          {t("Transform Your Life and Impact the World with Our Globally Accredited Courses")}
        </p>
      </div>

      <div className={styles.cards}>
        {data?.map((item, index) => {
          return (
            <div className={styles.card} key={index} onClick={() => navigateFunc(item)}>
              <img src={item?.image} alt="country rasm" />
              <span className={styles.name}>{item.name}</span>
              <br />
              <span className={styles.desc}>{item.disc}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Country;
