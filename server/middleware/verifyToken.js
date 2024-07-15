import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  try {
    const headers = req.headers.authorization;

    if (!headers) {
      return res.status(400).json({ message: "Token not provided" });
    }

    const token = headers.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "Invalid token format" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export default verifyToken;
