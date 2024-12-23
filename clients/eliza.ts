import { useGrpcClient } from './useGrpcClient'
import { say } from '@/gen/connectrpc/eliza/v1/eliza-ElizaService_connectquery';

export const useFetchThreads = () => {
  const { useConnectSuspenseQuery } = useMessageClient();
  const { data } = useConnectSuspenseQuery(say);

  return data
}

export const useMessageClient = () => useGrpcClient();
