import React, { useEffect } from "react";

import Twits from "./Twits";

// how to check if user logged in?

export default function MainPageWrapper({ loggedIn, children }) {
  return (
    <>
      <div className="main-page_item main-page_wrapper">
        <section className="main-page_top-block">{children}</section>
        <section className="main-page_twits">
          <Twits />
        </section>
      </div>
    </>
  );
}
