import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// ================= REGISTER (UNCHANGED ✅) =================
export const Register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // 1. Proper validation
    if (!fullname || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // 2.if user exits
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        success: false,
        message: "This email is already registered",
      });
    }

    // 3. Create password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user properly
    await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validation
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Incorrect email or password",
      });
    }

    // 3. Compare password 
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(403).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
     // 4. Authentication  
    const token = await jwt.sign({userId: user._id}, process.env.SECRET_KEY, {expiresIn:'1d'});
    // 4. Success response
    return res.status(200).cookie("token",token,{httpOnly:true, sameSite: "strict", maxAge: 24*60*60*1000}).json
    ({
      success: true,
      message: `Welcome back ${user.fullname}`,
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
// ================= LOGOUT =================
export const logout = async (_ ,res) => {
  try {
    return res.status(200).cookie("token", "",{maxAge:0}).json({
      success:true,
      message:"User logout successfully"
    })
  } catch (error) {
    console.log(error);
    
    
  }
}
