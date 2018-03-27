// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const Orders = require('../modules/orders/model');

// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp);
// Our parent block
describe('Orders', () => {
  beforeEach((done) => { // Before each test we empty the database
    Orders
      .fetchAll()
      .then((data) => {
        const promises = [];
        data.forEach(item => promises.push(item.destroy()));
        return Promise.all(promises);
      })
      .then((data) => {
        done();
      })
      .catch((err) => {
        console.log('err', err);
      });
  });
  /*
    * Test the /GET route
    */
  describe('/GET Order', () => {
    it('it should GET all the order', (done) => {
      chai.request(app)
        .get('/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
