import styled from 'styled-components';
import colors from '../../../core/constants/colors';

const getStatusColor = (props) => {
  console.log(props);
  const {
    statusFlags: { touched, error },
    value,
  } = props;

  const inputColors = {
    text: `${colors.Black}`,
    background: `${colors.White}`,
  };

  if (touched && value) {
    inputColors.text = `${colors.White}`;
    inputColors.background = error ? `${colors.Error}` : `${colors.Success}`;
  }

  return inputColors;
};

export const InputCustom = styled.input`
  outline: none !important;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${colors.White};
  color: ${(props) => getStatusColor(props).text};
  border-radius: 7px;
  background-color: ${(props) => getStatusColor(props).background};
`;

export const InputTextAreaCustom = styled.textarea`
  outline: none !important;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid ${colors.White};
  color: ${(props) => getStatusColor(props).text};
  border-radius: 7px;
  background-color: ${(props) => getStatusColor(props).background};
  resize: vertical;
  min-height: 40px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputCustomError = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 14px;
  color: ${colors.Error};
`;

export const InputCustomLabed = styled.span`
  color: ${colors.White};
  font-size: 20px;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  width: max(100%, 200px);
`;
