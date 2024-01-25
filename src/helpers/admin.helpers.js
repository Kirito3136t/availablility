const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { JWT_SECRET, JWT_EXPIRY, NM_USER, NM_PASS, NM_SERVICE } = process.env;

const config = {
  user: NM_USER,
  pass: NM_PASS,
};

const transporter = nodemailer.createTransport({
  service: NM_SERVICE,
  auth: {
    user: config.user,
    pass: config.pass,
  },
});

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

async function verifyPassword(plainPassword, hashedPassword) {
  return bcrypt.compare(plainPassword, hashedPassword);
}

function generateToken(admin) {
  const secretKey = JWT_SECRET; 
  return jwt.sign(
    {
      _id: admin._id,
      username: admin.username,
      email: admin.email,
      roles: admin.roles,
    },
    secretKey,
    { expiresIn: JWT_EXPIRY } // Token expires in 1 hour
  );
}

function addSession(token, expiresIn) {
  this.sessions.push({
    token,
    expiresAt: Date.now() + expiresIn,
  });
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

async function sendOTP(email, otp) {
  const mailOptions = {
    from: NM_USER,
    to: email,
    subject: 'OTP Verification',
    text: `Your OTP for verification is: ${otp}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${email}`);
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error.message);
    throw new Error(`Failed to send OTP to ${email}`);
  }
}

module.exports = {
  hashPassword,
  verifyPassword,
  generateToken,
  addSession,
  removeSession,
  sendOTP,
};