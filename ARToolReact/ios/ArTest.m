//
//  ArTest.m
//  ARToolReact
//
//  Created by jak on 30/05/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "ArTest.h"
#import <AVFoundation/AVFoundation.h>
#import "React/RCTLog.h"
#import "ARAppNFTDelegate.h"
#import "ARViewController.h"

@implementation ArTest



// This RCT (React) "macro" exposes the current module to JavaScript
RCT_EXPORT_MODULE();

// We must explicitly expose methods otherwise JavaScript can't access anything
RCT_EXPORT_METHOD(get)
{
  /*float volume = [AVAudioSession sharedInstance].outputVolume;
  RCTLogInfo(@"The system volume level is %f", volume);
  NSLog(@"Hi*******************");*/
  
 
    ARViewController *viewController = [[ARViewController alloc]init];
    ARAppNFTDelegate *appDelegate = (ARAppNFTDelegate *)[[UIApplication sharedApplication] delegate];
    [appDelegate.window.rootViewController presentViewController:viewController animated:YES completion:nil];

}
@end
