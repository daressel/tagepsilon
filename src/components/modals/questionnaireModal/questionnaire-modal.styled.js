import styled from 'styled-components';
import colors from '../../../core/constants/colors';

export const QuestionnaireWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
`;

export const Title = styled.span``;

export const ActionsWrapper = styled.div``;

export const AnswersWrapper = styled.div``;

export const AnswerItem = styled.div`
  padding: 10px;
  width: 100%;
  margin: 15px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ selected }) => (selected ? `${colors.PrimaryBright}` : `${colors.Primary}`)};
  border-radius: 5px;
  background-color: ${({ selected }) => (selected ? `${colors.Primary}` : `${colors.White}`)};
  color: ${({ selected }) => (selected ? `${colors.White}` : `${colors.Primary}`)};
  cursor: pointer;
  transition: all 0.3s ease-out;
  &:hover {
    background-color: ${colors.Primary};
    border: 1px solid ${colors.PrimaryBright};
    color: ${colors.White};
  }
`;

export const SelectedAnswer = styled.span`
  align-self: center;
  font-size: 24px;
  margin: 20px 0%;
`;
