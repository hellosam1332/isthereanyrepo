/**
 * @generated SignedSource<<641c1416419d5e27461b7eae5855164a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryStar$data = {
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

(node as any).hash = "7184f9db581913d8e82e1f0c1b2e361e";

export default node;
