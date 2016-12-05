function pathToRoot(){
	var	url=window.location.href;
	var url_split = url.split("/")
	var	result="";
	
	for(var i=url_split.length-2;i>=0;i--){
		if(url_split[i].localeCompare("Cheetah3Dmanual")!=0){
		result +="../";
		}
		else{
		return result;
		}		
	}	
}


function header(root){
	var str='<center><img src="ROOTImages/banner.jpg" alt="" height="100" width="640" border="0"></center></br></br>';
  
  	str=str.replace(/ROOT/g, pathToRoot());
	document.write(str);	
}


function footer(root){
	
	var str='</br><center><table border="0" cellpadding="8" cellspacing="0" width="98%"><tr><td bgcolor="#E4E4E4" height="20" width="29"><a href="ROOTindex.html"><img src="ROOTImages/back.gif" alt="" border="0" height="20" width="29"></a></td><td bgcolor="#E4E4E4" height="20" width="100%"><div align="right">&copy; 2001-2016 Martin Wengenmayer</div></td><td bgcolor="#E4E4E4" height="20" width="20"></td></tr></table></center></br>';
  
  	str=str.replace(/ROOT/g, pathToRoot());
	document.write(str);
}