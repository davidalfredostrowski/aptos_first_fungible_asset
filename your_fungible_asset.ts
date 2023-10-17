// Copyright © Aptos Foundation
// SPDX-License-Identifier: Apache-2.0

import assert from "assert";
import fs from "fs";
import path from "path";
import { NODE_URL, FAUCET_URL } from "./common";
import {
  AptosAccount,
  TxnBuilderTypes,
  MaybeHexString,
  HexString,
  FaucetClient,
  Network,
  Types,
  Provider,
  FungibleAssetClient,
  CustomEndpoints,
} from "aptos";

/**
 This example depends on the FACoin.move module built with fungible asset having already been published to the destination blockchain.

 One method to do so is to use the CLI:
 * Acquire the Aptos CLI, see https://aptos.dev/cli-tools/aptos-cli/use-cli/ins
