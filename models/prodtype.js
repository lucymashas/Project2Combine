'use strict';

module.exports = function(sequelize,DataTypes) {

      var Prodtype = sequelize.define("Prodtype", {

        name: {
            type: DataTypes.STRING,
            allowNull: false

        }
     
      });



    return Prodtype;

};

