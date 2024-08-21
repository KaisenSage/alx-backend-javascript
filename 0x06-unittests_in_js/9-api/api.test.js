const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /ping', () => {
  it('it should return pong true', (done) => {
    chai.request(server)
      .get('/ping')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('pong').eql(true);
        done();
      });
  });
});

