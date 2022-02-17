# faker-graphql

A simple Graphql API to gain mock data, powered by [faker-js](https://github.com/faker-js/faker).

Try it out: https://studio.apollographql.com/sandbox/explorer?endpoint=https://faker-graphql.vercel.app/api/graphql

## Usage

```sh
$ curl -sg 'https://faker-graphql.vercel.app/api/graphql?query={lorem{words}}' | jq .
{
  "data": {
    "lorem": {
      "words": "corrupti est repellat"
    }
  }
}
```

Or, you can specify seed and locale by query param.

```sh
$ curl -sg 'https://faker-graphql.vercel.app/api/graphql?seed=1000&locale=ja&query={name{firstName,lastName}}' | jq .
{
  "data": {
    "name": {
      "firstName": "結衣",
      "lastName": "木村"
    }
  }
}
```
