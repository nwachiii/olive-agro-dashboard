import React from "react";
import { Link } from "react-router-dom";

function DemoChat() {
  return (
    <div className="content-i">
      <div className="content-box">
        <div
          className="floated-chat-btn"
          onClick={() => {
            <div className="floated-chat-w">
              <div className="floated-chat-i">
                <div className="chat-close">
                  <i className="os-icon os-icon-close"></i>
                </div>
                <div className="chat-head">
                  <div className="user-w with-status status-green">
                    <div className="user-avatar-w">
                      <div className="user-avatar">
                        <img alt="" src="img/avatar1.jpg" />
                      </div>
                    </div>
                    <div className="user-name">
                      <h6 className="user-title">John Mayers</h6>
                      <div className="user-role">Account Manager</div>
                    </div>
                  </div>
                </div>
                <div className="chat-messages">
                  <div className="message">
                    <div className="message-content">
                      Hi, how can I help you?
                    </div>
                  </div>
                  <div className="date-break">Mon 10:20am</div>
                  <div className="message">
                    <div className="message-content">
                      Hi, my name is Mike, I will be happy to assist you
                    </div>
                  </div>
                  <div className="message self">
                    <div className="message-content">
                      Hi, I tried ordering this product and it keeps showing me
                      error code.
                    </div>
                  </div>
                </div>
                <div className="chat-controls">
                  <input
                    className="message-input"
                    placeholder="Type your message here..."
                  />
                  <div className="chat-extra">
                    <Link to="/#">
                      <span className="extra-tooltip">Attach Document</span>
                      <i className="os-icon os-icon-documents-07"></i>
                    </Link>
                    <Link to="/#">
                      <span className="extra-tooltip">Insert Photo</span>
                      <i className="os-icon os-icon-others-29"></i>
                    </Link>
                    <Link to="/#">
                      <span className="extra-tooltip">Upload Video</span>
                      <i className="os-icon os-icon-ui-51"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>;
          }}
        >
          <i className="os-icon os-icon-mail-07"></i>
          <span>Demo Chat</span>
        </div>
      </div>
    </div>
  );
}

export default DemoChat;
