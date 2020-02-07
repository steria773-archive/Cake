//Created By Rabia Alhaffar In 20/April/2019
//An Library To Short The Use Of SWFObject Library In Web To Run Flash Programs!!!
//Get Repository At https://github.com/swfobject/swfobject/ 
//And Link To The JS Script Library In index.html
//After Repository Downloaded As Zip And Extracted!!!
var AddSWF = (swf_file,html_element,height,width,flash_player_version) => swfobject.embedSWF(swf_file,html_element,height,width,flash_player_version);
