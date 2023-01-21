const joi = require("joi");
const { joiPasswordExtendCore } = require("joi-password");
joi.objectid = require("joi-objectid");
const joiPassword = joi.extend(joiPasswordExtendCore);

const userRegistrationSchema = joi.object({
  firstName: joi.string().trim().required(),
  lastName: joi.string().trim().required(),
  email: joi.string().trim().email().lowercase().required(),
  password: joiPassword
    .string()
    .trim()
    .min(8)
    .max(16)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required(),
  receiveMails: joi.bool().default(false),
});

module.exports = {
  userRegistrationSchema,
};
