/* Controllers */
import Users from "../model/user";

//GET: localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) return res.status(404).json({ error: "Data Not Found" });

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

//POST: localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;

    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });

    Users.create(formData, (err, data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

//PUT: localhost:3000/api/users/`{userId}`
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      return res.status(200).json(user);
    }
    return res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    return res.status(404).json({ error: "Error While Updating Data...!" });
  }
}

//DELETE: localhost:3000/api/users/`{userId}`
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findByIdAndDelete(userId);
      return res.status(200).json({ deleted: userId });
    }
    return res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    return res.status(404).json({ error: "Error While Deleting User...!" });
  }
}
