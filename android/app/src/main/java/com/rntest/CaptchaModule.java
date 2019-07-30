package com.rntest;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by hzhuqi on 2018/8/21.
 */
public class CaptchaModule extends ReactContextBaseJavaModule {
    private CaptchaHelper captchaHelper = null;

    public CaptchaModule(ReactApplicationContext reactContext) {
        super(reactContext);
        captchaHelper = new CaptchaHelper();
    }


    @Override
    public String getName() {
        return "CaptchaHelper";
    }

    @ReactMethod
    public void showCaptcha(Callback success, Callback failure) {
        //Toast.makeText(getReactApplicationContext(), "来自java层的msg", Toast.LENGTH_SHORT).show();
        captchaHelper.init(getCurrentActivity());
        captchaHelper.show(success, failure);
    }
}
