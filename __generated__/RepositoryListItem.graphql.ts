/**
 * @generated SignedSource<<0e2508e55f7c866b6ad51f0884463fb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepositoryListItem$data = {
  readonly description: string | null;
  readonly name: string;
  readonly " $fragmentType": "RepositoryListItem";
};
export type RepositoryListItem$key = {
  readonly " $data"?: RepositoryListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepositoryListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "1765a54f02dd1a12917f396319833c93";

export default node;
