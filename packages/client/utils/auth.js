import {
  CST_BACKEND_URL,
  CST_RESAUTH_OK,
  CST_RESAUTH_OTHER,
  CST_RESAUTH_UNAUTHORIZED,
  CST_AUTH_LS__TOKEN, CST_AUTH_LS__USERNAME
} from './consts';
import { get } from 'lodash';

/**
 * If success return object with access token (JWT)
 *
 * @param email
 * @param password
 * @return {Promise<any>} --
 *   or {access_token: '...'}
 *   or {statusCode: X, message: 'Y'} where X/Y example 401/Unauthorized
 *   or throw exception
 */
async function utilAuthLogin(email, password) {
  if (!email || !password) {
    throw new Error(`ERR*: ivalid email [${email}] or password [${password}] 200908095200`);
  }
  // ---
  const resp = await fetch(`${CST_BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: email, password })
  })
  return resp.json()
}

export function ResAuth(code, token) {
  this.code = code;
  this.token = token;
}

export async function utilAuthLoginB(email, password) {
  const res = await utilAuthLogin(email, password)
  // ---
  const jwtToken = get(res, 'access_token');
  const statusCode = get(res, 'statusCode');
  if (jwtToken) {
    localStorage.setItem(CST_AUTH_LS__TOKEN, jwtToken);
    localStorage.setItem(CST_AUTH_LS__USERNAME, email);
    return new ResAuth(CST_RESAUTH_OK, jwtToken);
  } else if (statusCode === 401) {
    return new ResAuth(CST_RESAUTH_UNAUTHORIZED)
  }
  return new ResAuth(CST_RESAUTH_OTHER)
}
