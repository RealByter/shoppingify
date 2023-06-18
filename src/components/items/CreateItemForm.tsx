import { useForm } from "react-hook-form";
import Input from "../general/Input";
import SideCard from "../general/SideCard";
import { CollectionReference, DocumentData, addDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import Button from "../general/Button";
import Select from "../general/Select";
import categories from "./categories";

interface Props {
  onClose(): any;
  collectionRef: CollectionReference<DocumentData>;
  doesItemExist(name: string): boolean;
}

interface FormData {
  name: string;
  note?: string;
  image?: string;
  category: string;
}

const CreateItemForm: React.FC<Props> = ({
  onClose,
  collectionRef,
  doesItemExist,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmitHandler = (data: FormData) => {
    if (doesItemExist(data.name)) {
      //TODO: show error
    } else {
      addDoc(collectionRef, data).catch((e) => {
        if (e instanceof FirebaseError) {
          //TODO: show error
        }
      });
      onClose();
    }
  };

  return (
    <SideCard className="flex flex-col bg-[#fafafe] p-8">
      <h3 className="text-2xl font-medium">Add a new item</h3>
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="mt-8 flex grow flex-col gap-5"
      >
        <Input
          register={register}
          rules={{
            required: "this is required",
          }}
          placeholder="Enter a name"
          label="Name"
          errorMessage={errors.name?.message}
        />
        <Input
          register={register}
          placeholder="Enter a note"
          type="textarea"
          label="Note"
          errorMessage={errors.note?.message}
        />
        <Input
          register={register}
          placeholder="Enter a url"
          rules={{
            pattern: {
              value:
                /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
              message: "must be a valid url",
            },
          }}
          type="url"
          label="Image"
          errorMessage={errors.image?.message}
        />
        <Select
          options={categories}
          name="category"
          label="Category"
          control={control}
        />
        <div className="mt-auto flex justify-center gap-6">
          <Button
            onClick={onClose}
            textColor="text-black"
            color="bg-transparent"
            rippleColor="#dddddd"
          >
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </SideCard>
  );
};

export default CreateItemForm;
