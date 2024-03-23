import { Op } from "sequelize";
import { User } from "../sequelize.js";


class UserRepository {
  async findByUsernameOrEmail(name, email) {
    return User.findOne({
      where: {
        [Op.or]: [{ name }, { email }],
      },
    });
  }

  async findByEmail(email) {
    return User.findOne({ where: { email } });
  }

  async createUser(userData) {
    return User.create(userData);
  }

  async verifyEmail(verificationToken) {
    const user = await User.findOne({ where: { verificationToken } });

    if (!user) {
      throw new Error('Invalid verification token');
    }

    user.isVerified = true;

    await user.save();

    return true;
  }

  async saveVerificationToken(email, verificationToken) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    user.verificationToken = verificationToken;
    await user.save();

    return user;
  }
}

export default new UserRepository();
