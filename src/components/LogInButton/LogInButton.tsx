import style from "./LogInButton.module.css";
function LogInButton() {
  return (
    <div className={style.logInButton}>
      <a href="https://myaccount.nytimes.com/auth/login" target="_blank">
        LOG IN
      </a>
    </div>
  );
}

export default LogInButton;
