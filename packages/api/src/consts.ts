require('dotenv').config();

console.log('BR: process.env.ENV_START_MODE=', process.env.ENV_START_MODE);

// [zego]-file
export const CONF_ZEGO_FILE = './src/gen/schema.gen.graphql';

// --- MongoDB
// SYNC [200902082800]
export const CONF_MONGO_IP = process.env.ENV_START_MODE === 'local' ? 'localhost' : 'xmongodb';
export const CONF_MONGO_PORT = '22081';
export const CONF_MONGO_DB_NAME = 'test';
export const CONF_MONGO_SUMMARY = `mongodb://${CONF_MONGO_IP}:${CONF_MONGO_PORT}/${CONF_MONGO_DB_NAME}`;

// --- Mongoose
// collection 'cards'
export const COLL_CARD = 'Card';
// collection 'users'
export const COLL_USER = 'User';
// collection 'tarifs'
export const COLL_TARIF = 'Tarif';
// collection 'orders'
export const COLL_ORDER = 'Order';
// collection 'products'
export const COLL_PRODUCT = 'Product';

// --- SYNC [[200903161300]]
export const ERR_CODE_DUP_KEY_EMAIL = 'err_code_dup_key_email';
export const ERR_CODE_INVALID_USER_EMAIL = 'err_invalid_user_email';

// --- [[vikw]]; SYNC [[200909113300]]
export const VIKW__EMAIL_INVALID = 'vikw__email_invalid';
export const VIKW__USER_NOT_FOUND = 'vikw__user_not_found';

// --- --- config
// at format see https://github.com/vercel/ms
export const CONF_JWT_TOKEN_EXPIRIES = '365 days';

// --- mailer
export const CONF_MAILER__HOST = 'smtp.mail.ru';
export const CONF_MAILER__PORT = 465;
export const CONF_MAILER__AUTH_USER = 'engdems@mail.ru';
export const CONF_MAILER__AUTH_PASSWORD = 's000999';

// --- ---
// --- debug
export const DEBUG_MODE = false;
export const DEBUG_MODE__EMAIL = 'xovate5704@stevefotos.com';

// --- [[rzxx]]
export const RZXX__PRODCAT = 'prodcat'
export const RZXX__PRODSUBCAT = 'prodsubcat'
export const RZXX__COSTTORUS = 'costShipToRusRub'
export const RZXX__COSTINRUS = 'costShipInRusRub'
export const RZXX__MARKUP = 'markupRub'
export const RZXX__WEIGHT = 'weightGramm'
export const RZXX__COMMENT = 'comment'
