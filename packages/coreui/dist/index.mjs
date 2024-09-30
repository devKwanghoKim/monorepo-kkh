var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// components/Button/Button.tsx
function Button(_a) {
  var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
  return <button {...props}>
    {children}
    {" 123"}
  </button>;
}
var Button_default = Button;
export {
  Button_default as Button
};
//# sourceMappingURL=index.mjs.map
