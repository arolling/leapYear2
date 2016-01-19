describe('leapYear', function() {
  it("is false for a year that is not divisible by 4, 100, or 400", function() {
    expect(leapYear(1993)).to.equal(false);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
   });

  it("is false for years divisible by 100", function () {
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });

  it("is a word not a number", function() {
    expect(leapYear("tree")).to.equal("NaN");
  });

  it("is a blank field", function() {
    expect(leapYear("")).to.equal("empty");
  });

  it("is a negative number", function() {
    expect(leapYear(-2016)).to.equal("negative");
  });

  it("is a number more than 10,000", function() {
    expect(leapYear(11242)).to.equal("tooLarge");
  });

});
