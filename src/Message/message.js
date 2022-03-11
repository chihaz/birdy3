import React from 'react'
import "./message.css"
import "../Profile/style.css"
function message() {
  return (
    <div>

   
    <div class="feed">
      <header>
       <div class="top-section">
          <span>Messages</span>
          <i class="fas fa-cog"></i>
        </div>
        <div class="header_name">Yask Patel</div>
        <div class="header_email">@yashpatel458</div>
      </header>
      <div className="msg_main">
        <div className="msg_box">
          <div className="msg_card">
            <div className="msg_actual">
              <div className="msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod numquam iure ex, alias ad quas debitis incidunt modi fugiat, unde inventore doloribus! Molestias eveniet at voluptatem nostrum quam quo!
              </div>
              <div className="msg_date_time">16 Sept 21, 17:30</div>
            </div>
          </div>
          <div className="msg_card_right">
            <div className="msg_actual_right">
              <div className="msg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod numquam iure ex!
              </div>
              <div className="msg_date_time">16 Sept 21, 17:30</div>
            </div>
          </div>
          <div className="msg_card">
            <div className="msg_actual">
              <div className="msg">
                okay, thats good!!!
              </div>
              <div className="msg_date_time">16 Sept 21, 17:30</div>
            </div>
          </div>
          <div className="msg_card_right">
            <div className="msg_actual_right">
              <div className="msg">
                Bye
              </div>
              <div className="msg_date_time">16 Sept 21, 17:30</div>
            </div>
          </div>
        </div>
        
        <span >
          
          <input className="msg_text_input" type='text' placeholder=' Type your message here'/>          
          <i className="material-icons">send</i>
          
        </span>
      </div>
    
    </div>
    
    </div>
  )
}

export default message