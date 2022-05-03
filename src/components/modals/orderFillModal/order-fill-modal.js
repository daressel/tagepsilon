import { memo } from 'react';
import OrderFillModalLayout from './order-fill-modal.layout';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { regExp } from '../../../core/constants/regexp';
import { sendMail } from '../../../core/mailer/mailer';

const OrderFillModal = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required('Заполните почту').email('Некорректная почта'),
    phone: yup.string().required('Заполните телефон').matches(regExp.isPhone, 'Некорректный номер'),
    clientName: yup.string().required('Заполните имя').max(30, 'Слишком длинное имя'),
    title: yup.string().required('Заполните тему').max(50, 'Слишком длинное название темы'),
    description: yup.string().max(400, 'Слишком длинное описание'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      clientName: '',
      title: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await sendMail(values);
      formik.setSubmitting(false);
    },
  });

  return (
    <>
      <OrderFillModalLayout formik={formik} />
    </>
  );
};

export default memo(OrderFillModal);
