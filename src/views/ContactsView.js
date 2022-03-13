import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { Puff } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { getLoading } from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import Section from 'components/Section';
import Form from 'components/Form';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(getLoading);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
        {isLoadingContacts && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Puff color="#7dcdff" />
          </div>
        )}
      </Section>
    </>
  );
}
