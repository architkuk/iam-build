gdjs.MainMenuCode = {};
gdjs.MainMenuCode.GDGameTitleObjects1= [];
gdjs.MainMenuCode.GDGameTitleObjects2= [];
gdjs.MainMenuCode.GDNewObjectObjects1= [];
gdjs.MainMenuCode.GDNewObjectObjects2= [];
gdjs.MainMenuCode.GDuserObjects1= [];
gdjs.MainMenuCode.GDuserObjects2= [];
gdjs.MainMenuCode.GDPasswordObjects1= [];
gdjs.MainMenuCode.GDPasswordObjects2= [];
gdjs.MainMenuCode.GDusernaeObjects1= [];
gdjs.MainMenuCode.GDusernaeObjects2= [];
gdjs.MainMenuCode.GDpasswordObjects1= [];
gdjs.MainMenuCode.GDpasswordObjects2= [];

gdjs.MainMenuCode.conditionTrue_0 = {val:false};
gdjs.MainMenuCode.condition0IsTrue_0 = {val:false};
gdjs.MainMenuCode.condition1IsTrue_0 = {val:false};


gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.MainMenuCode.GDNewObjectObjects1});gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.MainMenuCode.GDNewObjectObjects1});gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map", false);
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MainMenuCode.GDNewObjectObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, true);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewObjectObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.MainMenuCode.GDNewObjectObjects1);

gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainMenuCode.mapOfGDgdjs_46MainMenuCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MainMenuCode.GDNewObjectObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDNewObjectObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Password"), gdjs.MainMenuCode.GDPasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.MainMenuCode.GDpasswordObjects1);
gdjs.copyArray(runtimeScene.getObjects("user"), gdjs.MainMenuCode.GDuserObjects1);
gdjs.copyArray(runtimeScene.getObjects("usernae"), gdjs.MainMenuCode.GDusernaeObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDuserObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDuserObjects1[i].setString("Username:\n" + (( gdjs.MainMenuCode.GDusernaeObjects1.length === 0 ) ? "" :gdjs.MainMenuCode.GDusernaeObjects1[0].getString()));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDPasswordObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPasswordObjects1[i].setString("Password:" + (( gdjs.MainMenuCode.GDpasswordObjects1.length === 0 ) ? "" :gdjs.MainMenuCode.GDpasswordObjects1[0].getString()));
}
}}

}


{


gdjs.MainMenuCode.condition0IsTrue_0.val = false;
{
gdjs.MainMenuCode.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if (gdjs.MainMenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDGameTitleObjects1.length = 0;
gdjs.MainMenuCode.GDGameTitleObjects2.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects1.length = 0;
gdjs.MainMenuCode.GDNewObjectObjects2.length = 0;
gdjs.MainMenuCode.GDuserObjects1.length = 0;
gdjs.MainMenuCode.GDuserObjects2.length = 0;
gdjs.MainMenuCode.GDPasswordObjects1.length = 0;
gdjs.MainMenuCode.GDPasswordObjects2.length = 0;
gdjs.MainMenuCode.GDusernaeObjects1.length = 0;
gdjs.MainMenuCode.GDusernaeObjects2.length = 0;
gdjs.MainMenuCode.GDpasswordObjects1.length = 0;
gdjs.MainMenuCode.GDpasswordObjects2.length = 0;

gdjs.MainMenuCode.eventsList1(runtimeScene);
return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
