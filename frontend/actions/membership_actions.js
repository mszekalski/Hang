import * as membershipApiUtil from "../util/membership_api_util";

export const RECEIVE_ALL_MEMBERSHIPS = "RECEIVE_ALL_MEMBERSHIPS";
export const RECEIVE_MEMBERSHIP = "RECEIVE_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";
export const RECEIVE_MEMBERSHIP_ERRORS = "RECEIVE_MEMBERSHIP_ERRORS";
export const CLEAR_MEMBERSHIP_ERRORS = "CLEAR_MEMBERSHIP_ERRORS";

export const receiveAllMemberships = memberships => ({
  type: RECEIVE_ALL_MEMBERSHIPS,
  memberships
});

export const receiveMembership = membership => {
  return {
    type: RECEIVE_MEMBERSHIP,
    membership
  };
};

export const removeMembership = membershipId => {
  return {
    type: REMOVE_MEMBERSHIP,
    membershipId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_MEMBERSHIP_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_MEMBERSHIP_ERRORS
  };
};

export const fetchMemberships = () => dispatch =>
  membershipApiUtil
    .fetchMemberships()
    .then(memberships => dispatch(receiveAllMemberships(memberships)));

export const fetchMembership = id => dispatch => {
  return membershipApiUtil.fetchMembership(id).then(membership => {
    return dispatch(receiveMembership(membership));
  });
};

export const createMembership = membership => dispatch =>
  membershipApiUtil.createMembership(membership).then(
    membership => dispatch(receiveMembership(membership)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );

export const updateMembership = membership => dispatch =>
  membershipApiUtil
    .updateMembership(membership)
    .then(membership => dispatch(receiveMembership(membership)));

export const deleteMembership = membershipId => dispatch =>
  membershipApiUtil
    .deleteMembership(membershipId)
    .then(membership => dispatch(removeMembership(membershipId)));
