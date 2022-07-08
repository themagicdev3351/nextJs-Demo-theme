import React from 'react';
import dynamic from 'next/dynamic';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';
import SecurePage from '../../authentication/auth-page-wrappers/SecurePage';

const Chat = dynamic(() => import('../../modules/Apps/Chat'), {
  loading: () => <PageLoader />,
});

const ChatPage = () => (
  <SecurePage>
    <Chat />
  </SecurePage>
);

export default ChatPage;
