/**
 * @generated SignedSource<<ff62126a6a0d9056c5f7a3e71103e92e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RemoveStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type RepositoryStarRemoveMutation$variables = {
  input: RemoveStarInput;
};
export type RepositoryStarRemoveMutation$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly " $fragmentSpreads": FragmentRefs<"RepositoryStar">;
    } | null;
  } | null;
};
export type RepositoryStarRemoveMutation = {
  response: RepositoryStarRemoveMutation$data;
  variables: RepositoryStarRemoveMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepositoryStarRemoveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RepositoryStar"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepositoryStarRemoveMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "viewerHasStarred",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "StargazerConnection",
                    "kind": "LinkedField",
                    "name": "stargazers",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "totalCount",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Repository",
                "abstractKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "05f2b9e74607f523bbbb4b206364cbcd",
    "id": null,
    "metadata": {},
    "name": "RepositoryStarRemoveMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryStarRemoveMutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      ...RepositoryStar\n      id\n    }\n  }\n}\n\nfragment RepositoryStar on Repository {\n  id\n  viewerHasStarred\n  stargazers {\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "a3c8badefd9d9763c1fd20ba32f550fd";

export default node;
