import { FormBtn, FormInput, FormWrapper } from "./Form.styled";

export const Form = () => {
  return (
    <>
      <FormWrapper>
        <FormInput placeholder="enter the wallet address"></FormInput>
        <FormInput placeholder="enter the amount"></FormInput>
        <FormBtn type="submit">submit</FormBtn>
      </FormWrapper>
    </>
  );
};
