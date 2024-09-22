import React, { useContext, useEffect, useState } from "react";
import styles from "./country.module.scss";
import { getRequest } from "../../utils/request";
import { country } from "../../utils/API_urls";
import MyContext from "../../context/MyContext";
import { useNavigate } from "react-router-dom";
function Country() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRequest(country)
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { setText, setCountryId } = useContext(MyContext);
  const navigate = useNavigate()
  function navigateFunc(item) {
    setText(item.name)
    setCountryId(item.uuid)
    localStorage.setItem('uuid', item.uuid);
    localStorage.setItem('name', item.name);
    localStorage.setItem('disc', item.disc)
    navigate('/details/jobs')
  }
  return (
    <div className={styles.country}>
      <div className={styles.title}>
        <span>Conutry</span>
        <p>
          Transform Your Life and Impact the World with Our Globally Accredited
          Courses
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
