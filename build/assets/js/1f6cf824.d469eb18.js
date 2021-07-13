(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[3228],{18209:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return r},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var o=i(22122),n=i(19756),a=(i(67294),i(3905)),r={sidebar_label:"Deploying Mobile"},p={unversionedId:"vue/your-first-app/deploying-mobile",id:"vue/your-first-app/deploying-mobile",isDocsHomePage:!1,title:"Deploying to iOS and Android",description:"Since we added Capacitor to our project when it was first created, there\u2019s only a handful of steps remaining until the Photo Gallery app is on our device!",source:"@site/docs/vue/your-first-app/6-deploying-mobile.md",sourceDirName:"vue/your-first-app",slug:"/vue/your-first-app/deploying-mobile",permalink:"/docs/vue/your-first-app/deploying-mobile",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/vue/your-first-app/6-deploying-mobile.md",version:"current",sidebar_label:"Deploying Mobile",sidebarPosition:6,frontMatter:{sidebar_label:"Deploying Mobile"},sidebar:"docs",previous:{title:"Adding Mobile",permalink:"/docs/vue/your-first-app/adding-mobile"},next:{title:"Rapid App Development with Live Reload",permalink:"/docs/vue/your-first-app/live-reload"}},l=[{value:"Capacitor Setup",id:"capacitor-setup",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}],s={toc:l};function d(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since we added Capacitor to our project when it was first created, there\u2019s only a handful of steps remaining until the Photo Gallery app is on our device!"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Remember, you can find the complete source code for this app ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-capacitor-vue"},"here"),".")),(0,a.kt)("h2",{id:"capacitor-setup"},"Capacitor Setup"),(0,a.kt)("p",null,"Capacitor is Ionic\u2019s official app runtime that makes it easy to deploy web apps to native platforms like iOS, Android, and more. If you\u2019ve used Cordova in the past, consider reading more about the differences ",(0,a.kt)("a",{parentName:"p",href:"https://capacitor.ionicframework.com/docs/cordova#differences-between-capacitor-and-cordova"},"here"),"."),(0,a.kt)("p",null,"If you\u2019re still running ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve")," in the terminal, cancel it. Complete a fresh build of the Ionic project, fixing any errors that it reports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic build\n")),(0,a.kt)("p",null,"Next, create both the iOS and Android projects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap add ios\n$ ionic cap add android\n")),(0,a.kt)("p",null,"Both android and ios folders at the root of the project are created. These are entirely standalone native projects that should be considered part of your Ionic app (i.e., check them into source control, edit them using their native tooling, etc.)."),(0,a.kt)("p",null,"Every time you perform a build (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic build"),") that updates your web directory (default: ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"), you'll need to copy those changes into your native projects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap copy\n")),(0,a.kt)("p",null,"Note: After making updates to the native portion of the code (such as adding a new plugin), use the ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap sync\n")),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To build an iOS app, you\u2019ll need a Mac computer.")),(0,a.kt)("p",null,"Capacitor iOS apps are configured and managed through Xcode (Apple\u2019s iOS/Mac IDE), with dependencies managed by CocoaPods. Before running this app on an iOS device, there's a couple of steps to complete."),(0,a.kt)("p",null,"First, run the Capacitor ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," command, which opens the native iOS project in Xcode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap open ios\n")),(0,a.kt)("p",null,"In order for some native plugins to work, user permissions must be configured. In our photo gallery app, this includes the Camera plugin: iOS displays a modal dialog automatically after the first time that ",(0,a.kt)("inlineCode",{parentName:"p"},"Camera.getPhoto()"),' is called, prompting the user to allow the app to use the Camera. The permission that drives this is labeled "Privacy - Camera Usage." To set it, the ',(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist")," file must be modified (",(0,a.kt)("a",{parentName:"p",href:"https://capacitor.ionicframework.com/docs/ios/configuration"},"more details here"),'). To access it, click "Info," then expand "Custom iOS Target Properties."'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Xcode Custom iOS Target Properties",src:i(25699).Z})),(0,a.kt)("p",null,"Each setting in ",(0,a.kt)("inlineCode",{parentName:"p"},"Info.plist"),' has a low-level parameter name and a high-level name. By default, the property list editor shows the high-level names, but it\'s often useful to switch to showing the raw, low-level names. To do this, right-click anywhere in the property list editor and toggle "Raw Keys/Values."'),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"NSCameraUsageDescription"),' Key and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." The Value field is displayed to the app user when the permission prompt opens.'),(0,a.kt)("p",null,"Follow the same process to add the other two Keys required of the Camera plugin: ",(0,a.kt)("inlineCode",{parentName:"p"},"NSPhotoLibraryAddUsageDescription")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NSPhotoLibraryUsageDescription"),"."),(0,a.kt)("p",null,"Next, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," in the Project Navigator on the left-hand side, then within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Signing & Capabilities")," section, select your Development Team."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Xcode - Selecting Development Team",src:i(85855).Z})),(0,a.kt)("p",null,"With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (",(0,a.kt)("inlineCode",{parentName:"p"},"App -> Matthew\u2019s iPhone"),' for me) then click the "Build" button to build, install, and launch the app on your device:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Xcode build button",src:i(63740).Z})),(0,a.kt)("p",null,"Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iOS Camera permissions",src:i(7977).Z})),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("p",null,"Capacitor Android apps are configured and managed through Android Studio. Before running this app on an Android device, there's a couple of steps to complete."),(0,a.kt)("p",null,"First, run the Capacitor ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," command, which opens the native Android project in Android Studio:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap open android\n")),(0,a.kt)("p",null,"Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under ",(0,a.kt)("inlineCode",{parentName:"p"},"android/app/src/main/"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Manifest location",src:i(64859).Z})),(0,a.kt)("p",null,"Scroll to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Permissions")," section and ensure these entries are included:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n')),(0,a.kt)("p",null,'Save the file. With permissions in place, we are ready to try out the app on a real device! Connect an Android device to your computer. Within Android Studio, click the "Run" button, select the attached Android device, then click OK to build, install, and launch the app on your device.'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Launching app on Android",src:i(41119).Z})),(0,a.kt)("p",null,"Once again, upon tapping the Camera button on the Photo Gallery tab, the permission prompt should be displayed. Tap OK, then take a picture with the Camera. Afterward, the photo should appear in the app."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Android Camera permissions",src:i(31864).Z})),(0,a.kt)("p",null,"Our Photo Gallery app has just been deployed to Android and iOS devices. \ud83c\udf89"),(0,a.kt)("p",null,"In the final portion of this tutorial, we\u2019ll use the Ionic CLI\u2019s Live Reload functionality to quickly implement photo deletion - thus completing our Photo Gallery feature."))}d.isMDXComponent=!0},41119:function(e,t,i){"use strict";t.Z=i.p+"assets/images/android-device-8b3018202541360e0e96a79e2450000b.png"},64859:function(e,t,i){"use strict";t.Z=i.p+"assets/images/android-manifest-647a7d01c724948e2425de15485b32fa.png"},31864:function(e,t,i){"use strict";t.Z=i.p+"assets/images/android-permissions-photo-8d864969f3b5c99f5e420c2d03d34c25.png"},7977:function(e,t,i){"use strict";t.Z=i.p+"assets/images/ios-permissions-photo-60dc28e6596c4d3705f87a11aafa1791.png"},63740:function(e,t,i){"use strict";t.Z=i.p+"assets/images/xcode-build-button-8c12390e6aa4be6b7660a17ff2638ddd.png"},25699:function(e,t,i){"use strict";t.Z=i.p+"assets/images/xcode-info-plist-c32d110907f566a8c66942fe4b9c8972.png"},85855:function(e,t,i){"use strict";t.Z=i.p+"assets/images/xcode-signing-8ed68e36b712b826ee29b0b3c805d664.png"}}]);