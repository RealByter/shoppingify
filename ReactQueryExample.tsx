import { FormEventHandler, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { usersCollection, getUserDocById } from "./firebase-config";
import { getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

interface User {
  id: string;
  name: string;
  age: number;
}

const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const data = (await getDocs(usersCollection)).docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as User[];
      return data;
    },
  });
};

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      newName,
      newAge,
    }: {
      newName: string;
      newAge: number;
    }) => {
      return await addDoc(usersCollection, {
        name: newName,
        age: Number(newAge),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

const useIncreaseAge = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, age }: { id: string; age: number }) => {
      const userDoc = getUserDocById(id);
      const newFields = { age: age + 1 };
      return await updateDoc(userDoc, newFields);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const userDoc = getUserDocById(id);
      return await deleteDoc(userDoc);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

function App() {
  const { isSuccess, data } = useGetUsers();
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const createUserMutation = useCreateUser();
  const increaseAgeMutation = useIncreaseAge();
  const deleteUserMutation = useDeleteUser();

  const onSubmitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    createUserMutation.mutate({ newName, newAge });
    setNewName("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          value={newName}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setNewAge(Number(e.target.value));
          }}
          value={newAge}
        />
        <button type="submit">Create user</button>
      </form>
      {isSuccess &&
        data.map((user, i) => (
          <div key={i}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button
              onClick={() =>
                increaseAgeMutation.mutate({ id: user.id, age: user.age })
              }
            >
              Increase age
            </button>
            <button onClick={() => deleteUserMutation.mutate(user.id)}>
              Delete user
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
