function search(){
    if(event.keyCode == 13){
        window.location.href = "https://www.baidu.com/s?wd=" 
        + document.getElementById("search").value;
    }
};

