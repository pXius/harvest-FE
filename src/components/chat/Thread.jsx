import React from 'react';
import { Link } from 'react-router-dom';

function Thread({ thread }) {
  const senderMail = window.sessionStorage.getItem('userEmail');
  const receiverEmail = senderMail === thread.p1Email ? thread.p2Email : thread.p1Email;
  const receiverMessage = thread.receiverMessage;

  // Massive Blue Boxes
  return (
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
  );
}

export default Thread;
