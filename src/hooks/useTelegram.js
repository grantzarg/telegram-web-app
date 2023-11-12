const tg = window.Telegram ? window.Telegram.WebApp : {};

export default function useTelegram() {
  const onClose = () => {
    tg.close();
  };
  console.log('tg', tg)
  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
}
