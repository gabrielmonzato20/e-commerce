import asyncHandler from "express-async-handler";
import User from "../domain/models/user.model.js";
import generateToken from "../utils/generateToken.js";
class UserService {
  //@desc Auth user and get token
  //@route  POST /api/users/login
  // @acess   Public
  authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error("User invalid or wrong password");
    }
  });

  //@desc GET USER PROFILE
  //@route  POST /api/users/profile
  // @acess   Private
  getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("User not found");
    }
  });
  //@desc Create  a new user
  //@route  POST /api/users
  // @acess   Public
  setUser = asyncHandler(async (req, res) => {
    const { email, password, name } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400);
      throw new Error(`User ${userExist.name} alredy in the base`);
    }
    const user = User.create({
      name,
      email,
      password,
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(404);
      throw new Error(`User not found or error in the system`);
    }
  });
  //@desc UPDATE USER PROFILE
  //@route  PUT /api/users/profile
  // @acess   Private
  updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
	  if (user) {
		  user.name = req.body.name || user.name ; 
		  user.email = req.body.email || user.email
		  if(req.body.password){
			user.password = req.body.password || user.password
		  }
		  const updateUser = await user.save()
      res.json({
        _id: updateUser._id,
        email: updateUser.email,
        name: updateUser.name,
	token: generateToken(user._id),
        isAdmin: user.isAdmin,

      });
    } else {
      res.status(401);
      throw new Error("User not found");
    }
  });
  //@desc GET USER PROFILE
  //@route  POST /api/users/profile
  // @acess   Private
  getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(401);
      throw new Error("User not found");
    }
  });
  
}

export default UserService;
