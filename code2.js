gdjs.RestaurantCode = {};
gdjs.RestaurantCode.GDNewObjectObjects1= [];
gdjs.RestaurantCode.GDNewObjectObjects2= [];
gdjs.RestaurantCode.GDNewObjectObjects3= [];
gdjs.RestaurantCode.GDNewObject2Objects1= [];
gdjs.RestaurantCode.GDNewObject2Objects2= [];
gdjs.RestaurantCode.GDNewObject2Objects3= [];
gdjs.RestaurantCode.GDNewObject3Objects1= [];
gdjs.RestaurantCode.GDNewObject3Objects2= [];
gdjs.RestaurantCode.GDNewObject3Objects3= [];
gdjs.RestaurantCode.GDPrice1Objects1= [];
gdjs.RestaurantCode.GDPrice1Objects2= [];
gdjs.RestaurantCode.GDPrice1Objects3= [];
gdjs.RestaurantCode.GDPrice2Objects1= [];
gdjs.RestaurantCode.GDPrice2Objects2= [];
gdjs.RestaurantCode.GDPrice2Objects3= [];
gdjs.RestaurantCode.GDPrice3Objects1= [];
gdjs.RestaurantCode.GDPrice3Objects2= [];
gdjs.RestaurantCode.GDPrice3Objects3= [];
gdjs.RestaurantCode.GDGoalObjects1= [];
gdjs.RestaurantCode.GDGoalObjects2= [];
gdjs.RestaurantCode.GDGoalObjects3= [];
gdjs.RestaurantCode.GDNewObject4Objects1= [];
gdjs.RestaurantCode.GDNewObject4Objects2= [];
gdjs.RestaurantCode.GDNewObject4Objects3= [];
gdjs.RestaurantCode.GDPrice5Objects1= [];
gdjs.RestaurantCode.GDPrice5Objects2= [];
gdjs.RestaurantCode.GDPrice5Objects3= [];
gdjs.RestaurantCode.GDAnswerObjects1= [];
gdjs.RestaurantCode.GDAnswerObjects2= [];
gdjs.RestaurantCode.GDAnswerObjects3= [];
gdjs.RestaurantCode.GDAnswer2Objects1= [];
gdjs.RestaurantCode.GDAnswer2Objects2= [];
gdjs.RestaurantCode.GDAnswer2Objects3= [];

gdjs.RestaurantCode.conditionTrue_0 = {val:false};
gdjs.RestaurantCode.condition0IsTrue_0 = {val:false};
gdjs.RestaurantCode.condition1IsTrue_0 = {val:false};
gdjs.RestaurantCode.conditionTrue_1 = {val:false};
gdjs.RestaurantCode.condition0IsTrue_1 = {val:false};
gdjs.RestaurantCode.condition1IsTrue_1 = {val:false};


gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObjectObjects1Objects = Hashtable.newFrom({"NewObject": gdjs.RestaurantCode.GDNewObjectObjects1});gdjs.RestaurantCode.eventsList0 = function(runtimeScene) {

{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer"), gdjs.RestaurantCode.GDAnswerObjects1);
{runtimeScene.getVariables().get("total").add(3);
}{for(var i = 0, len = gdjs.RestaurantCode.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswerObjects1[i].setString(gdjs.RestaurantCode.GDAnswerObjects1[i].getString() + (" Flan,"));
}
}}

}


};gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.RestaurantCode.GDNewObject2Objects1});gdjs.RestaurantCode.eventsList1 = function(runtimeScene) {

{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer"), gdjs.RestaurantCode.GDAnswerObjects1);
{runtimeScene.getVariables().get("total").add(5);
}{for(var i = 0, len = gdjs.RestaurantCode.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswerObjects1[i].setString(gdjs.RestaurantCode.GDAnswerObjects1[i].getString() + (" Aguas Frescas(Coconut),"));
}
}}

}


};gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.RestaurantCode.GDNewObject3Objects1});gdjs.RestaurantCode.eventsList2 = function(runtimeScene) {

{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer"), gdjs.RestaurantCode.GDAnswerObjects1);
{runtimeScene.getVariables().get("total").add(6);
}{for(var i = 0, len = gdjs.RestaurantCode.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswerObjects1[i].setString(gdjs.RestaurantCode.GDAnswerObjects1[i].getString() + (" Churros,"));
}
}}

}


};gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObject4Objects1Objects = Hashtable.newFrom({"NewObject4": gdjs.RestaurantCode.GDNewObject4Objects1});gdjs.RestaurantCode.eventsList3 = function(runtimeScene) {

{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer"), gdjs.RestaurantCode.GDAnswerObjects1);
{runtimeScene.getVariables().get("total").add(1);
}{for(var i = 0, len = gdjs.RestaurantCode.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswerObjects1[i].setString(gdjs.RestaurantCode.GDAnswerObjects1[i].getString() + (" Orange Juice,"));
}
}}

}


};gdjs.RestaurantCode.eventsList4 = function(runtimeScene) {

{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
{gdjs.RestaurantCode.conditionTrue_1 = gdjs.RestaurantCode.condition0IsTrue_0;
gdjs.RestaurantCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("total")) <= 9);
}
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.RestaurantCode.GDAnswer2Objects2);
{for(var i = 0, len = gdjs.RestaurantCode.GDAnswer2Objects2.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswer2Objects2[i].setString("You have enough money!");
}
}}

}


{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
{gdjs.RestaurantCode.conditionTrue_1 = gdjs.RestaurantCode.condition0IsTrue_0;
gdjs.RestaurantCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("total")) > 9);
}
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.RestaurantCode.GDAnswer2Objects1);
{for(var i = 0, len = gdjs.RestaurantCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswer2Objects1[i].setString("You do not have enough money.");
}
}}

}


};gdjs.RestaurantCode.eventsList5 = function(runtimeScene) {

{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("total").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.RestaurantCode.GDNewObjectObjects1);

gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObjectObjects1Objects, runtimeScene, true, false);
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RestaurantCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.RestaurantCode.GDNewObject2Objects1);

gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObject2Objects1Objects, runtimeScene, true, false);
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RestaurantCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.RestaurantCode.GDNewObject3Objects1);

gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RestaurantCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject4"), gdjs.RestaurantCode.GDNewObject4Objects1);

gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.RestaurantCode.mapOfGDgdjs_46RestaurantCode_46GDNewObject4Objects1Objects, runtimeScene, true, false);
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RestaurantCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.RestaurantCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.RestaurantCode.condition0IsTrue_0.val = false;
{
gdjs.RestaurantCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.RestaurantCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Answer"), gdjs.RestaurantCode.GDAnswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Answer2"), gdjs.RestaurantCode.GDAnswer2Objects1);
{runtimeScene.getVariables().get("total").setNumber(0);
}{for(var i = 0, len = gdjs.RestaurantCode.GDAnswer2Objects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswer2Objects1[i].setString("");
}
}{for(var i = 0, len = gdjs.RestaurantCode.GDAnswerObjects1.length ;i < len;++i) {
    gdjs.RestaurantCode.GDAnswerObjects1[i].setString("Current Order:");
}
}}

}


};

gdjs.RestaurantCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RestaurantCode.GDNewObjectObjects1.length = 0;
gdjs.RestaurantCode.GDNewObjectObjects2.length = 0;
gdjs.RestaurantCode.GDNewObjectObjects3.length = 0;
gdjs.RestaurantCode.GDNewObject2Objects1.length = 0;
gdjs.RestaurantCode.GDNewObject2Objects2.length = 0;
gdjs.RestaurantCode.GDNewObject2Objects3.length = 0;
gdjs.RestaurantCode.GDNewObject3Objects1.length = 0;
gdjs.RestaurantCode.GDNewObject3Objects2.length = 0;
gdjs.RestaurantCode.GDNewObject3Objects3.length = 0;
gdjs.RestaurantCode.GDPrice1Objects1.length = 0;
gdjs.RestaurantCode.GDPrice1Objects2.length = 0;
gdjs.RestaurantCode.GDPrice1Objects3.length = 0;
gdjs.RestaurantCode.GDPrice2Objects1.length = 0;
gdjs.RestaurantCode.GDPrice2Objects2.length = 0;
gdjs.RestaurantCode.GDPrice2Objects3.length = 0;
gdjs.RestaurantCode.GDPrice3Objects1.length = 0;
gdjs.RestaurantCode.GDPrice3Objects2.length = 0;
gdjs.RestaurantCode.GDPrice3Objects3.length = 0;
gdjs.RestaurantCode.GDGoalObjects1.length = 0;
gdjs.RestaurantCode.GDGoalObjects2.length = 0;
gdjs.RestaurantCode.GDGoalObjects3.length = 0;
gdjs.RestaurantCode.GDNewObject4Objects1.length = 0;
gdjs.RestaurantCode.GDNewObject4Objects2.length = 0;
gdjs.RestaurantCode.GDNewObject4Objects3.length = 0;
gdjs.RestaurantCode.GDPrice5Objects1.length = 0;
gdjs.RestaurantCode.GDPrice5Objects2.length = 0;
gdjs.RestaurantCode.GDPrice5Objects3.length = 0;
gdjs.RestaurantCode.GDAnswerObjects1.length = 0;
gdjs.RestaurantCode.GDAnswerObjects2.length = 0;
gdjs.RestaurantCode.GDAnswerObjects3.length = 0;
gdjs.RestaurantCode.GDAnswer2Objects1.length = 0;
gdjs.RestaurantCode.GDAnswer2Objects2.length = 0;
gdjs.RestaurantCode.GDAnswer2Objects3.length = 0;

gdjs.RestaurantCode.eventsList5(runtimeScene);
return;

}

gdjs['RestaurantCode'] = gdjs.RestaurantCode;
