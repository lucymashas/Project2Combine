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
                    }, {
                        classMethods: {
                        associate: function(models) {
                            // Each of the items has one of the  associated with it (key is stored on the devourer)
                            items.hasOne(models.member),
                            items.hasOne(models.prodtype),
                            items.hasOne(models.residence),
                            items.hasOne(model.loc)
                        }
                    }

              });

        return items;

        };
