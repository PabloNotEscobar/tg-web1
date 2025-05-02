import { useEffect } from 'react';

const useTelegram = () => {
    const tg = window.Telegram?.WebApp;

    useEffect(() => {
        // Динамическая загрузка SDK Telegram
        if (!window.Telegram) {
            const script = document.createElement('script');
            script.src = 'https://telegram.org/js/telegram-web-app.js';
            script.async = true;
            script.onload = () => {
                if (window.Telegram?.WebApp) {
                    window.Telegram.WebApp.ready();
                    window.Telegram.WebApp.expand();
                }
            };
            document.body.appendChild(script);
        } else if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
        }

        return () => {
            // Очистка при размонтировании
            const telegramScript = document.querySelector('script[src="https://telegram.org/js/telegram-web-app.js"]');
            if (telegramScript) document.body.removeChild(telegramScript);
        };
    }, []);

    return { tg };
};

export default useTelegram;