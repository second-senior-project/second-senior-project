const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const nodemailer = require("nodemailer");

const db = require("../database/index.js");
const { JWT_SECRET } = require("../config.js");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "uuiteat@gmail.com",
//     pass: "Testid5796433hjkibbf",
//   },
// });

async function login(req, res) {
  const { username, password } = req.body;

  try {
    const seller = await db.Seller.findOne({ where: { username } });

    if (!seller) {
      return res.status(404).json({ message: "Seller not found" });
    }

    const isValidPassword = await bcrypt.compare(password, seller.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { sellerId: seller.id, role: seller.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token, seller, role: seller.role });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in" });
  }
}

async function register(req, res) {
  const { username, password, email } = req.body;

  try {
    async function isUserBlockedByUsername(username) {
      try {
        const user = await db.Seller.findOne({
          where: {
            username: username,
            deletedAt: { [Op.ne]: null }
          },
          paranoid: false
        });
    
        if (!user) {
          return false;
        }
    
        const blockedUser = await db.blockedModel.findOne({
          where: {
            userId: user.id
          }
        });
    
        return blockedUser !== null;
      } catch (error) {
        console.error('Error checking if user is blocked:', error);
        throw error;
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const seller = await db.Seller.create({
      username,
      password: hashedPassword,
      email,
    });

//     const mailOptions = {
//       from: "uuiteat@gmail.com",
//       to: seller.email,
//       subject: "Welcome to Housify",
//       text: `Dear ${seller.username},
      
// Thank you for registering with Housify! We are thrilled to have you as a member of our online community.

// Thank you again for joining us. We look forward to seeing you online!

// Best regards,

// Test
// Buy Sell Team
// `,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Email sent: " + info.response);
//       }
//     });

    return res.status(201).json({ message: "Seller created successfully", seller });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error registering seller" });
  }
}

module.exports = { login, register };
