import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

const Notification = ({ notification, onClose }) => {
  if (!notification.show) return null;

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return <IoMdCheckmarkCircleOutline className="text-2xl text-green-500" />;
      case 'info':
        return <IoInformationCircleOutline className="text-2xl text-blue-500" />;
      default:
        return <IoInformationCircleOutline className="text-2xl text-blue-500" />;
    }
  };

  const getBgColor = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700';
      default:
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700';
    }
  };

  return (
    <div className="fixed top-20 right-4 z-50 animate-slideIn">
      <div className={`p-4 rounded-md shadow-md border ${getBgColor()} max-w-xs`}>
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium dark:text-white">{notification.message}</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
          >
            <IoCloseOutline className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

Notification.propTypes = {
  notification: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Notification;
