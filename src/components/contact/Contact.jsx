import React, { useState } from "react";
import styles from "./contact.module.scss";
import { postRequest } from "../../utils/request";
import { postInfo } from "../../utils/API_urls";
import { useTranslation } from "react-i18next";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Yuborish jarayoni yuklanishi
  const [modalOpen, setModalOpen] = useState(false); // Modal ochiq yoki yo'q holati
  const [modalMessage, setModalMessage] = useState(""); // Modalda ko'rsatiladigan xabar
  const {t} = useTranslation()
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
        // Input qiymatlarini tozalash
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setMessage("");
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
        <p>{t("Contact us")}</p>
        <span>
          If you ever have questions, concerns, or just want to share your
          thoughts, please don’t hesitate to reach out to us. We’re all about
          open communication and value your feedback—it helps us make our
          courses and your experience even better! Your queries will be resolved
          promptly, usually within 24-48 hours.
        </span>
      </div>

      <div className={styles.input_part}>
  <div className={styles.row}>
    <input
      type="text"
      placeholder={t("First name")}
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <input
      type="text"
      placeholder={t("Last name")}
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />
  </div>
  <input
    type="text"
    placeholder={t("Phone number")}
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
  />
  <textarea
    placeholder={t("Your message")}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
  ></textarea>

  <button onClick={handleSubmit} disabled={loading}>
    {loading ? t("Sending...") : t("Send message")}
  </button>
</div>



      {/* Modal oynasi */}
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>{modalMessage}</p>
            <button onClick={closeModal}>{t("Close")}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
