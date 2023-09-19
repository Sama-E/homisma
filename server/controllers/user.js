import User from "../models/User";

/* READ */
// GET User
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//GET User's Associates
export const getUserAssociates = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const associates = await Promise.all(
      user.associates.map((id) => User.findById(id))
    );
    const formattedAssociates = associates.map(
      ({ _id, firstName, lastName, profilePicPath }) => {
        return { _id, firstName, lastName, profilePicPath };
      }
    );
    res.status(200).json(formattedAssociates);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const addRemoveAssociate = async (req, res) => {
  try {
    const { id, associateId } = req.params;
    const user = await User.findById(id);
    const associate = await User.findById(associateId);

    if (user.associates.includes(associateId)) {
      user.associates = user.associates.filter((id) => id !== associateId);
      associate.associates = associate.associates.filter((id) => id !== id);
    } else {
      user.associates.push(associateId);
      associate.associates.push(id);
    }
    await user.save();
    await associate.save();

    const associates = await Promise.all(
      user.associates.map((id) => User.findById(id))
    );
    const formattedAssociates = associates.map(
      ({ _id, firstName, lastName, profilePicPath }) => {
        return { _id, firstName, lastName, profilePicPath };
      }
    );

    res.status(200).json(formattedAssociates);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};