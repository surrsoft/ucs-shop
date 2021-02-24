"use strict";
import * as nodemailer from 'nodemailer';
import { CONF_MAILER__AUTH_PASSWORD, CONF_MAILER__AUTH_USER, CONF_MAILER__HOST, CONF_MAILER__PORT } from '../consts';

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
let testAccount;

// create reusable transporter object using the default SMTP transport
let transporter;

async function transporterGet() {
  if (!testAccount) {
    testAccount = await nodemailer.createTestAccount();
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: CONF_MAILER__HOST,
      port: CONF_MAILER__PORT,
      secure: true,
      auth: {
        user: CONF_MAILER__AUTH_USER,
        pass: CONF_MAILER__AUTH_PASSWORD
      }
    });
  }
  return transporter
}

/**
 *
 * @param email {TEmail}
 * @return {Promise<*>}
 */
export async function sendMail(email) {
  const tr = await transporterGet();
  return await tr.sendMail(email)
}

export class TEmail {
  from;
  to;
  subject;
  text;
  html;

  /**
   *
   * @param from
   * @param to -- example "bar@example.com, baz@example.com" (list of receivers)
   * @param subject
   * @param text -- plain text body
   * @param html -- html body
   */
  constructor({from, to, subject, text, html}) {
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.html = html;
  }
}
