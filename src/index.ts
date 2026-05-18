/**
 * @amlplugins/stability-edit
 *
 * Thin namespaced re-export of the native stability-ai SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Stability AI Edit — erase, inpaint, outpaint, search-and-replace, search-and-recolor, remove background.
 */

import * as _sdk from "stability-ai";
export * from "stability-ai";
export { _sdk as sdk };
export default _sdk;
