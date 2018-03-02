module.exports = function(sequelize, DataTypes) {
  var Session = sequelize.define("session", {
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
  return Session;
};
