
export const showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerText = message;
    
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, 5000);
  };
  