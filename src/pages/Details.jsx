import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from './details.module.scss'
function Details() {
    const pk = useLocation()
  return (
    <div className={styles.details}>
        <div className={styles.links}>
            <Link className={styles.link} style={{
                backgroundColor: pk.pathname==="/details/jobs" ? "white" : "transparent",
                width: "80px",
                boxShadow: pk.pathname==="/details/jobs" ? "0px 2px 2px 0px #0000000D" : "none",
                color: pk.pathname==="/details/jobs" ? "#030712" : "#374151"

            }} to='jobs'>Jobs</Link>
            <Link className={styles.link}  style={{
                backgroundColor: pk.pathname==="/details/universities" ? "white" : "transparent",
                width: "110px",
                boxShadow: pk.pathname==="/details/universities" ? "0px 2px 2px 0px #0000000D" : "none",
                color: pk.pathname==="/details/universities" ? "#030712" : "#374151"

            }} to='universities'>Universities</Link>
        </div>
        <Outlet/>
    </div>
  )
}

export default Details