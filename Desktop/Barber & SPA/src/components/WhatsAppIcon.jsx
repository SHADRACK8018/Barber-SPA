import React, { useState, useRef } from "react";

const whatsappNumber = "254700000000"; // Replace with your number

const WhatsAppIcon = () => {
  const [showToast, setShowToast] = useState(false);
  const audioRef = useRef(null);

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const handleClick = () => {
    audioRef.current?.play();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {/* Sound */}
      <audio ref={audioRef} preload="auto">
        <source
          src="https://www.myinstants.com/media/sounds/button-click.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* WhatsApp Icon */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          backgroundColor: "rgba(37, 211, 102, 0.9)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderRadius: "50%",
          width: "64px",
          height: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.5)",
          zIndex: 1000,
          animation: "pulse 2.5s infinite",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        {/* Tooltip */}
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            backgroundColor: "#fff",
            color: "#222",
            padding: "6px 12px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            opacity: 0.95,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          💬 Chat with us
        </div>

        {/* Updated WhatsApp Icon (Flat Modern Look) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M380.9 97.1C339 55.2 282.4 32 222.6 32 101.4 32 0 133.4 0 254.6c0 45.1 11.7 89.1 33.9 127.9L0 480l101.3-33.2c36.4 19.8 77.6 30.4 121.3 30.4h.1c121.2 0 222.6-101.4 222.6-222.6 0-59.8-23.3-116.4-65.1-157.5zM222.6 426.6c-37.1 0-73.4-10-105.2-28.9l-7.5-4.4-60.2 19.7 20.2-58.4-4.9-7.6c-20.9-32.6-32-70.4-32-109.4C33 154.5 123 64.6 222.6 64.6c52.6 0 101.9 20.5 139 57.7 37.2 37.2 57.7 86.4 57.7 139 0 99.6-89.9 189.6-196.7 189.6zm101.2-138.1c-5.5-2.8-32.4-16-37.4-17.8-5-1.9-8.6-2.8-12.2 2.8s-14 17.8-17.2 21.5-6.3 4.2-11.7 1.4-22.8-8.4-43.4-26.8c-16-14.3-26.8-31.9-29.9-37.2-3.1-5.4-.3-8.3 2.5-11.1 2.6-2.6 5.8-6.8 8.6-10.3 2.8-3.4 3.7-5.6 5.5-9.3 1.8-3.6.9-6.9-.5-9.6-1.4-2.8-12.2-29.5-16.7-40.4-4.4-10.5-8.9-9.1-12.2-9.2-3.2-.1-6.9-.1-10.6-.1s-9.8 1.4-14.9 6.9c-5.2 5.5-19.5 19.1-19.5 46.6s20 54.1 22.8 57.8c2.8 3.7 39.3 60.1 95.3 84.3 13.3 5.8 23.6 9.3 31.6 11.9 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.4-13.2 37-26 4.6-12.7 4.6-23.6 3.2-25.8-1.3-2.2-5-3.6-10.4-6.3z" />
        </svg>
      </a>

      {/* Toast Notification */}
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "100px",
            right: "24px",
            background: "#25D366",
            color: "#fff",
            padding: "12px 16px",
            borderRadius: "8px",
            fontWeight: "bold",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            zIndex: 1001,
          }}
        >
          Opening WhatsApp...
        </div>
      )}

      {/* Pulse Animation Keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppIcon;
