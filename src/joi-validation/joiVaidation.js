import Joi from "joi";

export const userValidtaion = (req, res, next) => {
  try {
    const schema = Joi.object({
      fName: Joi.string().max(100).required(),
      lName: Joi.string().max(100).required(),
      email: Joi.string().email({ tlds: false }).min(6).required(),
      password: Joi.string()
        .pattern(
          new RegExp(
            "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:;\"'<>,.?/~`]).{6,}$"
          )
        )
        .required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      return res.json({
        status: "error",
        message: error.message,
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};
