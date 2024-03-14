import { BlockPanelBodyParams } from "../constants/BlockParams";

function filter_block(params) {
  let filter;
  filter = BlockPanelBodyParams.filter(
    (item) => item.Height.indexOf(params) >= 0 && params
  )[0];
  if (filter !== undefined) return filter;
  else return [];
}

export default filter_block;
