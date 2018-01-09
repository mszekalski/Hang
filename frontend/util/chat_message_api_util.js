export const fetchAllMessages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/chat_messages',
  })
);
