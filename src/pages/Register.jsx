import "../public/css/style.css";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <div className="App">
      <section className="h-screen gradient-form">
        <RegisterForm />
      </section>
    </div>
  );
}

export default Register;
