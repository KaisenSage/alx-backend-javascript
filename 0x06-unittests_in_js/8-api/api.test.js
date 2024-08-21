const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./api');
const should = chai.should();

chai.use(chaiHttp);

describe('GET /status', () => {
  it('it should return status ok', (done) => {
    chai.request(server)
      .get('/status')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('status').eql('ok');
        done();
      });
  });
});

