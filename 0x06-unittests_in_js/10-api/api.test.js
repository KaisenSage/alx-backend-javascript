const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('API Tests', () => {

    describe('GET /available_payments', () => {
        it('should return the correct payment methods', (done) => {
            request(app)
                .get('/available_payments')
                .expect(200)
                .end((err, res) => {
                    expect(res.body).to.deep.equal({
                        payment_methods: {
                            credit_cards: true,
                            paypal: false
                        }
                    });
                    done();
                });
        });
    });

    describe('POST /login', () => {
        it('should return a welcome message with the correct username', (done) => {
            request(app)
                .post('/login')
                .send({ userName: 'Betty' })
                .set('Content-Type', 'application/json')
                .expect(200)
                .end((err, res) => {
                    expect(res.text).to.equal('Welcome Betty');
                    done();
                });
        });
    });
});

