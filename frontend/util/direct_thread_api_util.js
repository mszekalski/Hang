export const fetchDirectThreads = () =>
  $.ajax({
    method: "GET",
    url: "api/direct_threads"
  });

export const fetchDirectThread = id =>
  $.ajax({
    method: "GET",
    url: `api/direct_threads/${id}`
  });

export const createDirectThread = (directThread, members) =>
  $.ajax({
    url: "api/direct_threads",
    method: "POST",
    data: { direct_thread: directThread, members: members }
  });

export const updateDirectThread = directThread =>
  $.ajax({
    url: `api/direct_threads/${direct_thread.id}`,
    method: "PATCH",
    data: { direct_thread: directThread }
  });

export const deleteDirectThread = id =>
  $.ajax({
    url: `api/direct_threads/${id}`,
    method: "DELETE"
  });
