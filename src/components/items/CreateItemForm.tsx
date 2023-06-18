import { useForm } from "react-hook-form";
import Input from "../general/Input";
import SideCard from "../general/SideCard";

interface Props {
  onClose(): any;
}

interface FormData {
  name: string;
  note?: string;
  image?: string;
  category: string;
}

const CreateItemForm: React.FC<Props> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <SideCard className="bg-[#fafafe] p-8">
      <h3 className="text-2xl font-medium"></h3>
      <div>
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
        <Input
          register={register}
          placeholder="Enter a category"
          type="select"
          label="Category"
          errorMessage={errors.category?.message}
        />
      </div>
    </SideCard>
  );
};

export default CreateItemForm;
