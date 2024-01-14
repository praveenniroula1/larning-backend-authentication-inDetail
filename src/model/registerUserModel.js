import registerUserSchema from "../schema/registerUserSchema.js";

export const insertUser = (obj) => {
  return registerUserSchema(obj).save();
};

export const findUser = (email) => {
  return registerUserSchema.findOne({ email });
};
