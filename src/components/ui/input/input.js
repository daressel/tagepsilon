import { Field } from 'formik';
import {
  InputCustom,
  InputTextAreaCustom,
  InputCustomError,
  InputWrapper,
  InputCustomLabed,
} from './input.styled';

export const FormikField = ({ name, displayName, type, withError }) => {
  return (
    <Field name={name}>
      {({ field, meta: { touched, error } }) => {
        return (
          <InputWrapper>
            {displayName && <InputCustomLabed>{displayName}</InputCustomLabed>}
            {type === 'textarea' ? (
              <InputTextAreaCustom statusFlags={{ touched, error }} {...field} />
            ) : (
              <InputCustom type={type} statusFlags={{ touched, error }} {...field} />
            )}
            {withError && touched && error && <InputCustomError>{error}</InputCustomError>}
          </InputWrapper>
        );
      }}
    </Field>
  );
};
