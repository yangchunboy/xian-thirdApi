# chuck-wechat
一个用于微信支付和微信授权的npm包（还在逐步完善当中）
## 安装
npm的安装方式

    npm install xian-third-api
## 使用方法

    import XianApi from 'xian-third-api';

    const xianApi = new xianApi();


## 微信支付

> 具体传入的参数参考：https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=9_1
> 其中nonce_str和trade_type这两个参数，我已经在包里加了，所以可以不传这两个参数。
> 
> 微信公众号支付的示例如下:

    import XianApi from 'xian-third-api';

    const xianApi = new xianApi();
    const data = {
        appid: 'wx1111111111',
        mch_id: '1111111111',
        body: '微信支付',
        out_trade_no: 'DD2018051401',
        total_fee: 1,
        notify_url,
        attach,
        spbill_create_ip: '127.0.0.1',
        openid: 'xxxxxx',
    };
    const wechatParams = {
        appid,
        mch_id,
        partnerKey
    };
    const result = xianApi.wechatPay({ params: data, wechatParams });
    console.log(result);
> 如果调用成功的返回结果是:

    {
        return_code: [ 'SUCCESS' ],
        return_msg: [ 'OK' ],
        appid: [ 'wx1111111111' ],
        mch_id: [ '1111111111' ],
        nonce_str: [ 'bfVr6Do1oU74o1iZ' ],
        sign: [ 'B112A7790273FC9E55D6CF6803EB80D0' ],
        result_code: [ 'SUCCESS' ],
        prepay_id: [ 'wx111111111111111111111111111111' ],
        trade_type: [ 'NATIVE' ],
        code_url: [ 'weixin://wxpay/bizpayurl?pr=abcajhdka' ] // 将code_url这个属性转换为二维码
    }

