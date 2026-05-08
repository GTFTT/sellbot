import styles from "./RegisterPage.module.css"
import Button from "../../compoentns/buttons/Button/Button.tsx";
import Input from "../../compoentns/inputs/Input/Input.tsx";
import {useState} from "react";
import {useNavigate} from "react-router";
import {routes} from "../../config/routes.ts";

function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate()

  const onSubmit = (e: any) => {
    e.preventDefault();
    navigate(routes.login)
  }

  return (
    <div className={styles.container}>
      <h3>Register</h3>
      <form className={styles.formContainer}>
        <label>Full name:</label>
        <Input value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" name="fullName" required />

        <label>Email:</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="email" required />

        <label>Password:</label>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" required />

        <label>Repeat password:</label>
        <Input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" name="repeatPassword" required />

        <div className={styles.buttonContainer}>
          <Button
            type="submit"
            onClick={(e) => {
              console.log("Register");
              onSubmit(e)
            }}
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RegisterPage;