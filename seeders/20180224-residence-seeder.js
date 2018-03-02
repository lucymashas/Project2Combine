'use strict';

module.exports = {
	
		up: function(queryInterface, Sequelize) {

			return queryInterface.bulkInsert('residences', [
					{
						address1: 	'2317 Tiebout Ave',
						address2: '1',
						city: 'Bronx',
						state: 'NY',
						zip: '10458',
						userID: 'gmail',
						createdAt: '2008-01-18',
						updatedAt: '2009-02-14'
					}
			], {});
		},

		down: function(queryInterface, Sequelize) {

			return queryInterface.Delete('residences', null, {truncate: true})
		}

}

