import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserForm";


function Form(params) {
  const flag = false;
  //   <div className="container mx-auto py-5">
  //({flag ? <AddUserForm />: <UpdateUserForm/>})
  return (
    <div className="container mx-auto py-5">
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  );
}

export default Form;
