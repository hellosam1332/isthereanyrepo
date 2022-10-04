/**
 * @generated SignedSource<<8d5dec918033cd8b96ec34043b78409f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AddStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type RepositoryStarAddMutation$variables = {
  input: AddStarInput;
};
export type RepositoryStarAddMutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly " $fragmentSpreads": FragmentRefs<"RepositoryStar">;
    } | null;
  } | null;
};
export type RepositoryStarAddMutation = {
  response: RepositoryStarAddMutation$data;
  variables: RepositoryStarAddMutation$variables;
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
    "name": "RepositoryStarAddMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
    "name": "RepositoryStarAddMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
    "cacheID": "796b366b0b7f8ef2fe8e90e23df512f5",
    "id": null,
    "metadata": {},
    "name": "RepositoryStarAddMutation",
    "operationKind": "mutation",
    "text": "mutation RepositoryStarAddMutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      ...RepositoryStar\n      id\n    }\n  }\n}\n\nfragment RepositoryStar on Repository {\n  id\n  viewerHasStarred\n  stargazers {\n    totalCount\n  }\n}\n"
  }
};
})();

(node as any).hash = "5503f243b9731295089af66a95f0c1ff";

export default node;
