import { useGrpcClient } from './useGrpcClient'
import { say } from '@/gen/connectrpc/eliza/v1/eliza-ElizaService_connectquery';

export const useFetchEliza = () => {
	const { useConnectSuspenseQuery } = useElizaClient();
	const { data } = useConnectSuspenseQuery(say);

	return data;
};

export const useElizaClient = () => useGrpcClient();
