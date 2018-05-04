export const fetchThreads = () =>
  $.ajax({
    method: "GET",
    url: "api/threads"
  });

export const fetchThread = id =>
  $.ajax({
    method: "GET",
    url: `api/threads/${id}`
  });

export const createThread = thread =>
  $.ajax({
    url: "api/threads",
    method: "POST",
    data: { thread }
  });

export const updateThread = thread =>
  $.ajax({
    url: `api/threads/${thread.id}`,
    method: "PATCH",
    data: { thread }
  });

export const deleteThread = id =>
  $.ajax({
    url: `api/threads/${id}`,
    method: "DELETE"
  });
