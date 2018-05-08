export const fetchDirectThreads = () =>
  $.ajax({
    method: "GET",
    url: "api/directThreads"
  });

export const fetchDirectThread = id =>
  $.ajax({
    method: "GET",
    url: `api/directThreads/${id}`
  });

export const createDirectThread = directThread =>
  $.ajax({
    url: "api/directThreads",
    method: "POST",
    data: { directThread }
  });

export const updateDirectThread = directThread =>
  $.ajax({
    url: `api/directThreads/${directThread.id}`,
    method: "PATCH",
    data: { directThread }
  });

export const deleteDirectThread = id =>
  $.ajax({
    url: `api/directThreads/${id}`,
    method: "DELETE"
  });
