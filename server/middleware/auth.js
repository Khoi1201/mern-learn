// check for access token before gain access to post
const jwt = require("jsonwebtoken");

// req.header = Authorization: Bearer tokenValue

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  // unauthorized
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Access token not found" });

  // verify the token received with secret access token
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // verify success - get userId from payload (I used userId as payload when sign access token)
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    // forbidden
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

module.exports = verifyToken;
