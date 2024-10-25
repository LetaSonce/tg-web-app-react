import WebApp from '@twa-dev/sdk';

export function useTelegram() {

  const onClose = () => {
    WebApp.close()
  }

  const onToggleButton = () => {
    if(WebApp.MainButton.isVisible) {
      WebApp.MainButton.hide()
    } else {
      WebApp.MainButton.show()
    }
  }

  return {
    onClose,
    onToggleButton,
    WebApp,
    user: WebApp.initDataUnsafe?.user,
  }
}