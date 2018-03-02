'use strict';

module.exports = {
	
		up: function(queryInterface, Sequelize) {

			return queryInterface.bulkInsert('locs', [
					{
						name: 	'Personal',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},

					{
						name: 	'Master Bedroom',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},

					{
						name: 	'Christinas Bedroom',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Anthony Bedroom',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Living Room',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Dining Room',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Kitchen',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Laundry Room',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},

					{
						name: 	'Family Room',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Attic',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					},
					{
						name: 	'Shed',
						resID: '1',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
					}
			], {} );
		},

		down: function(queryInterface, Sequelize) {

			return queryInterface.Delete('locs', null, {truncate: true})
		}


}
