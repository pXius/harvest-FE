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

  return (
    <div>
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <input type="text" className="search-bar" placeholder="Search" />
                </div>
              </div>
            </div>
            <div className="inbox_chat scroll">
              <div className="chat_list active_chat">
                {threads === [] ? 'loading...' : listOfThreads}
              </div>
            </div>
          </div>
          <div className="mesgs"></div>
        </div>
      </div>
    </div>
  );
}

export default ThreadPage;
