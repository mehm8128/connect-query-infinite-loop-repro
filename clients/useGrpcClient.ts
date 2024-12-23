import type {
  DescMessage,
  DescMethodUnary,
  DescService,
  MessageInitShape
} from '@bufbuild/protobuf'
import {
  useSuspenseQuery
} from '@connectrpc/connect-query'
import {
  type ConnectTransportOptions,
  createConnectTransport
} from '@connectrpc/connect-web'

export const useGrpcClient = () => {
  const baseTransport: ConnectTransportOptions = {
		baseUrl: "/api",
		useBinaryFormat: false,
	};

  const transport = createConnectTransport(baseTransport)

  const useConnectSuspenseQuery = <
    I extends DescMessage,
    O extends DescMessage
  >(
    schema: DescMethodUnary<I, O>,
    input?: MessageInitShape<I>
  ) => useSuspenseQuery(schema, input, { transport })

  return {
    useConnectSuspenseQuery,
  }
}
