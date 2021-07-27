import React from "react";

export default function ErrorMessage({ children }) {
  return (
    <>
      <p style={{ color: "#EB5757" }}>{children}</p>
    </>
  );
}
