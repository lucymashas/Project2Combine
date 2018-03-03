'use strict';

module.exports = function(sequelize,DataTypes) {

    var Loc = sequelize.define("Loc", {
    
            name: {
                type: DataTypes.STRING,
                allowNull: false
            }
    });



    return Loc;
};