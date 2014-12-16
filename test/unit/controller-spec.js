'use strict';

describe('carArena Module', function() {

	var scope, controller, $httpBackend;
	
	beforeEach(module('carArena'));		
	beforeEach(inject(function($rootScope, _$httpBackend_, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend.expectGET('../../app/data/cars.json').respond('test');
			scope = $rootScope.$new();
			controller = $controller('carController', {$scope:scope});
		}));

		it('should contain a defined string property', function() {
			expect(scope.value).toBeDefined();
		});

		it ('typeof string property should be string', function () {
			expect(typeof(scope.value)).toEqual('string');
		});

		it('should contain a defined array property', function () {
			expect(scope.models).toBeDefined();			
		});

		it ('should ensure that models.length is greater than 2', function () {
			expect(scope.models.length).toBeGreaterThan(2);
		});

		it ('typeof array property should be object', function () {
			expect(typeof(scope.models)).toEqual('object');
		});

		it('should contain a defined boolean property', function () {
			expect(scope.title).toBeDefined();
		});

		it ('typeof boolean property should be boolean', function () {
			expect(typeof(scope.title)).toEqual('string');
		});

		it('should contain a defined image property', function () {
			expect(scope.image).toBeDefined();
		});

		it ('typeof image property should be number', function () {
			expect(typeof(scope.image)).toEqual('string');
		});

		it('should create "cars" model with data', function() {
			expect(scope.cars).toBeUndefined();
			$httpBackend.flush();

			expect(scope.cars).toEqual('test');
		});

});

