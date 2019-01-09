
import { parseString } from 'xml2js';
import { generateSign, generateRandomStr, generateXml, generateParams } from './utility';
import { unifiedorderUrl, getAccessTokenUrl, userInfoUrl } from './config';
import request from 'request-promise-native';

class Wechat {
	constructor() {
		
	}

	// 微信公众号支付
	async wechatPay({ params, wechatParams }) {
		const { appid, mch_id, partnerKey } = wechatParams;
		const obj = {
			nonce_str: generateRandomStr(),
			trade_type: 'JSAPI',
			appid: appid,
			mch_id: mch_id,
		};
		const data = params;
		Object.assign(data, obj);
		const sign = generateSign({ data, partnerKey: partnerKey });
		Object.assign(data, { sign });
		const xml = generateXml(data);
		const result = await request({
			method: 'post',
			uri: unifiedorderUrl,
			body: xml,
		});
		let wechatObj = null;
		parseString(result.toString(), (err, xml) => {
			wechatObj = xml.xml;
		});
		return wechatObj;
	}

}

export default Wechat;
