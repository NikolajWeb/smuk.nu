import styles from "./contactForm.module.css";
import Button from "../button/button";
import cream from "/src/assets/cream.png"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";


const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [memberData, setMemberData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      localStorage.setItem("memberData", JSON.stringify(data));
      setMemberData(data);
      setSuccess(true); // Vis succesbesked
      reset();
    } catch (error) {
      console.log("Fejl:", error);
    }
  };

  if (success && memberData) {
    return (
      <div className={styles.success}>
        <h1>TAK!</h1>
        <p className={styles.name}>{memberData.name}</p>
        <p>Vi er enormt glade for at få dig som medlem.</p>
        <img src={cream} alt="cream" />
        <p>Kig i din inbox – vi har sendt en lille velkomstgave.</p>
        <NavLink to="/">
            <Button buttonText={"Til Forsiden"} />
        </NavLink>
      </div>
    );
  }

  // Hvis ikke succes, vis formularen
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.label}>Fulde navn</label>
      <input type="text" {...register("name", { required: "Navn er påkrævet" })} />
      {errors.name && <span className={styles.error}>{errors.name.message}</span>}

      <label>E-mail</label>
      <input type="email" {...register("email", { required: "Email er påkrævet" })} />
      {errors.email && <span className={styles.error}>{errors.email.message}</span>}

      <label>Ris og/eller ros</label>
      <textarea rows="10" {...register("message", { required: "Besked er påkrævet" })}></textarea>
      {errors.message && <span className={styles.error}>{errors.message.message}</span>}

      <Button className={styles.btn} buttonText={isSubmitting ? "Sender..." : "Opret"} />
    </form>
  );
};

export default ContactForm;
