import React from 'react'
import styles from './cards.module.scss'
import cardback from '../../assets/images/cardback.png'
import { IoIosStarOutline } from "react-icons/io";
function Cards() {
    return (
        <div className={styles.cards}>
            <div className={styles.title_part}>
                <h2>Canada Job</h2>
                <span>Transform Your Life and Impact the World with Our Globally Accredited Courses</span>
            </div>

            <div className={styles.cards_part}>
                <div className={styles.card} style={{
                    backgroundImage: `url(${cardback})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        background: "#00000066",
                        borderRadius: "8px"
                    }}>
                        <div style={{
                            width: "100%",
                            height: "33",
                            paddingLeft: "10px",
                            paddingTop: "10px"
                        }}>
                            <span style={{
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
                                paddingLeft: "2px"
                            }}>
                                <IoIosStarOutline />
                                <span>
                                    Rank: 444
                                </span>
                            </span>
                        </div>
                        <div style={{
                            width: "100%",
                            paddingTop: '25px'
                        }}>
                            <span style={{
                                fontWeight: "400",
                                fontSize: "24px",
                                lineHeight: "31.2px",
                                color: "#FFFFFF"
                            }}>Teacher job </span>
                        </div>
                        <div style={{
                            width: "100%",
                            height: "40%",
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "end"
                        }}>
                            <span style={{
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
                                marginRight: "10px"
                            }}>Web site </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards