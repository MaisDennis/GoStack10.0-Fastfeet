export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signInFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE'
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT'
  };
}

export function menuHighlight(num) {
  return {
    type: '@menu/HIGHLIGHT',
    payload: { num },
  };
}

export function cover(data) {
  return {
    type: '@cover/COVER',
    payload: { data },
  };
}

export function unCover() {
  return {
    type: '@cover/UNCOVER',
  };
}
