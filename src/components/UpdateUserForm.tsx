import { useForm } from "react-hook-form";
import { IReactHookFormInput } from "../interface/ReactHookForm";

type InputName = "name" | "phone" | "birthday" | "address";

type TUpdateUser = Record<InputName, string>;

const updateUserFormInputs: Array<IReactHookFormInput<InputName>> = [
  {
    name: "name",
    label: "姓名",
    placeholder: "請輸入姓名",
    type: "text",
    options: {
      required: {
        value: true,
        message: "請輸入姓名",
      },
    },
  },
  {
    name: "phone",
    label: "電話",
    placeholder: "請輸入電話",
    type: "text",
    options: {
      required: {
        value: true,
        message: "請輸入電話",
      },
    },
  },
  {
    name: "birthday",
    label: "生日",
    placeholder: "請輸入生日",
    type: "text",
    options: {
      required: {
        value: true,
        message: "請輸入生日",
      },
    },
  },
  {
    name: "address",
    label: "地址",
    placeholder: "請輸入地址",
    type: "text",
    options: {
      required: {
        value: true,
        message: "請輸入地址",
      },
    },
  },
];

function UpdateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUpdateUser>();
  const onSubmit = (data: TUpdateUser) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {updateUserFormInputs.map((input: IReactHookFormInput<InputName>) => {
        return (
          <div className="mb-3" key={input.name}>
            <label className="form-label">{input.label}</label>
            <input
              type={input.type}
              className="form-control"
              placeholder={input.placeholder}
              {...register(input.name as InputName, input.options)}
            />
            {errors[input.name as InputName] && (
              <p className="text-danger" role="alert">
                {errors[input.name as InputName]?.message as string}
              </p>
            )}
          </div>
        );
      })}
      <input type="submit" value="儲存設定" className="btn btn-primary" />
    </form>
  );
}

export default UpdateUserForm;
