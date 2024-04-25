const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app"); // Import your Express app
const Subscriber = require("../src/models/subscribers"); // Import your model
const mongoose=require('mongoose')
const expect = chai.expect;
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("API Routes", () => {
  before(async () => {
    // Connect to a test database or perform any setup you need
    // This will depend on your testing environment and strategy
    await mongoose.connect('mongodb+srv://shekharsuman689:shekhar4050@cluster0.x2parrb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });
  
  after(async () => {
    // Disconnect from the test database or perform any cleanup
    await mongoose.disconnect();
  });

  describe("GET /subscribers", () => {
    it("should get all subscribers", (done) => {
      chai.request(app)
        .get("/subscribers")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          //res.body.length.should.be.eql(0); // Assuming no subscribers initially
          done();
        });
    });
  });

  describe("GET /subscribers/names", () => {
    it("should get subscribers by name and subscribedChannel", (done) => {
      chai.request(app)
        .get("/subscribers/names")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          // Add more assertions based on your expected response
          done();
        });
    });
  });

  describe('GET /subscribers/:id', () => {
    it('should get subscriber information by ID', async () => {
      // Fetch a subscriber document from the collection
      const subscriber = await Subscriber.findOne();

      // Make sure a subscriber document was found
      if (!subscriber) {
        throw new Error('No subscribers are found in the collection.');
      }

      // Get the _id from the fetched subscriber document
      const subscriberId = subscriber._id.toString();

      // Making the actual request using chai-http
      const response = await chai.request(app).get(`/subscribers/${subscriberId}`);
      
      // Assertions
      expect(response).to.have.status(200);
      expect(response.body).to.have.property('_id', subscriberId);
      // Add more assertions as needed
    });
  });
});
