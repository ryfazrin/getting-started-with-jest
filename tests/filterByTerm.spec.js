// import filterByTerm from "../src/filterByTerm"

const filterByTerm = require("../src/filterByTerm")

describe("Filter function", () => {
//   test("it should filter by a search term (link)", () => {
//     const input = [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.url2.dev" },
//       { id: 3, url: "https://www.link3.dev" }
//     ]

//     const expect = [{ id: 3, url: "https://www.link3.dev" }]

//     expect(filterByTerm(input, "link")).toEqual(expect)

//     // expect(filterByTerm(input, "dev")).toEqual(output)
//   })

//   test("it should filter by a search term (dev)", () => {
//     const data = [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.url2.dev" },
//       { id: 3, url: "https://www.link3.dev" }
//     ]

//     const expect = [{ id: 3, url: "https://www.link3.dev" }]

//     // expect(filterByTerm(input, "link")).toEqual(output)

//     expect(filterByTerm(data, "dev")).toEqual(expect)
//   })

//   // todo
//   // nothing match in url
//   test("it should filter by a search term (\"\")", () => {
//     const data = [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.url2.dev" },
//       { id: 3, url: "https://www.link3.dev" }
//     ]

//     const expect = [{ id: 3, url: "https://www.link3.dev" }]

//     // expect(filterByTerm(input, "link")).toEqual(output)

//     expect(filterByTerm(data, "")).toEqual(expect)
//   })

//   // todo
//   // null match in url
//   test("it should filter by a search term (\"\")", () => {
//     const data = [
//       { id: 1, url: "https://www.url1.dev" },
//       { id: 2, url: "https://www.url2.dev" },
//       { id: 3, url: "https://www.link3.dev" }
//     ]

//     const expect = [{ id: 3, url: "https://www.link3.dev" }]

//     // expect(filterByTerm(input, "link")).toEqual(output)

//     expect(filterByTerm(data, "dicoding")).toEqual(expect)
//   })

  // todo
  // number character match in url
  test("it should filter by a search term (3)", () => {
    const data = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ]

    const expected = [{ id: 3, url: "https://www.link3.dev" }]

    // expect(filterByTerm(input, "link")).toEqual(output)

    expect(filterByTerm.filterByTerm(data, 3)).toEqual(expected)
  })
})