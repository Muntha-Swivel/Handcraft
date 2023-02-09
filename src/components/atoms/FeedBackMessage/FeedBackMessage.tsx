import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import { IFeedBackMessage } from "./FeedBackMessage.interface";

const FeedBackMessage = ({ message, refresh, type }: IFeedBackMessage) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, [refresh]);

  return show ? (
    <Alert severity={type} sx={{ mt: 1 }}>
      {message}
    </Alert>
  ) : null;
};

export { FeedBackMessage };

// Alert severity="error" sx={{ mt: 1 }}>
//                 {loginErrorMessage}
//               </Alert>
