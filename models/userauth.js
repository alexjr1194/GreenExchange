module.exports = function (sequelize, DataTypes) {
  const userAuth = sequelize.define('userAuth', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Please enter valid email'
        }
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: 6,
          msg: 'You password has to be more than 6 characters!'
        }
      }
    }
  });
  return userAuth;
};
