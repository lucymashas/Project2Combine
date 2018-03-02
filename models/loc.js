'use strict';

module.exports = function(sequelize,DataTypes) {

    var loc = sequelize.define("loc", {
    
            locID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            resID: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 1
            },    
            userID: {
                type: DataTypes.TEXT,
                allowNull: true

            }
  });

  return loc;
};