import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ChatApi from '../../api/ChatApi';
import { Link } from 'react-router-dom';

function ChatPage() {
  const { state } = useLocation();
  const thread = state.thread;
  const { id } = useParams();
  const loggedInUser = window.sessionStorage.getItem('userEmail');
  const receiverEmail = loggedInUser === thread.p1Email ? thread.p2Email : thread.p1Email;
  const [messageText, setMessageText] = useState('');
  const [messageArray, setMessageArray] = useState(thread.thread);
  const receiverMessage = thread.receiverMessage;

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

  /*   const messages = messageArray.map(message => {
    if (message.senderEmail === loggedInUser) {
      return (
        <div key={message.id}>
          <div className="card text-white bg-primary mb-3">{message.messageBody}</div>
          <p>{message.date}</p>
        </div>
      );
    } else {
      return (
        <div key={message.id}>
          <div className="card text-white bg-success mb-3">{message.messageBody}</div>
          <p>{message.date}</p>
        </div>
      );
    }
  }); */

  const messages =
    messageArray === null
      ? null
      : messageArray.map(message => {
          if (message.senderEmail === loggedInUser) {
            return (
              <div className="outgoing_msg" key={message.id}>
                <div className="sent_msg">
                  <p>{message.messageBody}</p>
                  <span className="time_date"> {message.date}</span>{' '}
                </div>
              </div>
            );
          } else {
            return (
              <div className="incoming_msg" key={message.id}>
                <div className="incoming_msg_img">
                  {' '}
                  <img src="/images/sender.jpeg" alt="name" />{' '}
                </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>{message.messageBody}</p>
                    <span className="time_date"> {message.date}</span>
                  </div>
                </div>
              </div>
            );
          }
        });

  return (
    /* <div className="card border-primary mb-3">
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
    </div> */

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
              <div className="chat_people">
                <div className="chat_img">
                  {' '}
                  <img src="/images/sender.jpeg" alt="name" />{' '}
                </div>
                <div className="chat_ib">
                  <h5>
                    <Link to={{ pathname: `/chat/${thread.id}`, state: { thread } }}>
                      {receiverEmail}
                    </Link>
                    <span className="chat_date">Dec 25</span>
                  </h5>
                  <p>{receiverMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mesgs">
          <div className="msg_history">{messages}</div>
          <div className="type_msg">
            <div className="input_msg_write">
              <input
                id="chatInput"
                type="text"
                className="write_msg"
                onChange={e => setMessageText(e.target.value)}
                placeholder="Type a message"
              />
              <button className="msg_send_btn" onClick={handleClick} type="button">
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
