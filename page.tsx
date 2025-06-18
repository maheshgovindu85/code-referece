"use client";

import { SetStateAction, useState } from "react";
import styles from "./page.module.css";
import Header from "./components/header";       // Adjust path accordingly
import LoginModal from "./components/loginModel";
import OtpModal from "./components/otpModel";
import GmailLoginModal from "./components/gmailLoginModel";

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showGmailLogin, setGmailShowLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <Header onLoginClick={() => setShowLogin(true)} onGmailLoginClick={() => setGmailShowLogin(true)} />
        <LoginModal show={showLogin} onClose={() => setShowLogin(false)} onNext={(phone: SetStateAction<string>) => {
           setPhoneNumber(phone);
          setShowLogin(false);
          setShowOtp(true);
        }} />

        <OtpModal
          show={showOtp}
           phone={phoneNumber}
          onClose={() => setShowOtp(false)}
        />
        
        <GmailLoginModal show={showGmailLogin} onClose={() => setGmailShowLogin(false)} onNext={() => {
          setGmailShowLogin(false);
          setShowOtp(true);
        }} />
      </main>

    </div>
  );
}
