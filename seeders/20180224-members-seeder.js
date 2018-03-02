'use strict';

module.exports = {
	
		up: function(queryInterface, Sequelize) {

			return queryInterface.bulkInsert('members', [
					{
						name: 	'Common Usage',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17',
                        inactive: false
					},
					{
						name: 	'Pat',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17',
                        inactive: false
					},
					{
						name: 	'Ann Marie',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17',
                        inactive: false
					},
					{
						name: 	'Christina',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17',
                        inactive: false
					},
					{
						name: 	'Anthony',
						userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17',
                        inactive: false
					}
			], {} );
		},

		down: function(queryInterface, Sequelize) {

			return queryInterface.Delete('members', null, {truncate: true})
		}


}

