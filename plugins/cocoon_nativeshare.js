//Written By Rabia Alhaffar In 13/December/2019
var NativeShare = Cocoon.Share;
function Share(share_message,share_image)
{
NativeShare.share({
message:share_message.toString(),
image:share_image.toString()	
});	
}