import { useMemo } from 'react';
import type { FetchFunction } from 'relay-runtime';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphGL';

let relayEnvironment: Environment;

const fetchRelay: FetchFunction = async (params, variables) => {
  const { name, text } = params;

  console.log(`fetch query ${name} with ${JSON.stringify(variables)}`);

  if (!text) {
    throw Error('Fetch relay failed. Text from request param is empty.');
  }

  return fetchGraphQL(text, variables);
};

const createEnvironment = () => {
  return new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  });
};

export type InitialRecords = ConstructorParameters<typeof RecordSource>[number];

export const initEnvironment = (initialRecords?: InitialRecords) => {
  const environment = relayEnvironment ?? createEnvironment();

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }

  // 서버 환경에서는 environment 가 싱글턴으로 동작하면 안된다.
  if (typeof window === 'undefined') {
    return environment;
  }

  if (!relayEnvironment) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
};

export const useEnvironment = (initialRecords: InitialRecords) => {
  return useMemo(() => initEnvironment(initialRecords), [initialRecords]);
};
