/*-- Date Time function   --*/
function showTime() {
    var t, sp, dt;
    sp = document.getElementById("sptime");
    dt = new Date();
    t = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    sp.innerHTML = t;
    window.setTimeout("showTime()", 1000);
}

/*-- Day wise list creation Fun()  -- */
function addday(l){l=l.substring(0,1);
    switch(l){
    case'M':var Images=["mg1","mg2","mg3","mg4","mg5","mg6","mg7"];
    function addimg(){
    var myimg=document.getElementById("imgslider");
    myimg.src="images/thoughts/"+Images[0]+".jpg";}addimg();
    break;
    case'S':
    var Images=["s1","s2","s3","s4","s5","s6,","s7"];function addimg(){
    var myimg=document.getElementById("imgslider");
    myimg.src="images/thoughts/"+Images[0]+".jpg";}addimg();
    break;
    case'A':var Images=["apj1","apj2","apj3","apj4","apj5","apj6","apj7"];
    function addimg(){
    var myimg=document.getElementById("imgslider");
    myimg.src="images/thoughts/"+Images[0]+".jpg";}addimg();
    break;
    case'T':var Images=["tha1","tha2","tha3","tha4","tha5","tha6","tha7"];
    function addimg(){
    var myimg=document.getElementById("imgslider");
    myimg.src="images/thoughts/"+Images[0]+".jpg";}addimg();
    break;
    case'E':var Images=["al1","al2","al3","al4","al5","al6","al7"];
    function addimg(){
    var myimg=document.getElementById("imgslider");
    myimg.src="images/thoughts/"+Images[0]+".jpg";}addimg();
    break;}
    var ddl=document.getElementById("ddlday");var items="";
    var arr=["Sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    for(x=0;x<=6;x++){
    items=items+"<option value="+l+x+">"+arr[x]+"</option>";}
    ddl.innerHTML=items;}

    
/*-- Thought Changing by Great personality --*/

    function changeimg(d){var n=d.substring(0,1);
    var dn=d.substring(1,2);
    if(n=='M'){var Images=["mg1","mg2","mg3","mg4","mg5","mg6","mg7"]};
    if(n=='S'){var Images=["s1","s2","s3","s4","s5","s6,","s7"]};
    if(n=='A'){var Images=["apj1","apj2","apj3","apj4","apj5","apj6","apj7"]};
    if(n=='T'){var Images=["tha1","tha2","tha3","tha4","tha5","tha6","tha7"]};
    if(n=='E'){var Images=["al1","al2","al3","al4","al5","al6","al7"]};
    var myimg=document.getElementById("imgslider");
    myimg.src="images/thoughts/"+Images[dn]+".jpg";}
    



var allIndPics=["inb1.jpg","inb2.jpg","inb3.jpg","inb4.jpg","inb5.jpg","inb6.jpg","inb7.jpg"];
var allHmPics=["hmb1.jpg","hmb2.jpg","hmb3.jpg","hmb4.jpg","hmb5.jpg","hmb6.jpg","hmb7.jpg","hmb8.jpg","hmb9.jpg","hmb10.jpg","hmb11.jpg"];

var imgno=0;
function bgSlider()
{
            var myimg=document.getElementById("imgbgslider");
            myimg.src="images/slider/"+allIndPics[imgno];
            imgno++;
            if(imgno==allIndPics.length)
            imgno=0;
            window.setTimeout("bgSlider()",5000);
        
}








/*-Get Team list by js-*/
/*
function showTeamList(listblock)
{
var teamlist = [
    {empid:101,name:"Kajal Verma",qli:"BCA",mobile:91-7754855197,email:"Kajal@gmail.com",img:"kajal.jpg"},
    {empid:101,name:"D.K",qli:"MCA",mobile:91-7754855197,email:"dk@gmail.com",img:"dk.jpg"},
    {empid:101,name:"Jagriti",qli:"BCA",mobile:91-7754855197,email:"jagriti@gmail.com",img:"jagriti.jpg"},
    {empid:101,name:"Isha Singh",qli:"BCA",mobile:91-7754855197,email:"isha@gmail.com",img:"isha.jpg"},
    {empid:101,name:"Ravi",qli:"BCA",mobile:91-7754855197,email:"ravi@gmail.com",img:"ravi1.jpg"},

];
var tlist="";
for(x=0;x<teamlist.length;x++)
{
    tlist=tlist+"<img src='images/"+teamlist[x].img+"'alt='' class='img-thumbnail' style='height:240px;width:100%;'><hr><p style='font-size: 25px;'>"+teamlist[x].img+"</p><p style='font-size: 25px;'>College:-G.P Kaushambi</p><p style='font-size: 25px;'>Post:-Web Designer</p><i class='fa fa-phone' style='font-size: 25px;'></i> <span>"+teamlist[x].mobile+"</span>
    <i class='fa fa-envelope' style='font-size: 25px;'></i> <span>"+teamlist[x].email+"</span><br><br>";
}
listblock.innerHTML=tlist;
}
*/
