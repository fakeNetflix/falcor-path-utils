var expect = require('chai').expect;
var pathUtils = require('..');
var collapse = pathUtils.collapse;

describe('collapse', function() {
        it('should parse strings to integer by default', function() {
                var result = collapse([['videosById', '1234', 'title']]);
                expect(result).to.deep.equals([['videosById', 1234, 'title']]);
        });

        it('should not parse strings to integer with option', function() {
                var result = collapse([['videosById', '1234', 'title']], {
                        parseInteger: false
                });
                expect(result).to.deep.equals(
                        [['videosById', '1234', 'title']]
                );
        });
});
