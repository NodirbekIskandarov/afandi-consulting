import React, { useEffect, useState } from "react";
import styles from "./about.module.scss";
import { getRequest } from "../../utils/request";
import { about } from "../../utils/API_urls";
import { useNavigate } from "react-router-dom";
function About() {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    getRequest(about)
      .then((response) => {
        setData(response?.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const handleMenuClick = (section) => {
    navigate(`/#${section}`);  // URL ga fragment (#about, #team) qo‘shib yo‘naltiramiz
  };
  return (
    <div className={styles.about}>
      <div className={styles.info}>
        <div className={styles.text_part}>
          <h3>About us</h3>
          <p>
            {
                data[0]?.body
            }
          </p>
          <button onClick={() => handleMenuClick('contact')}>Book a consultation</button>
        </div>
        <div className={styles.img_part}>
          <img src={data[0]?.image} alt="about us rasm" />
        </div>
      </div>

      
    </div>
  );
}

export default About;
