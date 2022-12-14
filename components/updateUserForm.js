import { BiBrush } from "react-icons/bi";
import Success from "./success";
import { useQuery } from "react-query";
import { getUser, getUsers, updateUser } from "../lib/helper";
import { useMutation, useQueryClient } from "react-query";

function UpdateUserForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient();

  const { isLoading, isError, error, data } = useQuery(["users", formId], () =>
    getUser(formId)
  );

  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery("users",getUsers);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error}</div>;

  const { name, avatar, salary, date, email, status } = data;
  const [firstname, lastname] = name ? name.split(" ") : formData;

  const submitHandler = async (e) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${
      formData.lastname ?? lastname
    }`;
    let updated = Object.assign({}, data, formData, { name: userName });
    await UpdateMutation.mutate(updated);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={submitHandler}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={firstname}
          name="firstname"
          placeholder="First Name"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={lastname}
          name="lastname"
          placeholder="Last Name"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          defaultValue={email}
          name="email"
          placeholder="Email"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="number"
          onChange={setFormData}
          defaultValue={salary}
          name="salary"
          placeholder="Salary"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          defaultValue={date}
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            defaultChecked={status == "Active"}
            name="status"
            value="Active"
            id="radioDefault1"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
          />
          <label htmlFor="radioDefault1" className="inline-block text-gray-800">
            Active
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
            defaultChecked={status !== "Active"}
            name="status"
            value="Inactive"
            id="radioDefault2"
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer "
          />
          <label htmlFor="radioDefault2" className="inline-block text-gray-800">
            Inactive
          </label>
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500">
        Update
        <span className="px-1">
          <BiBrush size={24}></BiBrush>
        </span>
      </button>
    </form>
  );
}

export default UpdateUserForm;
