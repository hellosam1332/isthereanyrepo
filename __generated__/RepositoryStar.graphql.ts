/**
 * @generated SignedSource<<f767fac3c4f542c97afc88c30fbd3303>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryStar$data = {
  readonly id: string;
  readonly stargazers: {
    readonly totalCount: number;
  };
  readonly viewerHasStarred: boolean;
  readonly " $fragmentType": "RepositoryStar";
};
export type RepositoryStar$key = {
  readonly " $data"?: RepositoryStar$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryStar">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryStar",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
};

(node as any).hash = "d192d2b1f3cce0e5c61b2f646c19c6a2";

export default node;
