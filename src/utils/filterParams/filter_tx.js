import { TxPanelBodyParams } from "../constants/TxParams";

function filter_tx(params) {
  return TxPanelBodyParams.filter(
    (item) => item.Hash.indexOf(params) >= 0 && params
  )[0];
}

export default filter_tx;
