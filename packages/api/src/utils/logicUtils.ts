import * as generatePassword from 'password-generator';
import * as bcrypt from 'bcryptjs';
import { sendMail, TEmail } from './mailer';
import { CONF_MAILER__AUTH_USER, DEBUG_MODE, DEBUG_MODE__EMAIL } from '../consts';

// --- [[enbd]]
export const ENBD__EMAIL_NOT_EXISTS = 'enbd__email_not_exists';
export const ENBD__OTHER = 'enbd__other';

// ---

export function logicPasswordGenerate() {
  return generatePassword()
}

export async function logicPasswordHashedGenerate(): Promise<any> {
  const password = logicPasswordGenerate();
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (!err) {
          resolve({password, passwordHashed: hash})
        } else {
          reject(err)
        }
      });
    });
  });
}

export async function logicPasswordsHashedCompare(password: string, passwordHashed: string) {
  if (!password && !passwordHashed) {
    throw new Error('ERR*: 200909141300');
  }
  // ---
  return bcrypt.compare(password, passwordHashed)
}

export async function logicPasswordEmailSend(email: string, password: string) {
  let info;
  try {
    info = await sendMail(new TEmail({
        from: CONF_MAILER__AUTH_USER,
        to: DEBUG_MODE ? DEBUG_MODE__EMAIL : email,
        subject: 'USA CHECK SHOP - пароль доступа',
        text: `Ваш пароль: ${password}`,
        html: null
      }
    ))
  } catch (e) {
    console.log(e);
    if (e.message && e.message.includes('550 Message was not accepted')) {
      return {
        isSuccess: true,
        errors: [{code: ENBD__EMAIL_NOT_EXISTS, message: e.message}]
      }
    }
    return {
      isSuccess: false,
      errors: [{code: ENBD__OTHER, message: e.message}]
    }
  }
  return {isSuccess: true, errors: []}
}
