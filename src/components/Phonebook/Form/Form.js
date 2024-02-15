import React from 'react';
import '../Form/form.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const personSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),

  number: yup.number().min(8).required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export function PhonebookForm({ state, onSubmit }) {
  const hendelSubmit = (values, actions) => {
    const dataContacts = state;
    const nameInput = values.name;

    const isContact = dataContacts.some(item => {
      return nameInput.toLowerCase() === item.name.toLowerCase();
    });

    if (!!isContact) {
      alert(`${nameInput} is already in contacts`);
      actions.resetForm();
    } else {
      onSubmit(values);
      actions.resetForm();
    }
  };
  return (
    <>
      <h1 className="phoneBookTitle">Phonebook</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={hendelSubmit}
        validationSchema={personSchema}
      >
        <Form className="form">
          <label className="label" htmlFor="name">
            Name
          </label>
          <Field className="input" type="text" name="name" />
          <ErrorMessage className="error" name="name" component="span" />

          <label className="label" htmlFor="number">
            Number
          </label>
          <Field className="input" type="tel" name="number" />
          <ErrorMessage className="error" name="number" component="span" />
          <button type="submit" className="btnSend">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
