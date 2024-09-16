import React from 'react'
import styles from './contact.module.scss'
function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.title}>
                <p>
                    Contact us
                </p>
                <span>
                    If you ever have questions, concerns, or just want to share your thoughts, please don’t hesitate to reach out to us. We’re all about open communication and value your feedback—it helps us make our courses and your experience even better! Your queries will be resolved promptly, usually within 24-48 hours.
                </span>
            </div>

            <div className={styles.input_part}>
                <input type="text" placeholder='First name'/>
                <input type="text" placeholder='Last name'/>
                <input type="text" placeholder='Phone number'/>
                <textarea name="" id="" placeholder='Your message'>

                </textarea>
                <button>Send message</button>
            </div>  
        </div>
    )
}

export default Contact