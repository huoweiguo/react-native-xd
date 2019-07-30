//
//  NTESRNRouter.m
//  ProjectName
//
//  Created by Ke Xu on 2018/8/16.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "NTESRNRouter.h"
#import <VerifyCode/NTESVerifyCodeManager.h>

#define test_captchaid_tuodong              @"d54d95af68a94f709b4eeb9ebf9831a4"

@interface NTESRNRouter () <NTESVerifyCodeManagerDelegate>

@property (nonatomic, strong) NTESVerifyCodeManager *manager;

@end

@implementation NTESRNRouter

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(configVerifyCode)
{
  self.manager = [NTESVerifyCodeManager sharedInstance];
  [self.manager enableLog:YES];
  self.manager.delegate = self;
  self.manager.alpha = 0.7;
  [self.manager configureVerifyCode:test_captchaid_tuodong timeout:5];
}

RCT_EXPORT_METHOD(showVerifyCode)
{
  self.manager.lang = NTESVerifyCodeLangCN;
  dispatch_async(dispatch_get_main_queue(), ^{
    
// 1.topview非空的调用方式
    
//    UIView *view = [[UIView alloc] initWithFrame:CGRectMake(10, 220 , 280, 250)];
//    view.backgroundColor = [UIColor yellowColor];
//    [[UIApplication sharedApplication].delegate.window.rootViewController.view addSubview:view];
//    CGRect frame = view.bounds;
//    self.manager.frame = frame;
//    [self.manager openVerifyCodeView:view];
    
// 2.topview为nil的调用方式
    
      [self.manager openVerifyCodeView:nil];
  });
}

- (void)verifyCodeInitFinish{
  
  NSLog(@"收到初始化完成的回调");
  dispatch_async(dispatch_get_main_queue(), ^(){

  });
  
}

/**
 * 验证码组件初始化出错
 *
 * @param message 错误信息
 */
- (void)verifyCodeInitFailed:(NSString *)message{
  
  NSLog(@"收到初始化失败的回调:%@",message);
  dispatch_async(dispatch_get_main_queue(), ^(){
 
  });
}

/**
 * 完成验证之后的回调
 *
 * @param result 验证结果 BOOL:YES/NO
 * @param validate 二次校验数据，如果验证结果为false，validate返回空
 * @param message 结果描述信息
 *
 */
- (void)verifyCodeValidateFinish:(BOOL)result validate:(NSString *)validate message:(NSString *)message{
  
  NSLog(@"收到验证结果的回调:(%d,%@,%@)", result, validate, message);
  if (result) {
    dispatch_async(dispatch_get_main_queue(), ^(){

    });
    
    /**UI请在主线程操作*/
  }
  else {
    dispatch_async(dispatch_get_main_queue(), ^(){
     
    });
  }
}

/**
 * 关闭验证码窗口后的回调
 */
- (void)verifyCodeCloseWindow{
  //用户关闭验证后执行的方法
  NSLog(@"收到关闭验证码视图的回调");
  dispatch_async(dispatch_get_main_queue(), ^(){
    
  });
  
}

/**
 * 网络错误
 *
 * @param error 网络错误信息
 */
- (void)verifyCodeNetError:(NSError *)error{
  //用户关闭验证后执行的方法
  NSLog(@"收到网络错误的回调:%@(%ld)", [error localizedDescription], error.code);
  dispatch_async(dispatch_get_main_queue(), ^(){
   
  });
}

@end
