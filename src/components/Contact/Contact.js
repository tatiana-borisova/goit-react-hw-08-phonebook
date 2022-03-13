import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/contacts-operations';
import s from './Contact.module.css';

const Contact = ({ data }) => {
  const { name, number, id } = data;
  const dispatch = useDispatch();
  const forDeleteContact = id => {
    dispatch(deleteContact(id)) && toast.warning('Contact was deleted!');
  };

  return (
    <div className={s.contact}>
      <span className={s.name}>{name}:</span>
      <a className={s.number} href={`tel:${number}`}>
        {number}
      </a>
      <button
        className={s.button}
        type="button"
        onClick={() => forDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
