import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Label, Button } from './ContactForm.styled';
import { ContactsSchema, phoneNumberMask } from 'components/Utils/Validate';
import { nanoid } from 'nanoid';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const generateId = nanoid();

  return <Formik></Formik>;
};
