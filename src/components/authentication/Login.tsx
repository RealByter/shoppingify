import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../general/Input";
import { useAuth } from "reactfire";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { FirebaseError } from "firebase/app";
import LoadingSpinner from "../general/LoadingSpinner";
import Modal from "../general/Modal";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState("");
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    if (login) {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .catch((e) => {
          if (e instanceof FirebaseError) {
            if (e.code === "auth/user-not-found")
              setModal("Couldn't find the user. Try another one");
            else if (e.code === "auth/wrong-password")
              setModal("Incorrect password. Please try again");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .catch((e) => {
          if (e instanceof FirebaseError) {
            if (e.code === "auth/email-already-in-use")
              setModal("Email already in use. Try to log in?");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <LoadingSpinner loading={loading} />
      <Modal
        title={login ? "Login error" : "Sign up error"}
        description={modal}
        onClose={() => {
          setModal("");
        }}
        open={!!modal}
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            rules={{
              required: "this is required",
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/,
                message: "must be a valid email address",
              },
            }}
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
            errorMessage={errors.password?.message}
          />
          <button type="submit">{login ? "Login" : "Signup"}</button>
          <p>
            {login ? "Don't have an account?" : "Already have an account?"}{" "}
            <a onClick={() => setLogin((oldState) => !oldState)}>
              {login ? "Signup" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
