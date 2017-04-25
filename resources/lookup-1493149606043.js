(function(window, undefined) {
  var dictionary = {
    "f75a4c85-71e9-42be-8421-8637e6855201": "ADD_DP",
    "bc069e3c-d7e8-4eea-89ee-f394732cb431": "INT_GRU",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "PP",
    "b50c7ec1-ef10-4ec5-b3cd-d09fdc5046ed": "BT",
    "914c5af5-ca9c-4cf4-b51d-c986f3202629": "FOR",
    "950d68ce-06c3-4539-ac47-eb9b1b785d6d": "CAL",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);