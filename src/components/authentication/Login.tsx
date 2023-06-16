import { useForm } from "react-hook-form";
import Input from "../general/Input";
import { useAuth } from "reactfire";
import { signInWithEmailAndPassword } from "firebase/auth";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          rules={{ required: "this is required" }}
          placeholder="Enter an email"
          label="Email"
          errorMessage={errors.email?.message}
        />
        <Input
          type="password"
          register={register}
          rules={{ required: "this is required" }}
          placeholder="Enter a password"
          label="Password"
          errorMessage={errors.email?.message}
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
