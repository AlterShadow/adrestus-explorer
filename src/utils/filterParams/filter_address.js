import { TxPanelBodyParams } from "../constants/TxParams";

function filter_address(params) {
  let filter;
  filter = TxPanelBodyParams.filter(
    (item) => item.From.indexOf(params) >= 0 || item.To.indexOf(params) >= 0
  );
  if (filter !== undefined) return filter;
  else return [];
}

export default filter_address;
