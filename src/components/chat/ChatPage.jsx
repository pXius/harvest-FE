import React from 'react';

function ChatPage() {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">Message Box</div>
      <div className="card-body text-dark">
        <div className="card text-white bg-primary mb-3">test</div>
        <div className="card text-white bg-success mb-3">test</div>
        <form>
          <div className="form-group">
            <input className="form-control" id="chatInput" />
          </div>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatPage;
