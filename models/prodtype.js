'use strict';

module.exports = function(sequelize,DataTypes) {

      var prodtype = sequelize.define("prodtype", {

        PTID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        }
     

      });
 
return prodtype;

};

