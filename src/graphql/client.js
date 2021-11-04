import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

const headers = { "x-hasura-admin-secret": "instasenco" };

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: "wss://instagram-senco.herokuapp.com/v1/graphql",
    options: {
      reconnect: true,
      connectionParams: {
        headers,
      },
    },
  }),
  cache: new InMemoryCache(),
  
});

export default client;


// grahql - postgres://dgdpuyrrnujrkq:3cd165df5e7b2bfe2e3abba8fe9cc87434641c00c9a67957acc74a58252070a0@ec2-34-224-229-81.compute-1.amazonaws.com:5432/dar6j9pluaef1e
// database - postgres://upiktysnoxyulz:807b8a90cef0d68ca27bc17377fd1afbbea864b14a5ce0fdecc63bd85e11824b@ec2-34-225-162-157.compute-1.amazonaws.com:5432/d2s0ihtgkcofhb
// instasenco