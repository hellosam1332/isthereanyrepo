/**
 * @generated SignedSource<<9187d540324daee0d1755db21976b01b>>
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
  readonly " $fragmentSpreads": FragmentRefs<"RepositoryStar">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "RepositoryStar"
    }
  ],
  "type": "Repository",
  "abstractKey": null
};

(node as any).hash = "6fd8e5acc027ccb869fadb003d0923cc";

export default node;
