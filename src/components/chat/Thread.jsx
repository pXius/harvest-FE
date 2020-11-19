import React from 'react';
import { Link } from 'react-router-dom';

function Thread({ thread }) {
  const senderMail = window.sessionStorage.getItem('userEmail');
  const receiverEmail = senderMail === thread.p1Email ? thread.p2Email : thread.p1Email;

  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Chatting with {receiverEmail}</h5>
        <Link
          to={{ pathname: `/chat/${thread.id}`, state: { thread } }}
          class="btn btn-primary">
          Open Chat
        </Link>
      </div>
    </div>
  );
}

export default Thread;
