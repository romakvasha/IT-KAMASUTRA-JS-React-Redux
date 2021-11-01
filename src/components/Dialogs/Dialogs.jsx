import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogsElement = props.dialogs.map((item) => (
    <DialogItem item={item} />
  ));

  const messagesElement = props.messages.map((item) => <Message item={item} />);

  const newMessageElement = React.createRef();

  const addMessage = () => {
    props.addMessage();
  };

  const onMessageChange = () => {
    const text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.messages}>
        <div>{messagesElement}</div>
        <div>
          <div>
            <textarea
              onChange={onMessageChange}
              ref={newMessageElement}
              value={props.newMessageText}
            />
          </div>
          <div>
            <button onClick={addMessage}>Add post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
