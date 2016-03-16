
var target = UIATarget.localTarget();


// START_MODULE TableView Module
var testmodule = "TableView Module";
UIALogger.logStart(testmodule);
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_1')
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.60, y:0.75}, endOffset:{x:0.64, y:0.38}, duration:1.6});
// Make sure the x and y coordinates according to the display size and duration must be grater than 1.0.
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_2')
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.63, y:0.39}, endOffset:{x:0.60, y:0.68}});
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_3')
target.delay(2);
target.frontMostApp().navigationBar().rightButton().tap();
//
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_4')
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].dragInsideWithOptions({startOffset:{x:0.96, y:0.68}, endOffset:{x:0.98, y:0.15}, duration:4.6});
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_5')
target.delay(2);
target.frontMostApp().navigationBar().rightButton().tap();
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_6')
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].tapWithOptions({tapOffset:{x:0.70, y:0.26}});
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_7')
target.delay(2);
target.frontMostApp().navigationBar().leftButton().tap();
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_8')
target.delay(2);
target.frontMostApp().mainWindow().tableViews()[0].tapWithOptions({tapOffset:{x:0.70, y:0.59}});
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_9')
target.delay(2);
target.frontMostApp().navigationBar().rightButton().tap();
UIALogger.logMessage('Creating screenshot with the status bar')
target.captureScreenWithName('screenshot_10')
target.delay(2);
UIALogger.logPass(testmodule);
