'use strict';

module.exports = {
	
		up: function(queryInterface, Sequelize) {

			return queryInterface.bulkInsert('items', [
					{
					    name: 'IPhone8',
    					prodtype: 2,
    					purch: '2018-01-17',
    					value: '895.00',
    					loc: '1',
    					resid: 1,
    					memberid: 2,
    					userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
    				},
					{
                        name: 'Something Else',
                        prodtype: 2,
                        purch: '2018-01-17',
                        value: '700.00',
                        loc: '4',
                        resid: 1,
                        memberid: 2,
                        userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
                    },
                    {
					    name: 'IPhone8',
    					prodtype: 2,
    					purch: '2018-01-17',
    					value: '895.00',
    					loc: 1,
    					resid: 1,
    					memberid: 3,
    					userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
    				},

					{
					    name: 'IPhone8',
    					prodtype: 2,
    					purch: '2018-01-17',
    					value: '895.00',
    					loc: 1,
    					resid: 1,
    					memberid: 4,
    					userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
    				},
					{
					    name: 'IPhone8',
    					prodtype: 2,
    					purch: '2018-01-17',
    					value: '895.00',
    					loc: 1,
    					resid: 1,
    					memberid: 5,
    					userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
                    },

                    {
                        name: 'Bedroom Lamps',
                        prodtype: 3,
                        purch: '2018-01-17',
                        value: '895.00',
                        loc: 3,
                        resid: 1,
                        memberid: 4,
                        userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
                    },
                    {
                        name: 'Bedroom Set',
                        prodtype: 3,
                        purch: '2018-01-17',
                        value: '2500.00',
                        loc: 3,
                        resid: 1,
                        memberid: 5,
                        userID: 'gmail',
                        createdAt: '2018-01-17',
                        updatedAt: '2018-01-17'
                    }    


			], {} );
		},

		down: function(queryInterface, Sequelize) {

			return queryInterface.Delete('items', null, {truncate: true})
		}

}

