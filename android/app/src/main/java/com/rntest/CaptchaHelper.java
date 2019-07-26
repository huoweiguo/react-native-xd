package com.rntest;

import android.app.Activity;
import android.widget.Toast;

import com.netease.nis.captcha.Captcha;
import com.netease.nis.captcha.CaptchaConfiguration;
import com.netease.nis.captcha.CaptchaListener;

/**
 * Created by hzhuqi on 2018/8/21.
 */
public class CaptchaHelper {
    private Captcha mCaptcha = null;
    private Activity mContext = null;
//    private UserLoginTask mLoginTask = null;
    String testCaptchaId = "d4f32e92c74e4363928fb791ecaa3a44";

    public void init(Activity context) {
        mContext = context;
//        if (mCaptcha == null) {
//            mCaptcha = new Captcha(mContext);
//        }
//        mCaptcha.setCaptchaId(testCaptchaId);
//        mCaptcha.setCaListener(myCaptchaListener);
//        //可选:设置验证码语言为英文，默认为中文
//        mCaptcha.setLanguageType(Captcha.LangType.LANG_EN);
//        //可选：开启debug
//        mCaptcha.setDebug(false);
//        //可选：设置超时时间
//        mCaptcha.setTimeout(10000);
//        //设置验证码弹框的坐标位置: 只需设置left，top和宽度，高度为自动计算。默认无须设置为窗口居中。
//        mCaptcha.setPosition(-1, -1, -1, -1);


        final CaptchaConfiguration configuration = new CaptchaConfiguration.Builder()
                .captchaId(testCaptchaId)// 验证码业务id
                .listener(myCaptchaListener) // 验证码回调监听器
                .timeout(10000) // 超时时间，一般无需设置
                .languageType(CaptchaConfiguration.LangType.LANG_ZH_CN) // 验证码语言类型，一般无需设置，可设置值请参看下面验证码语言枚举类介绍
                .debug(BuildConfig.DEBUG) // 是否启用debug模式，一般无需设置
                // 设置验证码框的位置和宽度，一般无需设置，不推荐设置宽高，后面将逐步废弃该接口
                .position(-1, -1, -1, -1)
                .build(context); // Context，请使用Activity实例的Context

        mCaptcha = Captcha.getInstance().init(configuration);
//        mCaptcha.validate();
    }

    public void show() {
        //必填：初始化 captcha框架
//        mCaptcha.start();
//        mLoginTask = new UserLoginTask();
        //关闭mLoginTask任务可以放在myCaptchaListener的onCancel接口中处理
//        mLoginTask.execute();
        mCaptcha.validate();
    }

    CaptchaListener myCaptchaListener = new CaptchaListener() {

        @Override
        public void onReady() {
            //该为调试接口，ret为true表示加载Sdk完成
            toastMsg("验证码sdk加载成功");
        }

        @Override
        public void onValidate(String result, String validate, String message) {
            //验证结果，valiadte，可以根据返回的三个值进行用户自定义二次验证
            if (validate.length() > 0) {
                toastMsg("验证成功，validate = " + validate);
            } else {
                toastMsg("验证失败：result = " + result + ", validate = " + validate + ", message = " + message);

            }
        }

        @Override
        public void onError(int i, String errormsg) {
            //出错
            toastMsg("错误信息：" + errormsg);
        }


        @Override
        public void onCancel() {
            toastMsg("取消线程");
//            //用户取消加载或者用户取消验证，关闭异步任务，也可根据情况在其他地方添加关闭异步任务接口
//            if (mLoginTask != null) {
//                if (mLoginTask.getStatus() == AsyncTask.Status.RUNNING) {
//                    mLoginTask.cancel(true);
//                }
//            }
        }

        @Override
        public void onClose() {
            //请求关闭页面
            toastMsg("关闭页面");
        }
    };

    private void toastMsg(String msg) {
        Toast.makeText(mContext, msg, Toast.LENGTH_SHORT).show();
    }

//    public class UserLoginTask extends AsyncTask<Void, Void, Boolean> {
//
//        UserLoginTask() {
//        }
//
//        @Override
//        protected Boolean doInBackground(Void... params) {
//            //可选：简单验证DeviceId、CaptchaId、Listener值
//            return mCaptcha.checkParams();
//        }
//
//        @Override
//        protected void onPostExecute(final Boolean success) {
//            if (success) {
//                //必填：开始验证
//                mCaptcha.validate();
//            } else {
//                toastMsg("验证码SDK参数设置错误,请检查配置");
//            }
//        }
//
//        @Override
//        protected void onCancelled() {
//            mLoginTask = null;
//        }
//    }
}
