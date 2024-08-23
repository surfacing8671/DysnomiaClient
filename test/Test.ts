import assert from "assert";
import { 
  TestHelpers,
  Shio_LogEvent
} from "generated";
const { MockDb, Shio } = TestHelpers;

describe("Shio contract LogEvent event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Shio contract LogEvent event
  const event = Shio.LogEvent.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Shio_LogEvent is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Shio.LogEvent.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualShioLogEvent = mockDbUpdated.entities.Shio_LogEvent.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedShioLogEvent: Shio_LogEvent = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      Soul: event.params.Soul,
      Aura: event.params.Aura,
      LogLine: event.params.LogLine,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualShioLogEvent, expectedShioLogEvent, "Actual ShioLogEvent should be the same as the expectedShioLogEvent");
  });
});
