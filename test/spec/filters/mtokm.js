'use strict';

describe('Filter: mToKm', function () {

  // load the filter's module
  beforeEach(module('s3ChallengeApp'));

  // initialize a new instance of the filter before each test
  var mToKm;
  beforeEach(inject(function ($filter) {
    mToKm = $filter('mToKm');
  }));

  it('should return 8.18:"', function () {
    var m = 817993;
    expect(mToKm(m)).toBe(8.18);
  });

});
