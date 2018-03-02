'use strict';

module.exports = function(sequelize,DataTypes) {

      var residence = sequelize.define("residence", {

        resID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        address1: {
            type: DataTypes.STRING,
            allowNull: false

        },
     
        address2: {
            type: DataTypes.STRING,
            allowNull: true

        },

        city: {
            type: DataTypes.STRING,
            allowNull: false

        },

        state: {
            type: DataTypes.STRING,
            allowNull: false

        },

        zip: {
            type: DataTypes.INTEGER,
            allowNull: false

        },

        userID: {
            type: DataTypes.STRING,
            allowNull: false

        }        

      });
 
return residence;

};

