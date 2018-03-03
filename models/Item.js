'use strict';

        module.exports = function(sequelize,DataTypes) {

          var Item = sequelize.define("Item", {


                    name: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    
                    purch: {
                        type: DataTypes.DATE,
                        allowNull: false
                    },

                    value: {
                        type: DataTypes.DECIMAL(10,2),
                        allowNull: false
                    },
                    Loc: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    Member: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    Prodtype: {
                        type: DataTypes.STRING,
                        allowNull: false
                    }

             });


                return Item;

        };

