import { useState,useRef } from "react";
import firebase from "../firebase.js"; 
import './Authontication.css';

const Authontication = () => {
    const [showOtpSection, setShowOtpSection] = useState(false);
    const [phoneNum , setPhoneNum] = useState("");
    const [name , setName] = useState("");
    const [otp, setOtp] = useState("");
    const [verificationId, setVerificationId] = useState("");
    const recaptchaRef=useRef(null);

    
     
      const handleGetOtp = () => {
        if(recaptchaRef.current){
            recaptchaRef.current.innerHTML='<div id="recaptcha-container"></div>'

        }

        
        const verifire= new firebase.auth.RecaptchaVerifier('recaptcha-container',{
         size:'invisible'
    })
    firebase.auth().signInWithPhoneNumber(phoneNum, verifire).then(confirmationResult=>{
        setVerificationId(confirmationResult.verificationId);

    })
    .catch(error=>{
        console.error("error found",error);
        
    });
    
        setShowOtpSection(true);
        
      };
      
      const handleVerifyOtp = () => {
       const credentials= firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
       firebase.auth.signInWithCredential(credentials).then(userCredential=>{
        console.log("User Lod In successfully");

       })
       .catch(err=>{
        console.log(err);
        alert("log in successully")
       })
   
      }
  return (
    <div className="container">
      <div className="card">
        <h2>Mobile Authontication Using OTP</h2>
        <div ref={recaptchaRef}></div>
        <input type="text" className="input-field"  placeholder="Enter Your Name" onChange={event=> setName(event.target.value)} value={name} maxLength="10"  />
        <input type="tel" className="input-field"  placeholder="Enter Mobile Number" onChange={event=>setPhoneNum(event.target.value)} value={phoneNum}   />
        <button className="btn" onClick={handleGetOtp} > Get OTP</button>

        {showOtpSection && (
          <div className="otp-section">
            <input type="text" className="input-field" placeholder="Enter OTP" onChange={event=>setOtp(event.target.value)} value={otp}  />
            <button className="btn submit-btn" onClick={handleVerifyOtp} > Submit</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Authontication
