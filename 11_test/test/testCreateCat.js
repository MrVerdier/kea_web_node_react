const assert = require('chai').assert
let main = require('./../main.js')

describe("it creates a cat", () => {
    const createdCat = main.createCat('female')

    it('should create a cat', () => {
        assert.exists(createdCat)
    })

    it("should create a male cat", () => {
        assert.equal(createdCat.gender, 'female')
    })

    it('should have limbs', () => {
        assert.deepEqual(createdCat.limbs, ['leg', 'leg', 'leg', 'leg'])
        // equal compares objects
        // deepEqual compares values
    })

    it('should have a name', () => {
        assert.exists(createdCat.name)
    })

    it('should not have an owner', () => {
        // assert.isstring(createdCat.owner)
        assert.ok(!createdCat.owner, true)
    })

})