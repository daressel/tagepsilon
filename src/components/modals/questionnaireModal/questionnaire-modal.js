import { memo, useState, useEffect } from 'react';
import QuestionnaireModalLayout from './questionnaire-modal.layout';
import { questionnaire } from '../../../core/config/questionnaire';

const QuestionnaireModal = () => {
  const [category, setCategory] = useState('main');
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const filteredQuestionnaire =
      category &&
      Object.fromEntries(
        Object.entries(questionnaire).filter(
          ([answer, answerDetails]) => answerDetails.from === category
        )
      );
    setAnswers(() => filteredQuestionnaire || []);
    console.log(filteredQuestionnaire);
  }, [category]);

  const clickAnswer = (answer) => {
    setCategory(answer);
  };

  const clickBack = () => {
    console.log(category);
    const updateCategory = questionnaire[category]?.from || 'main';
    setCategory(updateCategory);
  };

  const sendRequest = () => {
    console.log(questionnaire[category].displayName);
  };

  return (
    <QuestionnaireModalLayout
      answers={answers}
      clickAnswer={clickAnswer}
      clickBack={clickBack}
      sendRequest={sendRequest}
      selectedAnswer={questionnaire[category]}
    />
  );
};

export default memo(QuestionnaireModal);
