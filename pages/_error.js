import NotFound from "@/components/not-found";
import React from "react";

const Error = ({ statusCode }) => {
  if (statusCode === 404) {
    return <NotFound />;
  }

  return <div>An unexpected error has occurred</div>;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
