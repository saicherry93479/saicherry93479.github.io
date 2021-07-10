var x=[];
var  y=[];
var addVertexclicks=0;
var addEdgeclicks=0;
var addDfsclicks=0;
var count=0;
var vertexButton=document.getElementById("addVertex");
// the above gets dom of addVertex
var edgeButton=document.getElementById("addEdge");
// the above gets dom of addEdge
var dfsButton=document.getElementById("Dfs");
// the above gets dom of Dfs
var sourceButton=document.getElementById("Source");


var vertxbuttonon=true;
var edgebuttonon=true;
var dfsbuttonon=true;

// var para=document.getElementById("para");

function addvertex(){
    addVertexclicks++;
    
    
    if(addVertexclicks%2==1){
       
        
        
        
        vertexButton.style.backgroundColor="blue";
    //     if(addEdgeclicks%2==1)
    // {
    //     addedge();
    // }
    // if(addSourceClicks%2==1)
    // {
    //     source();

    // }
    // if(addDfsclicks%2==1)
    // {
    //     dfs();
    // }
        var canvas=document.getElementById("canvas1");
        var rect=canvas.getBoundingClientRect();
        
        canvas.addEventListener('mousedown', event=>{
        
            if(addVertexclicks%2==1)
            {
               
               
                
                var x1=event.clientX- rect.left;
                var y1 =event.clientY- rect.top;
               

                var sucess=true;
                for(var i=0;i<x.length;i++)
                {
                    if(x[i]==x1&&y[i]==y1)
                    {
                        sucess=false;
                    }
                    
                }
                if(sucess){
                    count++;
                 var ctx = canvas.getContext("2d");
                 ctx.beginPath();

                  ctx.arc(x1, y1, 10, 0, 2 * Math.PI);
     
                ctx.fillStyle="green";
                ctx.strokeStyle="green";
                ctx.fill();
                ctx.fillStyle = "white";
                ctx.textAlign="center";
                ctx.font="15px Arial";
                 ctx.fillText(count-1,x1,y1+3);

                ctx.stroke(); 
                ctx.closePath();
                x.push(x1);
                y.push(y1);
               

            }
        }
       

        });
    }
    else{
        vertexButton.style.backgroundColor="inherit";
        canvas.removeEventListener('click',event);
        
    }

}
var ex=[];
var lines=[];
var sourceVertice;
var colorCircle=[];
// var para=document.getElementById("para");
function addedge(){
    addEdgeclicks++;
   
            
   
   
    if(addEdgeclicks%2==1){
    //     if(addVertexclicks%2==1)
    // {
    //     addvertex();
    // }
    // if(addSourceClicks%2==1)
    // {
    //     source();

    // }
    // if(addDfsclicks%2==1)
    // {
    //     dfs();
    // }
        
        var edgePointCount=[];
        
        edgeButton.style.backgroundColor="blue";
    
       
        var canvas=document.getElementById("canvas1");
        var rect=canvas.getBoundingClientRect();
        var ex1=[];
       
       
        canvas.addEventListener('mousedown', event=>{
           
             if(addEdgeclicks%2==1)
             {
                
                var x1=event.clientX- rect.left;
                var y1 =event.clientY- rect.top;
                for(var i=0;i<x.length;i++)
                {
                    
                    if((Math.abs(x[i]-x1)<10)&&(Math.abs(y[i]-y1)<10))
                    {
                        var ctx = canvas.getContext("2d");
                        ctx.beginPath();
        
                        ctx.arc(x[i], y[i], 10, 0, 2 * Math.PI);
            
                        ctx.fillStyle="#9e2484";
                        ctx.strokeStyle="#9e2484";
                        ctx.fill();
                        ctx.fillStyle = "white";
                        ctx.textAlign="center";
                        ctx.font="15px Arial";
                        ctx.fillText(i,x[i],y[i]+3);
        
                        ctx.stroke(); 
                        ctx.closePath();
                        ex1.push(i);
                        var cir=[];
                        cir.push(i);
                        cir.push(x[i]);
                        cir.push(y[i]);
                    
                        colorCircle.push(cir);
                        
                        
                        edgePointCount.push(x[i]);
                        edgePointCount.push(y[i]);
                        
                        break;
                        
                        
                        
                    }
                }
               
               
                
             
            

                   if(edgePointCount.length==4){   
                 
             
                    
                    var xx=edgePointCount[0];
                    var yy=edgePointCount[1];
                    var xx2=edgePointCount[2];
                    var yy2=edgePointCount[3];
                   
                    var radian1=angle(xx,yy,xx2,yy2);
                    var radian2=angle(xx2,yy2,xx,yy);
                   
                    
                    var angle1=(radian1*180)/Math.PI;
                     var angle2=(radian2*180)/Math.PI;
                   
                    var point1=points(radian1,xx,yy,10);
                    
                    var point2=points(radian2,xx2,yy2,10);
                   

                   
                    var xx3=point1.fromx;
                    var yy3=point1.fromy;
                    var xx4=point2.fromx;
                    var yy4=point2.fromy;
                   

                    var ctx=canvas.getContext("2d");
                    ctx.beginPath();
                    ctx.moveTo(xx3,yy3);
                    ctx.lineTo(xx4,yy4);
                    ctx.lineWidth=2;
                    ctx.strokeStyle="tomato"
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    if(ex1[ex1.length-1]!=ex1[ex1.length-2]){
                        var ex2=[];
                        ex2.push(ex1[ex1.length-2]);
                        ex2.push(ex1[ex1.length-1]);
                        if(JSON.stringify(ex[ex.length-1])===JSON.stringify(ex2))
                        {

                        }
                        else{
                            ex.push(ex2);
                            var line=[];
                            line.push(ex2);
                             line.push(point1);
                            line.push(point2);
                             lines.push(line);
                             var ctx4=canvas.getContext("2d");
                    var basepointx=xx4+10*Math.cos(radian2);
                    var basepointy=yy4+10*Math.sin(radian2);
                    var xdash=7*Math.cos((Math.PI/2)-radian2);
                    var ydash=7*Math.sin((Math.PI/2)-radian2);
                    ctx4.beginPath();
                    ctx4.moveTo(basepointx,basepointy);
                    ctx4.lineTo(basepointx+xdash,basepointy-ydash);
                    ctx4.lineTo(basepointx-xdash,basepointy+ydash);
                   
                    ctx4.lineTo(xx4,yy4);
                    ctx4.lineTo(basepointx+xdash,basepointy-ydash);
                    
                    
                    
                    
                    
                    ctx4.fillStyle="tomato";
                    ctx4.fill();
                    ctx4.stroke();
                    ctx4.closePath();
                            

                        }
                    }
                    
                    


                    edgePointCount.pop();
                    edgePointCount.pop();
                    edgePointCount.pop();
                    edgePointCount.pop();
                   
                }
    

            }
            else{
         }

        });

    }
    else{
      
        edgeButton.style.backgroundColor="inherit";
       
      
        // para.innerHTML+="<br>";
       
    
        canvas.removeEventListener('click',event);
        
           
        
    }
}
function angle(fromx,fromy,tox,toy)
{
    
    var dx=tox-fromx;
    var dy=toy-fromy;
    theta=Math.atan2(dy,dx);

   return theta;
}
// function points(degree,radius,xvalue,yvalue)
// {
//     var adjacentSide=cos(degree)*10;
//     var oppositeSide=sin(degree)*10;
//     var xpoint=xvalue+adjacentSide;
//     var ypoint=yvalue+oppositeSide;
//     return{
//         xpoint,ypoint
//     };

// }
function points(degree,fromx,fromy,radius)
{
    var xsubcos=Math.cos(degree);
    var xsub=radius*xsubcos;
   

   
   
 
    var ysubsin=Math.sin(degree);
    var ysub=radius*ysubsin;
   
    if((0<=degree<=90)||(-360<=degree<=-270))
    {
        fromx=fromx+xsub;
        fromy=fromy+ysub;
       


    }
    else if((90<=degree<=270)||(-270<=degree<=-90))
    {
        if(90<=degree<=180||(-180<=degree<=-90))
        {
            fromx=fromx-xsub;
            fromy=fromy+ysub;
           
        }
        else{
            fromx=fromx-xsub;
            fromy=fromy-ysub;
          
        }
    }
    else{
        fromx=fromx+xsub;
        fromy=fromy-ysub;
       
    }
    
    return {
        fromx,fromy
    };
}






    

var addSourceClicks=0;
var sourceCount=0;
var sourceVertice;

function source()
{
    addSourceClicks++;
    
   
    if(addSourceClicks%2==1)
    {

       
        sourceButton.style.backgroundColor="blue";
    //     if(addVertexclicks%2==1)
    // {
    //     addvertex();
    // }
    // if(addEdgeclicks%2==1)
    // {
    //     addedge();

    // }
    // if(addDfsclicks%2==1)
    // {
    //     dfs();
    // }
        var canvas=document.getElementById("canvas1");
        var rect=canvas.getBoundingClientRect();
        
        canvas.addEventListener('click',event=>
        {
            if(addSourceClicks%2==1)
            { 
                
                var x1=event.clientX- rect.left;
                var y1 =event.clientY- rect.top;
                for(var i=0;i<x.length;i++)
                {
                    
                    if((Math.abs(x[i]-x1)<10)&&(Math.abs(y[i]-y1)<10))
                    {
                        sourceCount++;
                        if(sourceCount==1){
                            
                            var ctx = canvas.getContext("2d");
                            ctx.beginPath();
            
                            ctx.arc(x[i], y[i], 10, 0, 2 * Math.PI);
                            ctx.strokeStyle="tomato";
                            ctx.fillStyle="tomato";
                            ctx.fill();
                            ctx.fillStyle = "white";
                            ctx.textAlign="center";
                            ctx.font="15px Arial";
                            ctx.fillText(i,x[i],y[i]+3);
            
                            ctx.stroke(); 
                            ctx.closePath();
                            sourceVertice=i;
                        
                       
                        } 
                        
                    }
                   
                }

            }

        });

    }
    else{
        sourceButton.style.backgroundColor="inherit";
       
         canvas.removeEventListener('click',event);
    }


}
function dfs()
{
    addDfsclicks++;
    if(addDfsclicks%2==1)
    {
   
    //     if(addVertexclicks%2==1)
    // {
    //     addvertex();
    // }
    // if(addEdgeclicks%2==1)
    // {
    //     addedge();

    // }
    // if(addSourceClicks%2==1)
    // {
    //     source();
    // }
        dfsButton.style.backgroundColor="blue";
       
        dfsfun();
        
    }
    else{
        dfsButton.style.backgroundColor="inherit";
    }
}

    function dfsfun()
        {      var fa=[];
            
           
               
                var g=new graph();
               
               
                for(let i=0;i<x.length;i++)
                {
                        g.addVertex(i);
                    
                }
                for(let i=0;i<ex.length;i++)
                {
                    g.addEdge(ex[i][0],ex[i][1]);

                }
                for(let i=0;i<x.length;i++)
                {
                    g.arr[i].color="white";
                }
               
                dfstraversal(fa,g,sourceVertice);
               
               
                var canvas=document.getElementById("canvas1");
                for(var i=0;i<fa.length;i++)
                {
                    var numeric;
                    for(var j=0;j<x.length;j++)
                    {
                        if(x[j]==x[fa[i]])
                        {
                            numeric=j;
                        }
                    }
                   
                    var ctx=canvas.getContext("2d");
                    ctx.beginPath();
                    ctx.fillStyle="tomato";
                    ctx.arc(x[fa[i]],y[fa[i]],10,0,2*Math.PI);
                    ctx.fill();
                    ctx.stroke();
                    ctx.fillStyle = "white";
                    ctx.textAlign="center";
                    ctx.font="15px Arial";
                    
                    ctx.fillText(numeric,x[fa[i]],y[fa[i]]+3);
                
                    ctx.stroke(); 

                    ctx.fillStyle = "white";
                    ctx.textAlign="center";
                    ctx.font="15px Arial";
                    ctx.fillText(i,x[fa[i]],y[fa[i]]-15);
                
                    ctx.stroke(); 
                    ctx.closePath();
                   
                }
                
               
               

        }
      
      
       
       
        function dfstraversal(fa ,g,sourcevertice)
        {
            
            fa.push(sourcevertice);
             
           
          
                g.arr[sourcevertice].color="gray";

                var av=g.adjcentVertices(sourcevertice);
               
                for(var i=0;i<av.length;i++)
                {
                    if(g.arr[av[i]].color==="white")
                    {
                        dfstraversal(fa,g,av[i]);
                        

                    }

                }
        }
        class node{
                constructor(key)
                {
                    this.key=key;
                    this.next=null;
                    this.color=null;
                }
            }
     class graph
            {
                constructor()
                {
                    this.arr=[];
                }
                addVertex(value)
                {
                    var newnode=new node(value);
                    this.arr.push(newnode);
                }
                addNode(startnode,endnode)
                {
                    if(startnode.next==null)
                    {
                        startnode.next=endnode;
                    }
                    else{
                        startnode=startnode.next;
                        this.addNode(startnode,endnode);
                    }


                }
                addEdge(start,end)
                {
                    for(let i=0;i<this.arr.length;i++)
                    {
                if(this.arr[i].key==start)
                {
                    var nextnode=new node(end);
                
                    this.addNode(this.arr[i],nextnode)
                    
                    
                }


                 }
            }
            adjcentVertices(value)
            {
                var av=[];
                for(let i=0;i<this.arr.length;i++)
                {
                    if(this.arr[i].key===value)
                    {
                        var ni=this.arr[i];
                        while(ni.next!=null)
                        {
                            av.push(ni.next.key);
                            ni.next=ni.next.next;
                        }

                    }
            }
            return av;
        }
           }
        
               
            
       



