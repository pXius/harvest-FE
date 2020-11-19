import React from 'react';
import { Link } from 'react-router-dom';

function Thread({ thread }) {
  const senderMail = window.sessionStorage.getItem('userEmail');
  const receiverEmail = senderMail === thread.p1Email ? thread.p2Email : thread.p1Email;
  const receiverMessage = thread.receiverMessage;

  // Massive Blue Boxes
  return (
    /* <div class="card bg-primary">
      <div class="card-body ">
        <h5 class="card-title">Chatting with {receiverEmail}</h5>
        <Link
          to={{ pathname: `/chat/${thread.id}`, state: { thread } }}
          class="btn btn-primary">
          Open Chat
        </Link>
      </div>
    </div> */

    <div className="inbox_people">
        <div className="headind_srch">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
          <input type="text" className="search-bar"  placeholder="Search" />
          </div>
        </div>
        </div>
        <div className="inbox_chat scroll">
        <div className="chat_list active_chat">
          <div className="chat_people">
          <div className="chat_img"> <img src="/images/sender.jpeg" alt="name"/> </div>
          <div className="chat_ib">
            <h5><Link to={{ pathname: `/chat/${thread.id}`, state: { thread } }}>{receiverEmail}</Link>  
            <span className="chat_date">Dec 25</span></h5>
            <p>{receiverMessage}</p>
          </div>
          </div>
        </div>
        </div>
	    </div>

  );
}

export default Thread;
