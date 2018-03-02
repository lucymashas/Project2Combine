'use strict';

module.exports = function(sequelize,DataTypes) {

      var member = sequelize.define("member", {

            memID: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false

            },

            userID: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            inactive: {
                type: DataTypes.BOOLEAN,
                allowNull: true, 
                defaultValue: false
            }
     

      });
 
return member;

};

