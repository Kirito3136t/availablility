const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { JWT_SECRET, JWT_EXPIRY, NM_USER, NM_PASS, NM_SERVICE } = process.env;

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function verifyPassword(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

function generateToken(user) {
  const secretKey = JWT_SECRET; 
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      
    },
    secretKey,
    { expiresIn: JWT_EXPIRY } // Token expires in 1 hour
  );
}

function addSession(token, expiresIn) {
  // Ensure that this.sessions is initialized as an array
  if (!this.sessions) {
    this.sessions = [];
  }
  
  // Push new session object into the sessions array
  this.sessions.push({
    token,
    expiresAt: Date.now() + expiresIn,
  });
  
  // Save the updated user object
  return this.save();
}

function removeSession(token) {
  const sessionIndex = this.sessions.findIndex(session => session.token === token);
    if (sessionIndex !== -1) {
        this.sessions.splice(sessionIndex, 1);
    } else {
        throw new Error("Session not found");
    }
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  addSession,
  removeSession,
  
};
