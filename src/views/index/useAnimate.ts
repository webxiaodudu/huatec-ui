 import TWEEN from '@tweenjs/tween.js'

export function useAnimate(){

    const oCavase:HTMLCanvasElement = document.querySelector('#ocavanse')!;
    const oCavase2:HTMLCanvasElement = document.querySelector('#ocavanse2')!;
    const canvaseBox:HTMLDivElement = document.querySelector('.canvase-box')!
    oCavase.width=oCavase2.width=canvaseBox.clientWidth
    oCavase.height=oCavase2.height=canvaseBox.clientHeight
    const ctx= oCavase.getContext('2d');
    const ctx2 = oCavase2.getContext('2d');
    let targetArr:any[]=[]
    let initPos:any[]=[];
    let tween=null;

    const str = 'HuatecUI'

    ctx!.font='bold 200px Arial';
    ctx!.textBaseline='top'
    ctx!.fillStyle="#fff"
    ctx!.fillText(str,0,0,oCavase.width/2);

    const data = ctx!.getImageData(0,0,750,300);
    ctx2!.imageSmoothingEnabled = false//设置平滑处理
    ctx2!.putImageData(data,oCavase2.width/2-data.width/2,oCavase2.height/2-data.height/2)

    initParticalPos(data.data,data.width,data.height)
    targetArr=randArr(targetArr)//随机打乱

    for(let i=0;i<initPos.length;i++){
      
       setTimeout(()=>{
            tween = new TWEEN.Tween(initPos[i]).repeat(5).to({x:targetArr[i].x,y:targetArr[i].y,r:1}, Math.random()*(1000-500)+500).easing(TWEEN.Easing.Quadratic.Out).onUpdate(function(){
           
            }).start()
            tween.onComplete((obj)=>{
                new TWEEN.Tween(obj).repeat(Infinity).to({r:Math.random()*(5-2)+2}).start()
            })
       },Math.random()*300) 
    }
    move()

    ////////

    function randomXY():{x:number,y:number}{
        //随机横纵坐标，保证选坐标在可视区外
         const x = Math.random()*(3*oCavase2.width)-oCavase2.width;
         const y= Math.random()*(3*oCavase2.height)-oCavase2.height;
         let flagX = false
         let flagY = false
         if(x>-250&&x<(oCavase2.width+250)){
            // randomXY()
             flagX=false
         }
         else{
             flagX=true
         }
         if(y>-250&&y<(oCavase2.height+250)){
             flagY=false
             //randomXY()
         }
         else{
             flagY=true
         }
    
         if(!flagX||!flagY){
            return randomXY()
         }
         else{
             return {x,y}
         }
        
    }


    function initParticalPos(data: any,w: any,h: any){
        targetArr=JSON.parse(JSON.stringify(savePartical(data,w,h)));
         initPos= targetArr.map((item:any,index: any)=>{
             const {x,y} = randomXY()
             console.log(x,y,' ==randomXy')
             return {
                 x,
                 y,
                 r:250,
                 color:item.color,
                 draw:function(){
                   
                    // console.log(partical);
                    //ctx2.clearRect(0,0,oCavase2.width,oCavase2.height)
                    // for(let i=0;i<partical.length;i++){
    
                            const {x,y,color,r} = this
                   
                            ctx2!.fillStyle=color;
    
                            ctx2!.beginPath();
                          
                            
                            
                            ctx2!.arc(x,y,r,0,Math.PI*2)
    
                            ctx2!.closePath();
                            ctx2!.fill()
                            
                           
                }
                
             }
         })
        
    
    }

    /////////////
    function savePartical(data: number[],width: number,height: number){
        //选取像素点，将图像分成，100*100的区块，如果从每个区块颜色r通道大于200就保存
        // console.log(width,height,' ===00i');
         let w=width/100
         let h = height/100;
         const arr =[]
         
         for(let y=0;y<height;y+=h){
            
             for(let x=0;x<width;x+=w){
                 const index = (y*width+x)*4
                 //console.log(index,' =123');
                 if(data[index]>200){
                     //console.log(index, ' --=index--');
                     arr.push({x:(oCavase2.width/2-width/2+x),y:((oCavase2.height/2-height/2+y)),color:`rgba(${Math.round(Math.random()*(255-10)+10)},${Math.round(Math.random()*(255-10)+10)},${Math.round(Math.random()*(255-10)+10)},1)`})
                 }
             }
         }
         return arr
    
    }

    ///////////
    
        function randArr(arr:any[]) {
            //随机打乱数组
        for (var i = 0; i < arr.length; i++) {
            let index = arr.length * Math.random()
            var iRand = parseInt(index+'');
            var temp = arr[i];
            arr[i] = arr[iRand];
            arr[iRand] = temp;
        }
        return arr;
        }


    /////

    function move(){
        TWEEN.update()
        ctx2!.clearRect(0,0,oCavase2.width,oCavase2.height);
        
        //console.log(Createjs,' ==createjs');
        //createjs.Tween.get(partical).to({x:target.x,y:target.y}, 2000)
        for(let i=0;i<initPos.length;i++){
            
            // initPos[i].x-=Math.random()*10
            // initPos[i].y-=Math.random()*10
            initPos[i].draw()
        }
        
       //console.log(partical.draw,'  ==---partical');
        window.requestAnimationFrame(move)
   }
    /////////////
}







