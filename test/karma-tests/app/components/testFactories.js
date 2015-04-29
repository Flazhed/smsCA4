describe('CA4App.factories', function () {

  beforeEach(module('CA4App.factories'));

  describe('InfoFactory', function () {
    var infoFactory;
    beforeEach(inject(function (_InfoFactory_) {
      infoFactory = _InfoFactory_;
    }));

    it('Should be Hello World from a Factory', function () {
      expect(infoFactory.getInfo()).toBe("Hello World from a Factory");
    });
  });


  describe('XXXFactory', function () {

  });
});