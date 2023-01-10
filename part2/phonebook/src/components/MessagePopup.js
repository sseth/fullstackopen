const MessagePopup = ({ notif: [text, error] }) => {
  if (!text) return;

  const color = error ? 'red' : 'green';
  const styles = {
    color,
    width: 400,
    height: 40,
    marginBottom: 30,
    lineHeight: '40px',
    textAlign: 'center',
    background: 'lightGray',
    border: `3px solid ${color}`,
    borderRadius: 8,
  };

  return <div style={styles}>{text}</div>;
};

export default MessagePopup;
