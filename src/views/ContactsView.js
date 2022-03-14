import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { getLoading } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Section from 'components/Section';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Loader from 'components/Loader';
import s from './styles.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={s.container}>
      <Section title="Create a new Contact">
        <Form />
      </Section>

      <Section title="Your contacts">
        <Filter />
        <ContactList />
        {isLoadingContacts && <Loader />}
      </Section>
    </div>
  );
}
