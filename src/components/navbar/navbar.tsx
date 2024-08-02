import React, { useState } from 'react';
import Contacts from './contact';
import { RootState } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCollapse } from '../../redux/CollapseSlice';
import NewContactForm from './newContactsForm';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector((state: RootState) => state.collapse.isCollapsed);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleToggle = (): void => {
    dispatch(toggleCollapse());
  };

  const handleNewContact = (): void => {
    setIsFormVisible(true);
  };

  const handleCloseForm = (): void => {
    setIsFormVisible(false);
  };

  return (
    <div className={`contacts ${isCollapsed ? 'collapsed' : ''}`}>
      {!isCollapsed && (
        <div className='flex'>
          <button className="new-contact" onClick={handleNewContact}>
            + Новый контакт
          </button>
          {isFormVisible && <NewContactForm onClose={handleCloseForm} />}
          <Contacts />
        </div>
      )}
      <button className="unravel" onClick={handleToggle}>
        {isCollapsed ? '»' : '«'}
      </button>
    </div>
  );
};

export default Navbar;
