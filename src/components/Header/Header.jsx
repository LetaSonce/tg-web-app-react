import React from 'react';
import Button from '../Button/Button';
import WebApp from '@twa-dev/sdk';


const Header = () => {

  const onClose = () => {
    WebApp.close()
  }

  return (
    <div className={'header'}>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>
        {WebApp.initDataUnsafe?.user?.username}
      </span>
    </div>
  )
}

export default Header