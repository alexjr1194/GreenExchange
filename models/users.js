module.exports = function (sequelize, DataTypes) {
  const Users = sequelize.define('users', {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: 3,
          msg: 'Name must be at least 3 characters long!'
        }
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'You must enter a valid email you stoner!'
        }
      }
    },

    location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    image: {
      type: DataTypes.String,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  });
  return Users;
};
