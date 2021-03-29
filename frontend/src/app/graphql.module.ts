import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpHeaders } from '@angular/common/http';

//import { EnvServiceProvider } from '../core/services/env/env.service.provider';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

// const uri = EnvServiceProvider.useFactory().GRAPHQL_API + '/query';
// const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMjVDNTlBM0ItN0YzRi00RENELUI3RkQtQTRBNzA3MUQ1N0YxIiwidXNlcm5hbWUiOiJtYW5hZ2VyIiwibmFtZSI6Im1hbmFnZXIiLCJsYXN0bmFtZSI6Im1hbmFnZXIiLCJlbWFpbF9ub3RpZmljYXRpb25zIjoiamd1ZXJyZXJvQGUtY2FwdHVyZS5jbyIsImlkZW50aWZpY2F0aW9uX251bWJlciI6IjgwMTg4Mjg0IiwiaWRlbnRpZmljYXRpb25fdHlwZSI6IkMiLCJzdGF0dXMiOjEsImJsb2NrX2RhdGUiOiIyMDIwLTA5LTA5VDE1OjQ2OjM2LjE0WiIsImNoYW5nZV9wYXNzd29yZCI6ZmFsc2UsImlzX2Jsb2NrIjpmYWxzZSwiaXNfZGlzYWJsZWQiOmZhbHNlLCJyZWFsX2lwIjoiMTkxLjEwMi4xOTguMjAyIiwic2Vzc2lvbl9pZCI6IjkwNjRhOGJiLTNkNWEtNDczNC04YThmLTFlZWQ2MWZkMDIzZCIsImNvbG9ycyI6eyJwcmltYXJ5IjoiIzM1M0E0OCIsInNlY29uZGFyeSI6IiMwMzliZTUiLCJ0ZXJ0aWFyeSI6IiMyNjI5MzMifSwicm9sZXMiOlsiMzg4NTYyNzQtNTMxMS00MTczLTk3RDEtRkI3RTJDOEM5RTE2Il0sInByb2plY3RzIjpbIkRDRjg4Qzc2LTFBQjItNEM5RS05RDQ3LTJBRTUyMjkyMTkyQiIsIjZEMzhGQUU4LUEzNTgtNEY3Ny04RDcxLThDNDVGNEUzNTVDRCJdLCJjcmVhdGVkX2F0IjoiMjAyMC0wOC0xN1QwOTowOToxMC45ODdaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDktMDlUMTU6NDY6MzYuMTRaIn0sImlwX2FkZHJlc3MiOiIxOTEuMTAyLjE5OC4yMDIiLCJleHAiOjE2MDI2ODExNDcsImlzcyI6IkVjYXRjaC1CUE0ifQ.WmVXlT3wwwmXqshPiTea8gekudHhgeAiY0oeRAADfI8oo8OaHT_GyY6MEaDv2ImXzhP5BV0lxxHtO9hhpCfoTAepAkPfeFPHfHGumvvUthL3DgdNSW5riXld3R_mnXAWCctBpLhYto4Ah8ChZoKwyXV6ziOI9Kz4GWh5Ho86hpw`;
const token = `${sessionStorage.getItem('Token')}`;
const uri = 'http://localhost:50025/query'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): any {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));
  const httpLinkUri = httpLink.create({ uri });
  const auth = setContext((operation, context) => ({
    headers: new HttpHeaders().set(
      'Authorization',
      `Bearer ${sessionStorage.getItem('Token')}`
    ),
  }));

  const httpLinkWithErrorHandling = ApolloLink.from([
    errorLink,
    basic,
    auth,
    httpLinkUri,
  ]);

  return {
    link: httpLinkWithErrorHandling,
    cache: new InMemoryCache({
      addTypename: false,
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
    queryDeduplication: false,
  };
}

@NgModule({
  exports: [HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
