import { memo } from 'react';
import { FormWrapper } from '../../ui/input/input.styled';
import { Title } from './order-fill-modal.styled';
import { FormikProvider } from 'formik';
import { FormikField } from '../../ui/input/input';
import { ButtonPrimary } from '../../ui/button/button.styled';

const OrderFillModalLayout = ({ formik }) => {
  return (
    <FormikProvider value={formik}>
      <Title>Оставить заявку</Title>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <FormikField name="email" type="email" displayName="Почта" withError />
        <FormikField name="phone" type="tel" displayName="Телефон" withError />
        <FormikField name="clientName" type="text" displayName="Имя" withError />
        <FormikField name="title" type="text" displayName="Тема" withError />
        <FormikField
          name="description"
          type="textarea"
          displayName="Описание"
          withLabel
          withError
        />
        <ButtonPrimary type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Отправляем заявку' : 'Отправить'}
        </ButtonPrimary>
      </FormWrapper>
    </FormikProvider>
  );
};

export default memo(OrderFillModalLayout);
