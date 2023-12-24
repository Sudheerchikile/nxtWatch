import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 90%;
  margin: auto;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  border-radius: 8px;
  background-color: white;
`

export const LoginWebsiteLogo = styled.img`
  width: 185px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #0b69ff;
  padding: 13px;
  padding-right: 20px;
  height: 50px;
  margin: 12px;
  color: #ffffff;

  font-size: 22px;
`

export const InputLabel = styled.label`
  font-size: 14px;

  outline: none;
`

export const UserNameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  width: 33vw;
  border: 1px solid grey;
  background-color: #e2e8f0;
  border-radius: 3px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  width: 33vw;
  border: 1px solid grey;
  background-color: #e2e8f0;
  border-radius: 3px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const ErrorMessage = styled.p`
  align-self: flex-start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  line-height: 16px;
  color: red;
`

export const ShowHideContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const CheckboxInput = styled.input`
  margin-right: 4px;
`
