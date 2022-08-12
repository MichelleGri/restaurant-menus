const { db } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await db.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    // TODO - write test
    const testRestaurant = await Restaurant.create(seedRestaurant[0]);
    const { cuisine, location, name } = testRestaurant;
    expect({ cuisine, location, name }).toEqual(seedRestaurant[0]);
  });

  test("can create a Menu", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can find Restaurants", async () => {
    // TODO - write test
    const testRestaurant = await Restaurant.create(seedRestaurant[0]);
    const findRestaurant = await Restaurant.findOne({
      where: {
        name: "AppleBees",
      },
    });
    const { cuisine, location, name } = testRestaurant;
    expect(findRestaurant).toMatchObject({ cuisine, location, name });
  });

  test("can find Menus", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });

  test("can delete Restaurants", async () => {
    // TODO - write test
    expect("NO TEST").toEqual("EXPECTED DATA");
  });
});
