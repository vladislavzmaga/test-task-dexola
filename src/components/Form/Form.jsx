import PropTypes from "prop-types";

import { FormBtn, FormInput, FormWrapper } from "./Form.styled";

export const Form = ({ harvestingFields }) => {
  

 

  const hendlerSubmit = (evt) => {
    evt.preventDefault();
    const recipient = evt.target.recipient.value;
    const amount = evt.target.amount.value;
    harvestingFields( recipient, amount)
    evt.target.reset()
  };

  return (
    <>
      <FormWrapper onSubmit={hendlerSubmit}>
        <FormInput placeholder="enter the wallet address" name="recipient" ></FormInput>
        <FormInput placeholder="enter the amount" name="amount" ></FormInput>
        <FormBtn type="submit">submit</FormBtn>
      </FormWrapper>
    </>
  );
};

Form.propTypes = {
  harvestingFields: PropTypes.func.isRequired,
};
