

export function useTelegram() {
    const tg = window.Telegram?.WebApp;
    if (!tg) {
        console.error("Telegram WebApp not initialized!");
        return { tg: null };
    }


    const onClose = () => {
        tg.close()
    }


    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }


    return {
        onClose,
        tg,
        user: tg.initDataUnsafe?.user,
        onToggleButton
    }
}