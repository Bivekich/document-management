const Notification = ({ message, type }) => {
  if (!message) return null;

  const notificationStyle =
    type === 'success'
      ? 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative'
      : 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative';

  return (
    <div className={notificationStyle} role="alert">
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Notification;
