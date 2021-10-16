const App = require("./App")

// @ponicode
describe("validateRoute", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["a1969970175", "a1969970175", 12], ["bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], [12, 12, 12345]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.validateRoute(["Edmond", "George", "Jean-Philippe"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.validateRoute(["Michael", "Pierre Edouard", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.validateRoute(["Michael", "Pierre Edouard", "Pierre Edouard"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.validateRoute(["Jean-Philippe", "Michael", "Edmond"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.validateRoute(["Anas", "Michael", "Anas"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.validateRoute(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("goTo", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["a1969970175", 987650, "a1969970175"], [56784, "bc23a9d531064583ace8f67dad60f6bb", 12], [12345, "bc23a9d531064583ace8f67dad60f6bb", 56784]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.goTo("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.goTo("https://api.telegram.org/bot")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.goTo("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.goTo("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.goTo("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.goTo(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("logout", () => {
    let object
    let inst

    beforeEach(() => {
        object = [[12, 12345, "bc23a9d531064583ace8f67dad60f6bb"], ["a1969970175", 987650, 12], ["a1969970175", "bc23a9d531064583ace8f67dad60f6bb", 56784]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.logout()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleAuthentication", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["bc23a9d531064583ace8f67dad60f6bb", "a1969970175", "a1969970175"], [12345, "bc23a9d531064583ace8f67dad60f6bb", "a1969970175"], ["bc23a9d531064583ace8f67dad60f6bb", 987650, "bc23a9d531064583ace8f67dad60f6bb"]]
        inst = new App.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleAuthentication({ location: { hash: "YouarenotAllowed2Use" } }, "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleAuthentication({ location: { hash: "NoWiFi4you" } }, "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.handleAuthentication({ location: { hash: "!Lov3MyPianoPony" } }, "foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.handleAuthentication({ location: { hash: "NoWiFi4you" } }, "Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.handleAuthentication({ location: { hash: "!Lov3MyPianoPony" } }, "Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.handleAuthentication(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
