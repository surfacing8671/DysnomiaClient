/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Shio,
  Shio_LogEvent,
} from "generated";

Shio.LogEvent.handler(async ({ event, context }) => {
  const entity: Shio_LogEvent = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,  
    data: event.params.LogLine,
  };

  context.Shio_LogEvent.set(entity);
});

