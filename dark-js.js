var cond=true; 
                function theme(){
                    //let theme=0;
                    if(cond){
                    var ele=document.getElementById("btn_theme");
                    ele.style.backgroundColor="rgb(39, 37, 37)";
                    ele.style.color="#ddd";
                    document.body.style.backgroundColor="rgb(39, 37, 37)";
                    var name=document.getElementById("name");
                    name.style.color="rgb(19, 140, 170)"
                    var value_btn=document.getElementById("btn_theme");
                    var icon=document.getElementById("icon");
                    icon.style.color="#fff";
                    var text1=document.getElementById("text1");
                    text1.style.color="#fff"
                    var text2=document.getElementById("text2");
                    text2.style.color="#fff";
                    text2.style.borderColor="rgb(19, 140, 170)";

                    value_btn.value="Light";
                     
                    cond=false;
                    }
                    else{
                    var ele=document.getElementById("btn_theme");
                    ele.style.backgroundColor="#fff";
                    ele.style.color="#333";
                    document.body.style.backgroundColor="#fff";
                    var name=document.getElementById("name");
                    name.style.color="#333"
                    var value_btn=document.getElementById("btn_theme");
                    var icon=document.getElementById("icon");
                    icon.style.color="#555";
                    var text1=document.getElementById("text1");
                    text1.style.color="#333"
                    var text2=document.getElementById("text2");
                    text2.style.color="#333";
                    text2.style.borderColor="#444";
                    value_btn.value="Dark";

                    cond=true;
                    } 
                    
                }