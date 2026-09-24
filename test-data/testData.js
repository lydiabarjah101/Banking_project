const testData = {

    login: {

        // Valid credentials of ParaBank demo application
        validUsername: 'john',
        validPassword: 'demo',

        // Invalid credentials used for negative testing
        invalidUsername: 'wronguser',
        invalidPassword: 'wrongpassword'
    },

    transfer: {

        // Valid amount used for fund transfer
        validAmount: '100',

        // Negative amount for negative testing
        negativeAmount: '-100',

        // Zero amount for negative testing
        zeroAmount: '0',

        // Large amount for insufficient balance testing
        insufficientAmount: '999999999'
    }
};

module.exports = testData;
  