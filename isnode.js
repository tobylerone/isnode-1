function isNode() {
  return typeof window !== "undefined" && window !== null && typeof module !== 'undefined' && module.exports;
};
