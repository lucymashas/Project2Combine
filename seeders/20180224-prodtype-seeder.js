'use strict';

module.exports = {
	
		up: function(queryInterface, Sequelize) {

			return queryInterface.bulkInsert('prodtypes', [

					{
						name: 	'Personal',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},

					{
						name: 	'Electronics',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Appliances',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Yard Tools',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Kitchen Utensils',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Health',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Office',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Patio',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Jewelry',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					}
			], {} );
		},

		down: function(queryInterface, Sequelize) {

			return queryInterface.Delete('prodtypes', null, {truncate: true})
		}

}

