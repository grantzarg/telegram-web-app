const tg = window.Telegram ? window.Telegram.WebApp : {};

export default function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
}
