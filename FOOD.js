class FOOD{
    constructor(){

    }

    display(){
        background(bgimg11);

        form.gunshop.hide();
        form.canteen.hide();
        form.store.hide();
        form.islands.hide();

        this.back=createButton('BACK <-');
        this.back.position(50,20);
        this.back.style("height",'65px');
        this.back.style("width",'100px');
        this.back.style("font-size","30px");
        this.back.style("color",'orange');
        this.back.style('background','black');

        strokeWeight(25);
        stroke('black');

            food1=createSprite(windowWidth/2-400,255);
            food1.addImage(food1img);
            food1.scale=0.25;
            this.coinbutton1=createButton("RS.200/-");
            this.coinbutton1.position(windowWidth/2-450,300);
            this.name1=createButton("+30 HEALTH");
            this.name1.position(windowWidth/2-450,170);
            this.name1.style('color','yellow');
            this.name1.style('background',"black");
            rectMode(CENTER);
            fill("blue");
            rect(windowWidth/2-400,250,150,200);

            this.coinbutton1.mousePressed(()=>{
                health+=30;
            })

            food2=createSprite(windowWidth/2-400,455);
            food2.addImage(food2img);
            food2.scale=0.25;
            this.coinbutton2=createButton("RS.350/-");
            this.coinbutton2.position(windowWidth/2-450,500);
            this.name2=createButton("+45 HEALTH");
            this.name2.position(windowWidth/2-450,370);
            this.name2.style('color','red');
            this.name2.style('background',"black");
            rectMode(CENTER);
            fill("orange");
            rect(windowWidth/2-400,450,150,200);

            this.coinbutton2.mousePressed(()=>{
                health+=45;
            })

            food3=createSprite(windowWidth/2-400,655);
            food3.addImage(food3img);
            food3.scale=0.2;
            this.coinbutton3=createButton("RS.600/-");
            this.coinbutton3.position(windowWidth/2-450,700);
            this.name3=createButton("+100 HEALTH");
            this.name3.position(windowWidth/2-450,570);
            this.name3.style('color','yellow');
            this.name3.style('background',"black");
            rectMode(CENTER);
            fill("purple");
            rect(windowWidth/2-400,650,150,200);

            this.coinbutton3.mousePressed(()=>{
                health+=100;
            })

            food4=createSprite(windowWidth/2-200,255);
            food4.addImage(food4img);
            food4.scale=0.3;
            this.coinbutton4=createButton("RS.1000/-");
            this.coinbutton4.position(windowWidth/2-250,300);
            this.name4=createButton("+200 HEALTH");
            this.name4.position(windowWidth/2-250,170);
            this.name4.style('color','yellow');
            this.name4.style('background',"black");
            rectMode(CENTER);
            fill("blue");
            rect(windowWidth/2-200,250,150,200);

            this.coinbutton4.mousePressed(()=>{
                health+=200;
            })

            food5=createSprite(windowWidth/2-200,455);
            food5.addImage(food5img);
            food5.scale=0.2;
            this.coinbutton5=createButton("RS.1200/-");
            this.coinbutton5.position(windowWidth/2-250,500);
            this.name5=createButton("+250 HEALTH");
            this.name5.position(windowWidth/2-250,370);
            this.name5.style('color','yellow');
            this.name5.style('background',"black");
            rectMode(CENTER);
            fill("orange");
            rect(windowWidth/2-200,450,150,200);

            this.coinbutton5.mousePressed(()=>{
                health+=250;
            })

            food6=createSprite(windowWidth/2-200,655);
            food6.addImage(food6img);
            food6.scale=0.2;
            this.coinbutton6=createButton("RS.1300/-");
            this.coinbutton6.position(windowWidth/2-250,700);
            this.name6=createButton("+350 HEALTH");
            this.name6.position(windowWidth/2-250,570);
            this.name6.style('color','yellow');
            this.name6.style('background',"black");
            rectMode(CENTER);
            fill("purple");
            rect(windowWidth/2-200,650,150,200);

            this.coinbutton6.mousePressed(()=>{
                health+=350;
            })

            food7=createSprite(windowWidth/2,255);
            food7.addImage(food7img);
            food7.scale=0.25;
            this.coinbutton7=createButton("RS.1500/-");
            this.coinbutton7.position(windowWidth/2-50,300);
            this.name7=createButton("+500 HEALTH");
            this.name7.position(windowWidth/2-50,170);
            this.name7.style('color','yellow');
            this.name7.style('background',"black");
            rectMode(CENTER);
            fill("blue");
            rect(windowWidth/2,250,150,200);

            this.coinbutton7.mousePressed(()=>{
                health+=500;
            })

            food8=createSprite(windowWidth/2,455);
            food8.addImage(food8img);
            food8.scale=0.25;
            this.coinbutton8=createButton("RS.1650/-");
            this.coinbutton8.position(windowWidth/2-50,500);
            this.name8=createButton("+600 HEALTH");
            this.name8.position(windowWidth/2-50,370);
            this.name8.style('color','yellow');
            this.name8.style('background',"black");
            rectMode(CENTER);
            fill("orange");
            rect(windowWidth/2,450,150,200);

            this.coinbutton8.mousePressed(()=>{
                health+=600;
            })

            food9=createSprite(windowWidth/2,655);
            food9.addImage(food9img);
            food9.scale=0.25;
            this.coinbutton9=createButton("RS.1800/-");
            this.coinbutton9.position(windowWidth/2-50,700);
            this.name9=createButton("+700 HEALTH");
            this.name9.position(windowWidth/2-50,570);
            this.name9.style('color','yellow');
            this.name9.style('background',"black");
            rectMode(CENTER);
            fill("purple");
            rect(windowWidth/2,650,150,200);

            this.coinbutton9.mousePressed(()=>{
                health+=700;
            })

            food10=createSprite(windowWidth/2+200,255);
            food10.addImage(food10img);
            food10.scale=0.25;
            this.coinbutton10=createButton("RS.2000/-");
            this.coinbutton10.position(windowWidth/2+150,300);
            this.name10=createButton("+800 HEALTH");
            this.name10.position(windowWidth/2+150,170);
            this.name10.style('color','yellow');
            this.name10.style('background',"black");
            rectMode(CENTER);
            fill("blue");
            rect(windowWidth/2+200,250,150,200);

            this.coinbutton10.mousePressed(()=>{
                health+=800;
            })

            food11=createSprite(windowWidth/2+200,455);
            food11.addImage(food11img);
            food11.scale=0.25;
            this.coinbutton11=createButton("RS.2100/-");
            this.coinbutton11.position(windowWidth/2+150,500);
            this.name11=createButton("+850 HEALTH");
            this.name11.position(windowWidth/2+150,370);
            this.name11.style('color','yellow');
            this.name11.style('background',"black");
            rectMode(CENTER);
            fill("orange");
            rect(windowWidth/2+200,450,150,200);

            this.coinbutton11.mousePressed(()=>{
                health+=850;
            })

            food12=createSprite(windowWidth/2+200,655);
            food12.addImage(food12img);
            food12.scale=0.25;
            this.coinbutton12=createButton("RS.2200/-");
            this.coinbutton12.position(windowWidth/2+150,700);
            this.name12=createButton("+900 HEALTH");
            this.name12.position(windowWidth/2+150,570);
            this.name12.style('color','yellow');
            this.name12.style('background',"black");
            rectMode(CENTER);
            fill("purple");
            rect(windowWidth/2+200,650,150,200);

            this.coinbutton12.mousePressed(()=>{
                health+=900;
            })

            food13=createSprite(windowWidth/2+400,255);
            food13.addImage(food13img);
            food13.scale=0.25;
            this.coinbutton13=createButton("RS.2300/-");
            this.coinbutton13.position(windowWidth/2+350,300);
            this.name13=createButton("+1000 HEALTH");
            this.name13.position(windowWidth/2+350,170);
            this.name13.style('color','yellow');
            this.name13.style('background',"black");
            rectMode(CENTER);
            fill("blue");
            rect(windowWidth/2+400,250,150,200);

            this.coinbutton13.mousePressed(()=>{
                health+=1000;
            })

            food14=createSprite(windowWidth/2+400,455);
            food14.addImage(food14img);
            food14.scale=0.25;
            this.coinbutton14=createButton("RS.2400/-");
            this.coinbutton14.position(windowWidth/2+350,500);
            this.name14=createButton("+1100 HEALTH");
            this.name14.position(windowWidth/2+350,370);
            this.name14.style('color','yellow');
            this.name14.style('background',"black");
            rectMode(CENTER);
            fill("orange");
            rect(windowWidth/2+400,450,150,200);

            this.coinbutton14.mousePressed(()=>{
                health+=1100;
            })

            food15=createSprite(windowWidth/2+400,655);
            food15.addImage(food15img);
            food15.scale=0.25;
            this.coinbutton15=createButton("RS.2500/-");
            this.coinbutton15.position(windowWidth/2+350,700);
            this.name15=createButton("+1500 HEALTH");
            this.name15.position(windowWidth/2+350,570);
            this.name15.style('color','yellow');
            this.name15.style('background',"black");
            rectMode(CENTER);
            fill("purple");
            rect(windowWidth/2+400,650,150,200);

            this.coinbutton15.mousePressed(()=>{
                health+=1500;
            })

            this.back.mousePressed(()=>{
                background(bgimg6);
                food1.visible=false;
                food2.visible=false;
                food3.visible=false;
                food4.visible=false;
                food5.visible=false;
                food6.visible=false;
                food7.visible=false;
                food8.visible=false;
                food9.visible=false;
                food10.visible=false;
                food11.visible=false;
                food12.visible=false;
                food13.visible=false;
                food14.visible=false;
                food15.visible=false;

                this.coinbutton1.hide();
                this.coinbutton2.hide();
                this.coinbutton3.hide();
                this.coinbutton4.hide();
                this.coinbutton5.hide();
                this.coinbutton6.hide();
                this.coinbutton7.hide();
                this.coinbutton8.hide();
                this.coinbutton9.hide();
                this.coinbutton10.hide();
                this.coinbutton11.hide();
                this.coinbutton12.hide();
                this.coinbutton13.hide();
                this.coinbutton14.hide();
                this.coinbutton15.hide();

                this.name1.hide();
                this.name2.hide();
                this.name3.hide();
                this.name4.hide();
                this.name5.hide();
                this.name6.hide();
                this.name7.hide();
                this.name8.hide();
                this.name9.hide();
                this.name10.hide();
                this.name11.hide();
                this.name12.hide();
                this.name13.hide();
                this.name14.hide();
                this.name15.hide();

                form.canteen.show();
                form.islands.show();
                form.store.show();
                form.gunshop.show();

                this.store.mousePressed(() => {
                    character=new CHARACTER();
                    character.display();

                    form.canteen.hide();
                    form.islands.hide();
                    form.store.hide();
                    form.gunshop.hide();
                })
    
                this.gunshop.mousePressed(()=>{
                    gunshop=new GUNSHOP();
                    gunshop.display();

                    form.canteen.hide();
                    form.islands.hide();
                    form.store.hide();
                    form.gunshop.hide();
                })
    
                this.canteen.mousePressed(()=>{
                    food=new FOOD ();
                    food.display();

                    form.canteen.hide();
                    form.islands.hide();
                    form.store.hide();
                    form.gunshop.hide();
                })

                this.islands.mousePressed(()=>{
                    map=new MAP ();
                    map.display();

                    form.canteen.hide();
                    form.islands.hide();
                    form.store.hide();
                    form.gunshop.hide();
                
                })

            })

    }
}