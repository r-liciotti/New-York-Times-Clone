import { Helmet } from "react-helmet";

import Error from "../components/Error/Error";

function PageNotFound() {
  return (
    <>
      <Helmet>
        <title>404: Page Not Found - The Clone York Times</title>
      </Helmet>

      <Error />
    </>
  );
}

export default PageNotFound;
