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
  console.log(`!!-!!-!! 1506-10 -> :::::::::::::: utilAuthLoginB() {210702150630}:${Date.now()}`); // del+
  const res = await utilAuthLogin(email, password)
  console.log('!!-!!-!! 1506-20 res {210702150647}\n', res); // del+
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

export async function utilAuthRegister(email, password) {
  console.log(`!!-!!-!! 1533-10 -> :::::::::::::: utilAuthRegister() {210702153332}:${Date.now()}`); // del+
  if (!email || !password) {
    throw new Error(`ERR*: ivalid email [${email}] or password [${password}] 20210702153200`);
  }
  // ---
  const resp = await fetch(`${CST_BACKEND_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username: email, password })
  });
  console.log('!!-!!-!! 1533-20 resp {210702153402}\n', resp); // del+
  return resp.json();
}
