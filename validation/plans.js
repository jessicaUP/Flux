const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePlanInput(data) {
  let errors = {};
  

  data.text = validText(data.title) ? data.title : '';

  if (Validator.isEmpty(data.title)) {
    errors.title = 'title field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};