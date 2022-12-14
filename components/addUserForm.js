import { useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "./success";
import { useMutation, useQueryClient } from "react-query";
import { addUser, getUsers } from "../lib/helper";

function AddUserForm({ formData, setFormData }) {
  const queryClient = useQueryClient();

  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      queryClient.prefetchQuery("users", getUsers);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length === 0)
      return console.log("Empty Form Data!");

    let { firstname, lastname, email, salary, date, status } = formData;

    const model = {
      name: `${firstname} ${lastname}`,
      avatar: `https://randomuser.me/api/portraits/men/${Math.floor(
        Math.random() * 10
      )}.jpg`,
      email,
      salary,
      date,
      status: status ?? "Active",
    };

    addUserMutation.mutate(model);
  };

  if (addUserMutation.isLoading) return <div>Loading...</div>;

  if (addUserMutation.isError)
    return <div>{addUserMutation.error.message}</div>;

  if (addUserMutation.isSuccess)
    return <Success message={"User Added Successfully."}></Success>;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={submitHandler}>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="firstname"
          placeholder="First Name"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="lastname"
          placeholder="Last Name"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="text"
          onChange={setFormData}
          name="email"
          placeholder="Email"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="number"
          onChange={setFormData}
          name="salary"
          placeholder="Salary"
          className="border w-full px-5 py-3 focus: outline-none rounded-md"
        ></input>
      </div>
      <div className="input-type">
        <input
          type="date"
          onChange={setFormData}
          name="date"
          className="border px-5 py-3 focus:outline-none rounded-md"
        ></input>
      </div>

      <div className="flex gap-10 items-center">
        <div className="form-check">
          <input
            type="radio"
            onChange={setFormData}
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

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
        Add
        <span className="px-1">
          <BiPlus size={24}></BiPlus>
        </span>
      </button>
    </form>
  );
}

export default AddUserForm;
