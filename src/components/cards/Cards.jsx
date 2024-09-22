import React from "react";
import styles from "./cards.module.scss";
import { IoIosStarOutline } from "react-icons/io";
import { host } from "../../utils/API_urls";
import { useLocation, useNavigate } from "react-router-dom";
function Cards({ data }) {
  const pk = useLocation();
  const name = localStorage.getItem('name');
  const disc = localStorage.getItem('disc');
  const navigate = useNavigate()
  function navigateFunc (id) {
    navigate(`/${id}`);
  }
  return (
    <div className={styles.cards}>
      <div className={styles.title_part}>
        <h2>{name} {pk.pathname === "/details/jobs" ? "Jobs" : "Universities"}</h2>
        <span>
          {disc}
        </span>
      </div>

      <div className={styles.cards_part}>
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.card}
              style={{
                backgroundImage: `url(${host + item?.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                cursor: "pointer"
              }}
              onClick={() => navigateFunc(item?.uuid)}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#00000066",
                  borderRadius: "8px",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    // height: "33px",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    display: pk.pathname === "/details/jobs" && "none",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "20px",
                      width: "90px",
                      height: "24px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      borderRadius: "6px",
                      background: "#FFFFFF",
                      paddingLeft: "2px",
                    }}
                  >
                    <IoIosStarOutline />
                    <span>Rank: {item?.rank}</span>
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "24px",
                      lineHeight: "31.2px",
                      color: "#FFFFFF",
                    }}
                  >
                    {item?.name} {item?.type}
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "40%",
                    display: pk.pathname === "/details/jobs" ? "none" : "flex",
                    justifyContent: "flex-end",
                    alignItems: "end",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "500",
                      fontSize: "13px",
                      lineHeight: "20px",
                      color: "#0085FF",
                      borderRadius: "6px",
                      background: "#FFFFFF",
                      textAlign: "center",
                      width: "66px",
                      height: "24px",
                      padding: "2px 6px 2px 6px",
                      marginRight: "10px",
                    }}
                  >
                    <a href={item.link} target="blank">Web site</a>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
