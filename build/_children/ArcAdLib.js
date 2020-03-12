"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _arcads = require("@product-hackers/arcads");

// eslint-disable-line

/**
 * Create an instance of the arc ads library to keep track of all the
 * ads that are being registered for DFP
 * https://github.com/washingtonpost/ArcAds
 * */
var ArcAdLib =
/*#__PURE__*/
function () {
  function ArcAdLib() {
    (0, _classCallCheck2["default"])(this, ArcAdLib);
  }

  (0, _createClass2["default"])(ArcAdLib, [{
    key: "registerAd",

    /**
     * Trying to put this intance of the ad on the page
     *
     * @param {Object} params the ad parameters
     * @param {Number} dfpID the google ads DFP ID
     * @param {Object} bidding and prebid information
     */
    value: function registerAd(params, dfpID, bidding) {
      // if we don't have an instance yet create one
      if (!this.adInstance) {
        this.adInstance = new _arcads.ArcAds({
          dfp: {
            id: dfpID
          },
          bidding: bidding
        });
      } // register the ad with the ArcAds library


      this.adInstance.registerAd(params);
    }
  }], [{
    key: "getInstance",

    /**
     * Return the single instance of ArcAds library
     *
     * @return {ArcAdLib} the static instance of ArcAds library
     * */
    value: function getInstance() {
      if (ArcAdLib.instance == null) {
        ArcAdLib.instance = new ArcAdLib();
      }

      return ArcAdLib.instance;
    }
  }]);
  return ArcAdLib;
}();

exports["default"] = ArcAdLib;
(0, _defineProperty2["default"])(ArcAdLib, "instance", void 0);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQXJjQWRMaWIiLCJwYXJhbXMiLCJkZnBJRCIsImJpZGRpbmciLCJhZEluc3RhbmNlIiwiQXJjQWRzIiwiZGZwIiwiaWQiLCJyZWdpc3RlckFkIiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFrRDs7QUFFbEQ7Ozs7O0lBS3FCQSxROzs7Ozs7Ozs7O0FBZW5COzs7Ozs7OytCQU9XQyxNLEVBQVFDLEssRUFBT0MsTyxFQUFTO0FBQ2pDO0FBQ0EsVUFBSSxDQUFDLEtBQUtDLFVBQVYsRUFBc0I7QUFDcEIsYUFBS0EsVUFBTCxHQUFrQixJQUFJQyxjQUFKLENBQVc7QUFDM0JDLFVBQUFBLEdBQUcsRUFBRTtBQUFFQyxZQUFBQSxFQUFFLEVBQUVMO0FBQU4sV0FEc0I7QUFFM0JDLFVBQUFBLE9BQU8sRUFBUEE7QUFGMkIsU0FBWCxDQUFsQjtBQUlELE9BUGdDLENBU2pDOzs7QUFDQSxXQUFLQyxVQUFMLENBQWdCSSxVQUFoQixDQUEyQlAsTUFBM0I7QUFDRDs7OztBQTlCRDs7Ozs7a0NBS3FCO0FBQ25CLFVBQUlELFFBQVEsQ0FBQ1MsUUFBVCxJQUFxQixJQUF6QixFQUErQjtBQUM3QlQsUUFBQUEsUUFBUSxDQUFDUyxRQUFULEdBQW9CLElBQUlULFFBQUosRUFBcEI7QUFDRDs7QUFDRCxhQUFPQSxRQUFRLENBQUNTLFFBQWhCO0FBQ0Q7Ozs7OztpQ0Fia0JULFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmNBZHMgfSBmcm9tIFwiQHByb2R1Y3QtaGFja2Vycy9hcmNhZHNcIjsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgYXJjIGFkcyBsaWJyYXJ5IHRvIGtlZXAgdHJhY2sgb2YgYWxsIHRoZVxuICogYWRzIHRoYXQgYXJlIGJlaW5nIHJlZ2lzdGVyZWQgZm9yIERGUFxuICogaHR0cHM6Ly9naXRodWIuY29tL3dhc2hpbmd0b25wb3N0L0FyY0Fkc1xuICogKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFyY0FkTGliIHtcbiAgc3RhdGljIGluc3RhbmNlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHNpbmdsZSBpbnN0YW5jZSBvZiBBcmNBZHMgbGlicmFyeVxuICAgKlxuICAgKiBAcmV0dXJuIHtBcmNBZExpYn0gdGhlIHN0YXRpYyBpbnN0YW5jZSBvZiBBcmNBZHMgbGlicmFyeVxuICAgKiAqL1xuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgaWYgKEFyY0FkTGliLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgIEFyY0FkTGliLmluc3RhbmNlID0gbmV3IEFyY0FkTGliKCk7XG4gICAgfVxuICAgIHJldHVybiBBcmNBZExpYi5pbnN0YW5jZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcnlpbmcgdG8gcHV0IHRoaXMgaW50YW5jZSBvZiB0aGUgYWQgb24gdGhlIHBhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtcyB0aGUgYWQgcGFyYW1ldGVyc1xuICAgKiBAcGFyYW0ge051bWJlcn0gZGZwSUQgdGhlIGdvb2dsZSBhZHMgREZQIElEXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBiaWRkaW5nIGFuZCBwcmViaWQgaW5mb3JtYXRpb25cbiAgICovXG4gIHJlZ2lzdGVyQWQocGFyYW1zLCBkZnBJRCwgYmlkZGluZykge1xuICAgIC8vIGlmIHdlIGRvbid0IGhhdmUgYW4gaW5zdGFuY2UgeWV0IGNyZWF0ZSBvbmVcbiAgICBpZiAoIXRoaXMuYWRJbnN0YW5jZSkge1xuICAgICAgdGhpcy5hZEluc3RhbmNlID0gbmV3IEFyY0Fkcyh7XG4gICAgICAgIGRmcDogeyBpZDogZGZwSUQgfSxcbiAgICAgICAgYmlkZGluZyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJlZ2lzdGVyIHRoZSBhZCB3aXRoIHRoZSBBcmNBZHMgbGlicmFyeVxuICAgIHRoaXMuYWRJbnN0YW5jZS5yZWdpc3RlckFkKHBhcmFtcyk7XG4gIH1cbn1cbiJdfQ==