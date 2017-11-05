module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('post', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    weed_type: {
      type: DataTypes.STRING,
      allowNull: false
    },

    strain: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false
    },

    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },

    image: {
      type: DataTypes.String,
      allowNull: false,
      validate: {
        isUrl: true
      }
    }
  });

  Post.associate = function (models) {
    Post.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
};
