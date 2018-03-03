'use strict';

module.exports = function(sequelize,DataTypes) {

      var Residence = sequelize.define("Residence", {


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

        }     

      });



   return Residence;

};

