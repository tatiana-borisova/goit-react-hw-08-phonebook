import { useState } from 'react';
import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getItems } from 'redux/contacts/contacts-selectors';
import { onSubmitHandler } from 'redux/contacts/contacts-operations';
import s from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' && setName(value);
    name === 'number' && setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isNameHere = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    const isNumberHere = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase(),
    );

    if (isNameHere || isNumberHere) {
      alert(
        `${isNameHere ? name : ''} ${
          isNumberHere ? number : ''
        } is already in contacts`,
      );
    } else {
      dispatch(onSubmitHandler({ id: shortid.generate(), name, number }));
      toast.success('Contact was added!');
    }

    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default Form;
