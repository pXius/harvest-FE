import React, { useEffect, useState } from 'react';
import ChatApi from '../../api/ChatApi';
import Thread from './Thread';

function ThreadPage() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const getThreads = async () => {
      const response = await ChatApi.getAllThread();
      setThreads(response.data);
    };
    getThreads();
  }, []);

  const listOfThreads = threads.map(thread => <Thread key={thread.id} thread={thread} />);

  return <div>{threads === [] ? 'loading...' : listOfThreads}</div>;
}

export default ThreadPage;
