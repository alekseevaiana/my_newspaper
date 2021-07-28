import React, { useEffect, useState } from "react";

import { Auth } from "aws-amplify";

async function checkAuth() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    return null;
  }
}

// init | logged | notlogged
export default function useLoginState() {
  const [authState, setAuthState] = useState("init"); // init | logged | notlogged

  useEffect(() => {
    let finished = false;

    const checkLoggenIn = async () => {
      const user = await checkAuth();

      if (!finished) {
        if (user) {
          setAuthState("logged");
        } else {
          setAuthState("notlogged");
        }
      }
    };
    checkLoggenIn();

    return () => {
      finished = true;
    };
  }, [setAuthState]);

  return authState;
}
