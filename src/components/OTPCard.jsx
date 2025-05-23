import React, { useState } from "react";
import "../styles/otp.css";

const OTPCard = () => {
  const [otp, setOtp] = useState("");
  const [length, setLength] = useState(6);
  const [alphanumeric, setAlphanumeric] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateOTP = () => {
    let chars = "0123456789";
    if (alphanumeric) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (symbols) chars += "!@#$%^&*";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setOtp(result);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(otp);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="otp-glass-card">
      <h2 className="otp-title">OTP Generator</h2>
      <div className="otp-options">
        <label>
          Length:
          <select value={length} onChange={e => setLength(Number(e.target.value))}>
            <option value={4}>4</option>
            <option value={6}>6</option>
            <option value={8}>8</option>
          </select>
        </label>
        <label>
          <input type="checkbox" checked={alphanumeric} onChange={e => setAlphanumeric(e.target.checked)} />
          Alphanumeric
        </label>
        <label>
          <input type="checkbox" checked={symbols} onChange={e => setSymbols(e.target.checked)} />
          Include Symbols
        </label>
      </div>
      <div className="otp-display">
        <span className={copied ? "blurred" : ""}>{otp || "------"}</span>
        <button className="otp-generate-btn" onClick={generateOTP}>Generate</button>
        <button className="otp-copy-btn" onClick={handleCopy} disabled={!otp}>Copy</button>
        {copied && <div className="otp-toast">Copied!</div>}
      </div>
    </div>
  );
};

export default OTPCard;
