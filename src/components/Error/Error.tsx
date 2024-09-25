import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import style from "./Error.module.css";
import { AxiosError } from "axios";

interface ErrorProps {
  isError?: boolean;
  error?: AxiosError | null;
}

const Error: React.FC<ErrorProps> = ({ isError = false, error = null }) => {
  return (
    <>
      {error?.response?.status === 404 && (
        <Helmet>
          <title>Ops! Something went wrong... - The Clone York Times</title>
        </Helmet>
      )}

      <div className={style.container}>
        <span className={style.error}>{isError ? "OPS!" : "404"}</span>
        <h1 className={style.title}>
          {isError ? "Something went wrong" : "Page Not Found"}
        </h1>
        {isError ? (
          <p className={style.errorMessage}>
            {error?.message && error.message + "."}
          </p>
        ) : (
          <>
            <p>We could not find the page you were looking for.</p>
            <p>Please check the URL and try again</p>
            <p>or return to the home page.</p>
          </>
        )}
        {error?.response?.status !== 429 && (
          <Link to="/" className={style.button}>
            BACK TO HOME
          </Link>
        )}
      </div>
    </>
  );
};

export default Error;
