const { createExpression, getExpression } = require('@perspect3vism/ad4m-test')

describe("Expression", () => {
  it("Can Create & Get Expression", async () => {
    const exp = await createExpression("{\"value\": \"hello world!\"}");
    console.log("Created exp with result", exp);

    expect(exp).not.toBeNull()

    const fetched = await getExpression(exp);
    console.log("Got expression with result", fetched);

    expect(fetched).not.toBeNull()
  })
})