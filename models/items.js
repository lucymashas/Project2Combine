'use strict';

        module.exports = function(sequelize,DataTypes) {

          var items = sequelize.define("items", {

                    itemID: {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
                    },

                    name: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },

                    prodtype: {
                        type: DataTypes.INTEGER,
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

                    loc: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },

                    resid: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        defaultValue: 1
                    },

                    memberid: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },

                    userID: {
                        type: DataTypes.TEXT,
                        allowNull: false

                    }

              });

        return items;

        };
