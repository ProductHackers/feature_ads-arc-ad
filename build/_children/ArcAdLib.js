"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _arcads = require("arcads");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQXJjQWRMaWIiLCJwYXJhbXMiLCJkZnBJRCIsImJpZGRpbmciLCJhZEluc3RhbmNlIiwiQXJjQWRzIiwiZGZwIiwiaWQiLCJyZWdpc3RlckFkIiwiaW5zdGFuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpQzs7QUFFakM7Ozs7O0lBS3FCQSxROzs7Ozs7Ozs7O0FBZW5COzs7Ozs7OytCQU9XQyxNLEVBQVFDLEssRUFBT0MsTyxFQUFTO0FBQ2pDO0FBQ0EsVUFBSSxDQUFDLEtBQUtDLFVBQVYsRUFBc0I7QUFDcEIsYUFBS0EsVUFBTCxHQUFrQixJQUFJQyxjQUFKLENBQVc7QUFDM0JDLFVBQUFBLEdBQUcsRUFBRTtBQUFFQyxZQUFBQSxFQUFFLEVBQUVMO0FBQU4sV0FEc0I7QUFFM0JDLFVBQUFBLE9BQU8sRUFBUEE7QUFGMkIsU0FBWCxDQUFsQjtBQUlELE9BUGdDLENBU2pDOzs7QUFDQSxXQUFLQyxVQUFMLENBQWdCSSxVQUFoQixDQUEyQlAsTUFBM0I7QUFDRDs7OztBQTlCRDs7Ozs7a0NBS3FCO0FBQ25CLFVBQUlELFFBQVEsQ0FBQ1MsUUFBVCxJQUFxQixJQUF6QixFQUErQjtBQUM3QlQsUUFBQUEsUUFBUSxDQUFDUyxRQUFULEdBQW9CLElBQUlULFFBQUosRUFBcEI7QUFDRDs7QUFDRCxhQUFPQSxRQUFRLENBQUNTLFFBQWhCO0FBQ0Q7Ozs7OztpQ0Fia0JULFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcmNBZHMgfSBmcm9tIFwiYXJjYWRzXCI7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIGFyYyBhZHMgbGlicmFyeSB0byBrZWVwIHRyYWNrIG9mIGFsbCB0aGVcbiAqIGFkcyB0aGF0IGFyZSBiZWluZyByZWdpc3RlcmVkIGZvciBERlBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS93YXNoaW5ndG9ucG9zdC9BcmNBZHNcbiAqICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcmNBZExpYiB7XG4gIHN0YXRpYyBpbnN0YW5jZTtcblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBzaW5nbGUgaW5zdGFuY2Ugb2YgQXJjQWRzIGxpYnJhcnlcbiAgICpcbiAgICogQHJldHVybiB7QXJjQWRMaWJ9IHRoZSBzdGF0aWMgaW5zdGFuY2Ugb2YgQXJjQWRzIGxpYnJhcnlcbiAgICogKi9cbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIGlmIChBcmNBZExpYi5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICBBcmNBZExpYi5pbnN0YW5jZSA9IG5ldyBBcmNBZExpYigpO1xuICAgIH1cbiAgICByZXR1cm4gQXJjQWRMaWIuaW5zdGFuY2U7XG4gIH1cblxuICAvKipcbiAgICogVHJ5aW5nIHRvIHB1dCB0aGlzIGludGFuY2Ugb2YgdGhlIGFkIG9uIHRoZSBwYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgdGhlIGFkIHBhcmFtZXRlcnNcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRmcElEIHRoZSBnb29nbGUgYWRzIERGUCBJRFxuICAgKiBAcGFyYW0ge09iamVjdH0gYmlkZGluZyBhbmQgcHJlYmlkIGluZm9ybWF0aW9uXG4gICAqL1xuICByZWdpc3RlckFkKHBhcmFtcywgZGZwSUQsIGJpZGRpbmcpIHtcbiAgICAvLyBpZiB3ZSBkb24ndCBoYXZlIGFuIGluc3RhbmNlIHlldCBjcmVhdGUgb25lXG4gICAgaWYgKCF0aGlzLmFkSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuYWRJbnN0YW5jZSA9IG5ldyBBcmNBZHMoe1xuICAgICAgICBkZnA6IHsgaWQ6IGRmcElEIH0sXG4gICAgICAgIGJpZGRpbmcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyByZWdpc3RlciB0aGUgYWQgd2l0aCB0aGUgQXJjQWRzIGxpYnJhcnlcbiAgICB0aGlzLmFkSW5zdGFuY2UucmVnaXN0ZXJBZChwYXJhbXMpO1xuICB9XG59XG4iXX0=