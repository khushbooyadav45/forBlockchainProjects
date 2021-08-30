var Name = artifacts.require("./Name.sol");

contract("Name", function(accounts) {
   var nameinstance;
    it("initializes with one user", function() {
        return Name.deployed().then(function(instance) {
          return instance.nameCount();
        }).then(function(count) {
          assert.equal(count, 1);
        });
      });
    


    it("initializes the user with correct name", function() {
      return Name.deployed().then(function(instance) {
        nameinstance=instance;
        return nameinstance.userDetail(1);
        }).then(function(userDetail) {
         assert.equal(userDetail[0], 1, "contains the correct id");
         assert.equal(userDetail[1], "Khushboo", "contains the correct name");
    }
    );
});
});