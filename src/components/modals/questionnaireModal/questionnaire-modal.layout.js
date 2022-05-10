import { memo } from 'react';
import {
  ActionsWrapper,
  AnswerItem,
  AnswersWrapper,
  QuestionnaireWrapper,
  SelectedAnswer,
} from './questionnaire-modal.styled';
import { ButtonPrimary } from '../../ui/button/button.styled';

const QuestionnaireModalLayout = ({
  answers,
  clickAnswer,
  clickBack,
  sendRequest,
  selectedAnswer,
}) => {
  return (
    <>
      <QuestionnaireWrapper>
        {Object.keys(answers).length ? (
          <AnswersWrapper>
            {Object.entries(answers).map(([answerCategory, answerDetails], index) => {
              return (
                <AnswerItem
                  key={`${answerCategory}-${index}`}
                  onClick={() => clickAnswer(answerCategory)}
                >
                  {answerDetails.displayName}
                </AnswerItem>
              );
            })}
          </AnswersWrapper>
        ) : (
          <SelectedAnswer>{selectedAnswer?.displayName}</SelectedAnswer>
        )}
        <ActionsWrapper>
          {Object.values(answers).every((answer) => answer.from !== 'main') && (
            <ButtonPrimary onClick={clickBack}>Назад</ButtonPrimary>
          )}
          {!Object.keys(answers).length && (
            <ButtonPrimary onClick={sendRequest}>Отправить заявку</ButtonPrimary>
          )}
        </ActionsWrapper>
      </QuestionnaireWrapper>
    </>
  );
};

export default memo(QuestionnaireModalLayout);
