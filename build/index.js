"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ArcAdLib = _interopRequireDefault(require("./_children/ArcAdLib"));

/**
 * Create an arc ad component
 * using the arc ads library. Documentation on
 * configuration settings that can be passed to the library are availabie here:
 * https://github.com/washingtonpost/ArcAds
 * */
var ArcAd =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(ArcAd, _Component);

  /**
   * Default constructor that also maintains
   * the state for the ad instance
   * */
  function ArcAd(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArcAd);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ArcAd).call(this, props));
    _this.state = {
      arcads: null
    };
    return _this;
  }
  /**
   * Register the arcAds library when the component mounts
   * and update the state of the component
   * */


  (0, _createClass2["default"])(ArcAd, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // pull out all the configrations from props
      var _this$props = this.props,
          id = _this$props.id,
          slotName = _this$props.slotName,
          dimensions = _this$props.dimensions,
          display = _this$props.display,
          breakpoints = _this$props.breakpoints,
          adType = _this$props.adType,
          refresh = _this$props.refresh,
          targeting = _this$props.targeting,
          dfpId = _this$props.dfpId,
          bidding = _this$props.bidding; // create the prerenderer callback if there is one

      window.arcAdsPrerenderer = function (adDetails) {
        return new Promise(function (resolve) {
          if (_this2.props.prerender) {
            _this2.props.prerender(adDetails);
          }

          resolve(adDetails);
        });
      };
      /**
       * if we successfully have an static instance of the arc ads library then
       * register this ad with the library and pass in the configurations
       * */


      var instance = _ArcAdLib["default"].getInstance();

      if (instance) {
        instance.registerAd({
          id: id,
          slotName: slotName,
          dimensions: dimensions,
          adType: adType,
          display: display,
          targeting: targeting,
          sizemap: {
            breakpoints: breakpoints,
            refresh: refresh
          },
          bidding: bidding,
          prerender: window.arcAdsPrerenderer
        }, dfpId, bidding);
      }
    }
    /**
     * Render this instance of the ad
     * with the option to put additional children above or
     * below the actual ad (ie adding in ADVERTISEMENT text)
     * */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          childrenPosition = _this$props2.childrenPosition,
          children = _this$props2.children,
          dfpId = _this$props2.dfpId,
          slotName = _this$props2.slotName,
          isAmp = _this$props2.isAmp,
          ampLayout = _this$props2.ampLayout,
          targeting = _this$props2.targeting;

      if (isAmp) {
        var height = ampLayout.height,
            width = ampLayout.width,
            layout = ampLayout.layout,
            multiSize = ampLayout.multiSize;
        return _react["default"].createElement("div", {
          className: className
        }, childrenPosition === "top" ? children : "", _react["default"].createElement("amp-ad", {
          width: width,
          height: height,
          layout: layout,
          type: "doubleclick",
          "data-slot": "/".concat(dfpId, "/").concat(slotName),
          "data-multi-size": multiSize,
          "data-multi-size-validation": "false",
          json: "{\"targeting\": ".concat(JSON.stringify(targeting), "}")
        }), childrenPosition === "bottom" ? children : "");
      }

      return _react["default"].createElement("div", {
        className: className
      }, childrenPosition === "top" ? children : "", _react["default"].createElement("div", {
        id: id,
        className: "".concat(slotName, " arcad")
      }), childrenPosition === "bottom" ? children : "");
    }
  }]);
  return ArcAd;
}(_react.Component);

var stringOrNumber = _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]);

var ampLayout = _propTypes["default"].shape({
  layout: _propTypes["default"].string,
  width: stringOrNumber,
  height: stringOrNumber,
  multiSize: _propTypes["default"].string
});

ArcAd.propTypes = {
  id: _propTypes["default"].string,
  // unique ID for this ad
  dfpId: _propTypes["default"].number,
  // publishing DFP id number
  children: _propTypes["default"].node,
  // any values you want to go inside the ad container
  childrenPosition: _propTypes["default"].oneOf(["top", "bottom"]),
  // position of any children that go inside the ad container
  className: _propTypes["default"].string,
  // class styles for the ad container
  slotName: _propTypes["default"].string.isRequired,
  // slot name for this ad
  dimensions: _propTypes["default"].array,
  // the reponsive ad sizes for the different breakpoints
  display: _propTypes["default"].oneOf(["mobile", "desktop", "all"]),
  // the type of ad this is for
  breakpoints: _propTypes["default"].array,
  // the different screen sizes to use as breakpoints
  refresh: _propTypes["default"].bool,
  // whether or not to refresh the ad for mobile breakpoint changes
  adType: _propTypes["default"].string,
  // the type of ad
  targeting: _propTypes["default"].object,
  // key/value pairs attached to the ad request
  bidding: _propTypes["default"].object,
  // info about the bidding vendors
  prerender: _propTypes["default"].func,
  // a function to fire before the ad loads
  isAmp: _propTypes["default"].bool,
  ampLayout: ampLayout
};
ArcAd.defaultProps = {
  isAmp: false,
  ampLayout: {
    width: 300,
    height: 250,
    layout: "responsive",
    multiSize: "300x150,300x100,300x75,300x50"
  },
  refresh: true,
  display: "all",
  bidding: {},
  dimensions: [0, 0]
};
var _default = ArcAd;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQXJjQWQiLCJwcm9wcyIsInN0YXRlIiwiYXJjYWRzIiwiaWQiLCJzbG90TmFtZSIsImRpbWVuc2lvbnMiLCJkaXNwbGF5IiwiYnJlYWtwb2ludHMiLCJhZFR5cGUiLCJyZWZyZXNoIiwidGFyZ2V0aW5nIiwiZGZwSWQiLCJiaWRkaW5nIiwid2luZG93IiwiYXJjQWRzUHJlcmVuZGVyZXIiLCJhZERldGFpbHMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInByZXJlbmRlciIsImluc3RhbmNlIiwiQXJjQWRMaWIiLCJnZXRJbnN0YW5jZSIsInJlZ2lzdGVyQWQiLCJzaXplbWFwIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW5Qb3NpdGlvbiIsImNoaWxkcmVuIiwiaXNBbXAiLCJhbXBMYXlvdXQiLCJoZWlnaHQiLCJ3aWR0aCIsImxheW91dCIsIm11bHRpU2l6ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJDb21wb25lbnQiLCJzdHJpbmdPck51bWJlciIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsInNoYXBlIiwicHJvcFR5cGVzIiwibm9kZSIsIm9uZU9mIiwiaXNSZXF1aXJlZCIsImFycmF5IiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7SUFNTUEsSzs7Ozs7QUFDSjs7OztBQUlBLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsaUhBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsTUFBTSxFQUFFO0FBREcsS0FBYjtBQUhpQjtBQU1sQjtBQUVEOzs7Ozs7Ozt3Q0FJb0I7QUFBQTs7QUFDbEI7QUFEa0Isd0JBYWQsS0FBS0YsS0FiUztBQUFBLFVBR2hCRyxFQUhnQixlQUdoQkEsRUFIZ0I7QUFBQSxVQUloQkMsUUFKZ0IsZUFJ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QjtBQUN2Q3hDLEVBQUFBLFVBQVUsRUFBRWdDLHNCQUFVUyxLQVBOO0FBT2E7QUFDN0J4QyxFQUFBQSxPQUFPLEVBQUUrQixzQkFBVU8sS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLEtBQXRCLENBQWhCLENBUk87QUFRd0M7QUFDeERyQyxFQUFBQSxXQUFXLEVBQUU4QixzQkFBVVMsS0FUUDtBQVNjO0FBQzlCckMsRUFBQUEsT0FBTyxFQUFFNEIsc0JBQVVVLElBVkg7QUFVUztBQUN6QnZDLEVBQUFBLE1BQU0sRUFBRTZCLHNCQUFVRSxNQVhGO0FBV1U7QUFDMUI3QixFQUFBQSxTQUFTLEVBQUUyQixzQkFBVVcsTUFaTDtBQVlhO0FBQzdCcEMsRUFBQUEsT0FBTyxFQUFFeUIsc0JBQVVXLE1BYkg7QUFhVztBQUMzQjlCLEVBQUFBLFNBQVMsRUFBRW1CLHNCQUFVWSxJQWRMO0FBY1c7QUFDM0J0QixFQUFBQSxLQUFLLEVBQUVVLHNCQUFVVSxJQWZEO0FBZ0JoQm5CLEVBQUFBLFNBQVMsRUFBVEE7QUFoQmdCLENBQWxCO0FBbUJBN0IsS0FBSyxDQUFDbUQsWUFBTixHQUFxQjtBQUNuQnZCLEVBQUFBLEtBQUssRUFBRSxLQURZO0FBRW5CQyxFQUFBQSxTQUFTLEVBQUU7QUFDVEUsSUFBQUEsS0FBSyxFQUFFLEdBREU7QUFFVEQsSUFBQUEsTUFBTSxFQUFFLEdBRkM7QUFHVEUsSUFBQUEsTUFBTSxFQUFFLFlBSEM7QUFJVEMsSUFBQUEsU0FBUyxFQUFFO0FBSkYsR0FGUTtBQVFuQnZCLEVBQUFBLE9BQU8sRUFBRSxJQVJVO0FBU25CSCxFQUFBQSxPQUFPLEVBQUUsS0FUVTtBQVVuQk0sRUFBQUEsT0FBTyxFQUFFLEVBVlU7QUFXbkJQLEVBQUFBLFVBQVUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKO0FBWE8sQ0FBckI7ZUFjZU4sSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBBcmNBZExpYiBmcm9tIFwiLi9fY2hpbGRyZW4vQXJjQWRMaWJcIjtcblxuLyoqXG4gKiBDcmVhdGUgYW4gYXJjIGFkIGNvbXBvbmVudFxuICogdXNpbmcgdGhlIGFyYyBhZHMgbGlicmFyeS4gRG9jdW1lbnRhdGlvbiBvblxuICogY29uZmlndXJhdGlvbiBzZXR0aW5ncyB0aGF0IGNhbiBiZSBwYXNzZWQgdG8gdGhlIGxpYnJhcnkgYXJlIGF2YWlsYWJpZSBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL3dhc2hpbmd0b25wb3N0L0FyY0Fkc1xuICogKi9cbmNsYXNzIEFyY0FkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIERlZmF1bHQgY29uc3RydWN0b3IgdGhhdCBhbHNvIG1haW50YWluc1xuICAgKiB0aGUgc3RhdGUgZm9yIHRoZSBhZCBpbnN0YW5jZVxuICAgKiAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhcmNhZHM6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciB0aGUgYXJjQWRzIGxpYnJhcnkgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xuICAgKiBhbmQgdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAqICovXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIHB1bGwgb3V0IGFsbCB0aGUgY29uZmlncmF0aW9ucyBmcm9tIHByb3BzXG4gICAgY29uc3Qge1xuICAgICAgaWQsXG4gICAgICBzbG90TmFtZSxcbiAgICAgIGRpbWVuc2lvbnMsXG4gICAgICBkaXNwbGF5LFxuICAgICAgYnJlYWtwb2ludHMsXG4gICAgICBhZFR5cGUsXG4gICAgICByZWZyZXNoLFxuICAgICAgdGFyZ2V0aW5nLFxuICAgICAgZGZwSWQsXG4gICAgICBiaWRkaW5nLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gY3JlYXRlIHRoZSBwcmVyZW5kZXJlciBjYWxsYmFjayBpZiB0aGVyZSBpcyBvbmVcbiAgICB3aW5kb3cuYXJjQWRzUHJlcmVuZGVyZXIgPSBhZERldGFpbHMgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnByZXJlbmRlcikge1xuICAgICAgICB0aGlzLnByb3BzLnByZXJlbmRlcihhZERldGFpbHMpO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZShhZERldGFpbHMpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogaWYgd2Ugc3VjY2Vzc2Z1bGx5IGhhdmUgYW4gc3RhdGljIGluc3RhbmNlIG9mIHRoZSBhcmMgYWRzIGxpYnJhcnkgdGhlblxuICAgICAqIHJlZ2lzdGVyIHRoaXMgYWQgd2l0aCB0aGUgbGlicmFyeSBhbmQgcGFzcyBpbiB0aGUgY29uZmlndXJhdGlvbnNcbiAgICAgKiAqL1xuICAgIGNvbnN0IGluc3RhbmNlID0gQXJjQWRMaWIuZ2V0SW5zdGFuY2UoKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLnJlZ2lzdGVyQWQoXG4gICAgICAgIHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBzbG90TmFtZSxcbiAgICAgICAgICBkaW1lbnNpb25zLFxuICAgICAgICAgIGFkVHlwZSxcbiAgICAgICAgICBkaXNwbGF5LFxuICAgICAgICAgIHRhcmdldGluZyxcbiAgICAgICAgICBzaXplbWFwOiB7XG4gICAgICAgICAgICBicmVha3BvaW50cyxcbiAgICAgICAgICAgIHJlZnJlc2gsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiaWRkaW5nLFxuICAgICAgICAgIHByZXJlbmRlcjogd2luZG93LmFyY0Fkc1ByZXJlbmRlcmVyLFxuICAgICAgICB9LFxuICAgICAgICBkZnBJZCxcbiAgICAgICAgYmlkZGluZyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGlzIGluc3RhbmNlIG9mIHRoZSBhZFxuICAgKiB3aXRoIHRoZSBvcHRpb24gdG8gcHV0IGFkZGl0aW9uYWwgY2hpbGRyZW4gYWJvdmUgb3JcbiAgICogYmVsb3cgdGhlIGFjdHVhbCBhZCAoaWUgYWRkaW5nIGluIEFEVkVSVElTRU1FTlQgdGV4dClcbiAgICogKi9cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW5Qb3NpdGlvbixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgZGZwSWQsXG4gICAgICBzbG90TmFtZSxcbiAgICAgIGlzQW1wLFxuICAgICAgYW1wTGF5b3V0LFxuICAgICAgdGFyZ2V0aW5nLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzQW1wKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGhlaWdodCwgd2lkdGgsIGxheW91dCwgbXVsdGlTaXplLFxuICAgICAgfSA9IGFtcExheW91dDtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICAgIHtjaGlsZHJlblBvc2l0aW9uID09PSBcInRvcFwiID8gY2hpbGRyZW4gOiBcIlwifVxuICAgICAgICAgIDxhbXAtYWRcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgICB0eXBlPXtcImRvdWJsZWNsaWNrXCJ9XG4gICAgICAgICAgICBkYXRhLXNsb3Q9e2AvJHtkZnBJZH0vJHtzbG90TmFtZX1gfVxuICAgICAgICAgICAgZGF0YS1tdWx0aS1zaXplPXttdWx0aVNpemV9XG4gICAgICAgICAgICBkYXRhLW11bHRpLXNpemUtdmFsaWRhdGlvbj1cImZhbHNlXCJcbiAgICAgICAgICAgIGpzb249e2B7XCJ0YXJnZXRpbmdcIjogJHtKU09OLnN0cmluZ2lmeSh0YXJnZXRpbmcpfX1gfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2NoaWxkcmVuUG9zaXRpb24gPT09IFwiYm90dG9tXCIgPyBjaGlsZHJlbiA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlblBvc2l0aW9uID09PSBcInRvcFwiID8gY2hpbGRyZW4gOiBcIlwifVxuICAgICAgICA8ZGl2IGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtzbG90TmFtZX0gYXJjYWRgfSAvPlxuICAgICAgICB7Y2hpbGRyZW5Qb3NpdGlvbiA9PT0gXCJib3R0b21cIiA/IGNoaWxkcmVuIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3Qgc3RyaW5nT3JOdW1iZXIgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgUHJvcFR5cGVzLnN0cmluZyxcbiAgUHJvcFR5cGVzLm51bWJlcixcbl0pO1xuXG5jb25zdCBhbXBMYXlvdXQgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBsYXlvdXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBzdHJpbmdPck51bWJlcixcbiAgaGVpZ2h0OiBzdHJpbmdPck51bWJlcixcbiAgbXVsdGlTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbkFyY0FkLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsIC8vIHVuaXF1ZSBJRCBmb3IgdGhpcyBhZFxuICBkZnBJZDogUHJvcFR5cGVzLm51bWJlciwgLy8gcHVibGlzaGluZyBERlAgaWQgbnVtYmVyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSwgLy8gYW55IHZhbHVlcyB5b3Ugd2FudCB0byBnbyBpbnNpZGUgdGhlIGFkIGNvbnRhaW5lclxuICBjaGlsZHJlblBvc2l0aW9uOiBQcm9wVHlwZXMub25lT2YoW1widG9wXCIsIFwiYm90dG9tXCJdKSwgLy8gcG9zaXRpb24gb2YgYW55IGNoaWxkcmVuIHRoYXQgZ28gaW5zaWRlIHRoZSBhZCBjb250YWluZXJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyBjbGFzcyBzdHlsZXMgZm9yIHRoZSBhZCBjb250YWluZXJcbiAgc2xvdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy8gc2xvdCBuYW1lIGZvciB0aGlzIGFkXG4gIGRpbWVuc2lvbnM6IFByb3BUeXBlcy5hcnJheSwgLy8gdGhlIHJlcG9uc2l2ZSBhZCBzaXplcyBmb3IgdGhlIGRpZmZlcmVudCBicmVha3BvaW50c1xuICBkaXNwbGF5OiBQcm9wVHlwZXMub25lT2YoW1wibW9iaWxlXCIsIFwiZGVza3RvcFwiLCBcImFsbFwiXSksIC8vIHRoZSB0eXBlIG9mIGFkIHRoaXMgaXMgZm9yXG4gIGJyZWFrcG9pbnRzOiBQcm9wVHlwZXMuYXJyYXksIC8vIHRoZSBkaWZmZXJlbnQgc2NyZWVuIHNpemVzIHRvIHVzZSBhcyBicmVha3BvaW50c1xuICByZWZyZXNoOiBQcm9wVHlwZXMuYm9vbCwgLy8gd2hldGhlciBvciBub3QgdG8gcmVmcmVzaCB0aGUgYWQgZm9yIG1vYmlsZSBicmVha3BvaW50IGNoYW5nZXNcbiAgYWRUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLCAvLyB0aGUgdHlwZSBvZiBhZFxuICB0YXJnZXRpbmc6IFByb3BUeXBlcy5vYmplY3QsIC8vIGtleS92YWx1ZSBwYWlycyBhdHRhY2hlZCB0byB0aGUgYWQgcmVxdWVzdFxuICBiaWRkaW5nOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBpbmZvIGFib3V0IHRoZSBiaWRkaW5nIHZlbmRvcnNcbiAgcHJlcmVuZGVyOiBQcm9wVHlwZXMuZnVuYywgLy8gYSBmdW5jdGlvbiB0byBmaXJlIGJlZm9yZSB0aGUgYWQgbG9hZHNcbiAgaXNBbXA6IFByb3BUeXBlcy5ib29sLFxuICBhbXBMYXlvdXQsXG59O1xuXG5BcmNBZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzQW1wOiBmYWxzZSxcbiAgYW1wTGF5b3V0OiB7XG4gICAgd2lkdGg6IDMwMCxcbiAgICBoZWlnaHQ6IDI1MCxcbiAgICBsYXlvdXQ6IFwicmVzcG9uc2l2ZVwiLFxuICAgIG11bHRpU2l6ZTogXCIzMDB4MTUwLDMwMHgxMDAsMzAweDc1LDMwMHg1MFwiLFxuICB9LFxuICByZWZyZXNoOiB0cnVlLFxuICBkaXNwbGF5OiBcImFsbFwiLFxuICBiaWRkaW5nOiB7fSxcbiAgZGltZW5zaW9uczogWzAsIDBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXJjQWQ7XG4iXX0=