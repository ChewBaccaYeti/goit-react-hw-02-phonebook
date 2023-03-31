import PropTypes from 'prop-types';
import { ListItem, List } from '../ContactItem/ContactItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      <ListItem contacts={contacts} deleteContact={deleteContact} />
    </List>
  );
};

ContactList.propoTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
