export const createMembership = membership =>
  $.ajax({
    url: "api/memberships",
    method: "POST",
    data: { membership }
  });

export const deleteMembership = id =>
  $.ajax({
    url: `api/memberships/${id}`,
    method: "DELETE"
  });
