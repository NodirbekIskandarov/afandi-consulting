import React, { useEffect, useState } from "react";
import styles from "./detailpage.module.scss";
import { useParams } from "react-router-dom";
import { getRequest } from "../utils/request";
import { getorg, getreqs } from "../utils/API_urls";
import { useTranslation } from "react-i18next";
function DetailPage() {
  const pk = useParams();
  const [org, setOrg] = useState();
  const [req, setReq] = useState();
  const {t, i18n} = useTranslation()
  const language = i18n.language
  const nameKey = `name_${language}`
  const typeKey = `type_${language}`
  const discKey = `disc_${language}`
  useEffect(() => {
    getRequest(`${getorg}${pk.id}/`)
      .then((response) => {
        setOrg(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getRequest(`${getreqs}${pk.id}/`)
      .then((response) => {
        setReq(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pk]);
  return (
    <div className={styles.detail_page}>
      <div className={styles.title_part}>
        <span>
          {org?.[nameKey]} {org?.[typeKey]}
        </span>
        {/* <br />
        <span>
          Transform Your Life and Impact the World with Our Globally Accredited
          Courses
        </span> */}
      </div>
      <img src={org?.image} alt="rasm" style={{ margin: "30px 0" }} />
      <div className={styles.text_part}>
        <span>{org?.[discKey]}</span>
      </div>

      <div className={styles.requirment}>
        <span>{t("Document")}</span>
        <ul>
          {req?.map((item, index) => {
            return <li key={index}>{item?.[nameKey]}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default DetailPage;
