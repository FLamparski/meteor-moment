// This is necessary to trick the language files to believe they are running in node 
(function(undefined) {

  var self;
  if (typeof Package === "undefined") {
    self = this;
  } else {
    self = Package["moment"];
  }

  if (this.require !== undefined) {
    this.__AC_OLD_REQUIRE = this.require;
  }
  this.require = function(packageName) {
    return self[packageName];
  }

  if (this.module !== undefined) {
    this.__AC_OLD_MODULE = this.module;
  }
  this.module = {};

}).call(this);
