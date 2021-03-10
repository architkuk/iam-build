gdjs.MapCode = {};
gdjs.MapCode.GDMapObjects1= [];
gdjs.MapCode.GDMapObjects2= [];
gdjs.MapCode.GDRestaurantObjects1= [];
gdjs.MapCode.GDRestaurantObjects2= [];
gdjs.MapCode.GDrestLabelObjects1= [];
gdjs.MapCode.GDrestLabelObjects2= [];

gdjs.MapCode.conditionTrue_0 = {val:false};
gdjs.MapCode.condition0IsTrue_0 = {val:false};
gdjs.MapCode.condition1IsTrue_0 = {val:false};


gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDRestaurantObjects1Objects = Hashtable.newFrom({"Restaurant": gdjs.MapCode.GDRestaurantObjects1});gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDRestaurantObjects1Objects = Hashtable.newFrom({"Restaurant": gdjs.MapCode.GDRestaurantObjects1});gdjs.MapCode.eventsList0 = function(runtimeScene) {

{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MapCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Restaurant", true);
}}

}


};gdjs.MapCode.eventsList1 = function(runtimeScene) {

{


gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("restLabel"), gdjs.MapCode.GDrestLabelObjects1);
{for(var i = 0, len = gdjs.MapCode.GDrestLabelObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDrestLabelObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restaurant"), gdjs.MapCode.GDRestaurantObjects1);

gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDRestaurantObjects1Objects, runtimeScene, true, true);
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("restLabel"), gdjs.MapCode.GDrestLabelObjects1);
{for(var i = 0, len = gdjs.MapCode.GDrestLabelObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDrestLabelObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restaurant"), gdjs.MapCode.GDRestaurantObjects1);

gdjs.MapCode.condition0IsTrue_0.val = false;
{
gdjs.MapCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MapCode.mapOfGDgdjs_46MapCode_46GDRestaurantObjects1Objects, runtimeScene, true, false);
}if (gdjs.MapCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("restLabel"), gdjs.MapCode.GDrestLabelObjects1);
{for(var i = 0, len = gdjs.MapCode.GDrestLabelObjects1.length ;i < len;++i) {
    gdjs.MapCode.GDrestLabelObjects1[i].setString("Restaurant");
}
}
{ //Subevents
gdjs.MapCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MapCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MapCode.GDMapObjects1.length = 0;
gdjs.MapCode.GDMapObjects2.length = 0;
gdjs.MapCode.GDRestaurantObjects1.length = 0;
gdjs.MapCode.GDRestaurantObjects2.length = 0;
gdjs.MapCode.GDrestLabelObjects1.length = 0;
gdjs.MapCode.GDrestLabelObjects2.length = 0;

gdjs.MapCode.eventsList1(runtimeScene);
return;

}

gdjs['MapCode'] = gdjs.MapCode;
