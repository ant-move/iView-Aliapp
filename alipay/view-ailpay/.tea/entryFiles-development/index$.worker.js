if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        
if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../dist/panel/index');
require('../../dist/cell-group/index');
require('../../dist/cell/index');
require('../../dist/icon/index');
require('../../dist/grid/index');
require('../../dist/grid-item/index');
require('../../dist/card/index');
require('../../dist/row/index');
require('../../dist/col/index');
require('../../dist/button/index');
require('../../dist/grid-icon/index');
require('../../dist/grid-label/index');
require('../../dist/action-sheet/index');
require('../../dist/message/index');
require('../../dist/alert/index');
require('../../dist/avatar/index');
require('../../dist/badge/index');
require('../../dist/checkbox-group/index');
require('../../dist/checkbox/index');
require('../../dist/drawer/index');
require('../../dist/count-down/index');
require('../../dist/divider/index');
require('../../dist/index/index');
require('../../dist/index-item/index');
require('../../dist/collapse/index');
require('../../dist/collapse-item/index');
require('../../pages/index/index');
require('../../pages/icon/index');
require('../../pages/color/index');
require('../../pages/button/index');
require('../../pages/card/index');
require('../../pages/list/index');
require('../../pages/panel/index');
require('../../pages/grid/index');
require('../../pages/layout/index');
require('../../pages/action-sheet/index');
require('../../pages/alert/index');
require('../../pages/avatar/index');
require('../../pages/badge/index');
require('../../pages/checkbox/index');
require('../../pages/drawer/index');
require('../../pages/input/index');
require('../../pages/input-number/index');
require('../../pages/message/index');
require('../../pages/modal/index');
require('../../pages/notice-bar/index');
require('../../pages/page/index');
require('../../pages/progress/index');
require('../../pages/radio/index');
require('../../pages/rate/index');
require('../../pages/spin/index');
require('../../pages/steps/index');
require('../../pages/switch/index');
require('../../pages/tab-bar/index');
require('../../pages/tabs/index');
require('../../pages/tag/index');
require('../../pages/toast/index');
require('../../pages/swipeout/index');
require('../../pages/count-down/index');
require('../../pages/divider/index');
require('../../pages/index-list/index');
require('../../pages/collapse/index');
require('../../pages/sticky/index');
require('../../pages/load-more/index');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}