import styles from "./LoginPage.module.css"
import Button from "../../compoentns/buttons/Button/Button.tsx";
import Input from "../../compoentns/inputs/Input/Input.tsx";
import {useState} from "react";
import {useNavigate} from "react-router";
import {routes} from "../../config/routes.ts";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(routes.home)
  }

  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <form className={styles.formContainer}>
        <label htmlFor="username">Username:</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="username" name="username" required />

        <label htmlFor="password">Password:</label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" required />

        <div className={styles.buttonContainer}>
          <Button
            type="submit"
            onClick={(e) => {
              console.log("Login");
              onSubmit(e)
            }}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;