import { Listbox } from "@headlessui/react";
import { Control, Controller } from "react-hook-form";

interface Props {
  label: string;
  name: string;
  options: any[];
  control: any;
}

const Select: React.FC<Props> = ({ label, options, name, control }) => (
  <Controller
    control={control}
    name={name}
    defaultValue={options[0]}
    render={({ field }) => (
      <div className="group relative focus-within:text-primary">
        <p className="text-sm font-medium">{label}</p>
        <Listbox value={field.value} onChange={field.onChange}>
          <Listbox.Button className="mt-1 flex w-full items-center justify-between rounded-xl border-2 border-solid border-gray-400 bg-white px-3 py-4 text-left text-black outline-none placeholder:text-gray-400 group-focus-within:border-primary">
            {field.value}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Listbox.Button>
          <Listbox.Options className="absolute top-[calc(100%+8px)] z-10 max-h-40 w-full overflow-y-auto rounded-xl bg-white p-2 text-black shadow-[0px_2px_12px_rgba(0,0,0,0.04)] outline-none ring-1 ring-gray-300 scrollbar-hide">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                value={option}
                className="rounded-xl px-5 py-3 ui-active:bg-gray-100"
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    )}
  />
);

export default Select;
