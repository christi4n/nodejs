import { expect } from "chai"
import sayHello from "../src/index"

describe('Test sample', function() {

    /* 1st test */
    describe('sayHello function', function() {
        it('should say Hello guys!', function() {
            const str = sayHello();
            expect(str).to.equal("Hello guys!");
        });
    });
}

);