// import Joi from "joi";

// export const userRegistrationVerification = (req, res, next) => {
//   try {
//     const schema = Joi.object({
//       fName: Joi.string().max(10).required(),
//       lName: Joi.string().max(10).required(),
//       email: Joi.string().email({ tlds: false }).required(),
//       password: Joi.string()
//         .min(6)
//         .required()
//         .pattern(
//           new RegExp(
//             "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:;\"'<>,.?/~`]).{6,}$"
//           )
//         ),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) {
//       return res.json({
//         status: "error",
//         message: error.message,
//       });
//     }
//     if (
//       error.message.includes(
//         "/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:;\"'<>,.?/~`]).{6,}$/"
//       )
//     ) {
//       error.message = "Your password pattern is not satisfying";
//     }
//     next();
//   } catch (error) {
//     console.log(error);
//     // Handle any unexpected errors here
//     res.status(500).json({
//       status: "error",
//       message: "Internal Server Error",
//     });
//   }
// };
