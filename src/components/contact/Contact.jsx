import React, { useState } from "react";
import styles from "./contact.module.scss";
import { postRequest } from "../../utils/request";
import { postInfo } from "../../utils/API_urls";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Yuborish jarayoni yuklanishi
  const [modalOpen, setModalOpen] = useState(false); // Modal ochiq yoki yo'q holati
  const [modalMessage, setModalMessage] = useState(""); // Modalda ko'rsatiladigan xabar

  const handleSubmit = () => {
    setLoading(true); // Yuklanishni ko'rsatish
    const postData = {
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      text: message,
    };

    postRequest(postInfo, postData)
      .then((response) => {
        setModalMessage("Your message has been sent successfully!"); // Muvaffaqiyatli xabar
        setLoading(false);
        setModalOpen(true); // Modalni ochish
      })
      .catch((error) => {
        setModalMessage("Something went wrong. Please try again."); // Xato holati
        setLoading(false);
        setModalOpen(true); // Modalni ochish
      });
  };

  const closeModal = () => {
    setModalOpen(false); // Modalni yopish funksiyasi
  };

  return (
    <div className={styles.contact}>
      <div className={styles.title}>
        <p>Contact us</p>
        <span>
          If you ever have questions, concerns, or just want to share your
          thoughts, please don’t hesitate to reach out to us. We’re all about
          open communication and value your feedback—it helps us make our
          courses and your experience even better! Your queries will be resolved
          promptly, usually within 24-48 hours.
        </span>
      </div>

      <div className={styles.input_part}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Sending..." : "Send message"}
        </button>
      </div>

      {/* Modal oynasi */}
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
