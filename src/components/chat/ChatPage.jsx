import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChatApi from '../../api/ChatApi';

function ChatPage() {
  const { state } = useLocation();
  const thread = state.thread;
  const { id } = useParams();
  const loggedInUser = window.sessionStorage.getItem('userEmail');
  const receiverEmail = loggedInUser === thread.p1Email ? thread.p2Email : thread.p1Email;
  const [messageText, setMessageText] = useState('');
  const [messageArray, setMessageArray] = useState(thread.thread);

  const sendMessage = async () => {
    try {
      const response = await ChatApi.createMessage(id, receiverEmail, {
        messageBody: messageText,
        thread: { id: id },
        date: format(new Date(), 'dd-MMM-yyyy HH:MM')
      });
      setMessageArray([...messageArray, response.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = e => {
    e.preventDefault();
    sendMessage();
  };

  useEffect(() => {
    const poll = setInterval(() => {
      const updateThread = async () => {
        const response = await ChatApi.getThreadById(id);
        setMessageArray(response.data.thread);
      };
      updateThread();
    }, 1000);
    return () => clearInterval(poll);
  }, [id]);

  const messages =
    messageArray === null
      ? null
      : messageArray.map(message => {
          if (message.senderEmail === loggedInUser) {
            return (
              <div key={message.id}>
                <div className="card text-white bg-primary mb-3">
                  {message.messageBody}
                </div>
                <p>{message.date}</p>
              </div>
            );
          } else {
            return (
              <div key={message.id}>
                <div className="card text-white bg-success mb-3">
                  {message.messageBody}
                </div>
                <p>{message.date}</p>
              </div>
            );
          }
        });

  return (
    <div className="card border-primary mb-3">
      <div className="card-header">Message Box</div>
      <div className="card-body text-dark">
        {messages}
        <form>
          <div className="form-group">
            <input
              onChange={e => setMessageText(e.target.value)}
              className="form-control"
              id="chatInput"
            />
          </div>
          <button onClick={handleClick} className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
