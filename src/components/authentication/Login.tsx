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
import Ripple from "../general/Ripple";

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

  const onCloseModal = () => {
    setModal("");
  };

  return (
    <>
      <LoadingSpinner loading={loading} />
      <Modal
        title={login ? "Login error" : "Sign up error"}
        description={modal}
        onClose={onCloseModal}
        open={!!modal}
      >
        <div className="mt-4">
          <button
            onClick={onCloseModal}
            className="inline-flex justify-center rounded-md border border-transparent bg-orange-100 px-4 py-2 text-sm font-medium text-orange-900 hover:bg-orange-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            Close
          </button>
        </div>
      </Modal>
      <div className="mx-auto p-6">
        <h1 className="mb-20 mt-4 text-center text-5xl font-light text-primary">
          Shoppingify
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex max-w-xs flex-col gap-6"
        >
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
          <button
            type="submit"
            className="relative mt-2 w-full cursor-pointer rounded-xl bg-primary py-2 text-base font-bold text-white"
          >
            {login ? "Login" : "Signup"}
            <Ripple color="#FFF0DE" duration={1500} />
          </button>
          <p className="-mt-5">
            {login ? "Don't have an account?" : "Already have an account?"}{" "}
            <a
              onClick={() => setLogin((oldState) => !oldState)}
              className="cursor-pointer text-primary hover:underline focus-visible:underline"
            >
              {login ? "Sign up" : "Login"}
            </a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
