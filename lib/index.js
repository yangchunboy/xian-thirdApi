'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _xml2js = require('xml2js');

var _utility = require('./utility');

var _config = require('./config');

var _requestPromiseNative = require('request-promise-native');

var _requestPromiseNative2 = _interopRequireDefault(_requestPromiseNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wechat = function () {
	function Wechat() {
		(0, _classCallCheck3.default)(this, Wechat);
	}

	// 微信公众号支付


	(0, _createClass3.default)(Wechat, [{
		key: 'wechatPay',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
				var params = _ref2.params,
				    wechatParams = _ref2.wechatParams;
				var appid, mch_id, partnerKey, obj, data, sign, xml, result, wechatObj;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								appid = wechatParams.appid, mch_id = wechatParams.mch_id, partnerKey = wechatParams.partnerKey;
								obj = {
									nonce_str: (0, _utility.generateRandomStr)(),
									trade_type: 'JSAPI',
									appid: appid,
									mch_id: mch_id
								};
								data = params;

								Object.assign(data, obj);
								sign = (0, _utility.generateSign)({ data: data, partnerKey: partnerKey });

								Object.assign(data, { sign: sign });
								xml = (0, _utility.generateXml)(data);
								_context.next = 9;
								return (0, _requestPromiseNative2.default)({
									method: 'post',
									uri: _config.unifiedorderUrl,
									body: xml
								});

							case 9:
								result = _context.sent;
								wechatObj = null;

								(0, _xml2js.parseString)(result.toString(), function (err, xml) {
									wechatObj = xml.xml;
								});
								return _context.abrupt('return', wechatObj);

							case 13:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function wechatPay(_x) {
				return _ref.apply(this, arguments);
			}

			return wechatPay;
		}()
	}]);
	return Wechat;
}();

exports.default = Wechat;