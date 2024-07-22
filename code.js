

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["926f09fa-3601-4363-9f81-0a71f4925732","600b6686-8098-4439-b0f1-4e8356524ad8","7a66ddae-7f47-435b-9379-20b6bf32cb0d","82749874-9796-4b69-8f4f-712394b0850f","f831101c-5b0e-490b-811c-2eddcc09e615","350e59c4-d06b-41ab-89b5-72f36ce0203d","b82d5a5b-62ed-423c-b90e-f20b306c57c1","b4bc5da7-d0bf-47b5-89fd-fbc68e2466ab","c27d8628-1efb-4519-933d-748e5b74e929"],"propsByKey":{"926f09fa-3601-4363-9f81-0a71f4925732":{"name":"background","sourceUrl":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png","frameSize":{"x":400,"y":385},"frameCount":1,"looping":true,"frameDelay":10,"version":"bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bd70yXmt3QhSWOcEF8grNZiWfnsKW4d8/category_backgrounds/bg_landscape10.png"},"600b6686-8098-4439-b0f1-4e8356524ad8":{"name":"fish1","sourceUrl":"assets/api/v1/animation-library/gamelab/oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa/category_animals/fish_06.png","frameSize":{"x":396,"y":336},"frameCount":1,"looping":true,"frameDelay":2,"version":"oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":396,"y":336},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oitP3B6sJROj4Wzv4jkfuGUXFK3WhDOa/category_animals/fish_06.png"},"7a66ddae-7f47-435b-9379-20b6bf32cb0d":{"name":"fish2","sourceUrl":"assets/api/v1/animation-library/gamelab/5kjzh6zCW5ZoKDNZzN7Q_BRwq4lhtuJi/category_animals/fish_12.png","frameSize":{"x":399,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"5kjzh6zCW5ZoKDNZzN7Q_BRwq4lhtuJi","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":399,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5kjzh6zCW5ZoKDNZzN7Q_BRwq4lhtuJi/category_animals/fish_12.png"},"82749874-9796-4b69-8f4f-712394b0850f":{"name":"plant","sourceUrl":"assets/api/v1/animation-library/gamelab/Bd1hjqkSyyr858PiVpWTHpNiCsaSgcmt/category_aquatic_objects/underseadeco_24.png","frameSize":{"x":301,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"Bd1hjqkSyyr858PiVpWTHpNiCsaSgcmt","categories":["aquatic_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":301,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Bd1hjqkSyyr858PiVpWTHpNiCsaSgcmt/category_aquatic_objects/underseadeco_24.png"},"f831101c-5b0e-490b-811c-2eddcc09e615":{"name":"ship","sourceUrl":"assets/api/v1/animation-library/gamelab/Sg1jGmj2m99jSXFZrV_VTVULgWnBe91Q/category_vehicles/ship_03.png","frameSize":{"x":376,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"Sg1jGmj2m99jSXFZrV_VTVULgWnBe91Q","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":376,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Sg1jGmj2m99jSXFZrV_VTVULgWnBe91Q/category_vehicles/ship_03.png"},"350e59c4-d06b-41ab-89b5-72f36ce0203d":{"name":"happy_critter_1","sourceUrl":"assets/api/v1/animation-library/gamelab/D65coYtApI923jWqj_m8JbbY2aNTBCOl/category_fantasy/happy_critter.png","frameSize":{"x":262,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"D65coYtApI923jWqj_m8JbbY2aNTBCOl","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":262,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/D65coYtApI923jWqj_m8JbbY2aNTBCOl/category_fantasy/happy_critter.png"},"b82d5a5b-62ed-423c-b90e-f20b306c57c1":{"name":"ghost_standing_1","sourceUrl":"assets/api/v1/animation-library/gamelab/sGLFDy168GSBfI5ybuBb2KHSBqLUdc71/category_fantasy/ghost_standing.png","frameSize":{"x":72,"y":158},"frameCount":7,"looping":true,"frameDelay":2,"version":"sGLFDy168GSBfI5ybuBb2KHSBqLUdc71","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":504,"y":158},"rootRelativePath":"assets/api/v1/animation-library/gamelab/sGLFDy168GSBfI5ybuBb2KHSBqLUdc71/category_fantasy/ghost_standing.png"},"b4bc5da7-d0bf-47b5-89fd-fbc68e2466ab":{"name":"red_alien_1","sourceUrl":"assets/api/v1/animation-library/gamelab/PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV/category_fantasy/red_alien.png","frameSize":{"x":318,"y":333},"frameCount":1,"looping":true,"frameDelay":2,"version":"PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":318,"y":333},"rootRelativePath":"assets/api/v1/animation-library/gamelab/PHeFO1Wvqtn9yXIG11PmQB9eDVZJgkZV/category_fantasy/red_alien.png"},"c27d8628-1efb-4519-933d-748e5b74e929":{"name":"american_hamburger_1","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("background");
 
var hero = createSprite(200,250,78,90);
hero.shapeColor="red";

var enemy1 = createSprite(200,175,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,310,10,10); 
enemy2.shapeColor="red";

var net = createSprite(200,80,74,78);
net.shapeColor="red";

var plant = createSprite(200,370,10,10);
net.shapeColor="red";

var gameState = "play" ;

var goal =0;
var death = 0;

hero.setAnimation("happy_critter_1");
hero.scale=.15;
enemy1.setAnimation("fish1");
enemy1.scale=.1;
enemy2.setAnimation("fish2");
enemy2.scale=.1;
net.setAnimation("ship");
net.scale=.3;
plant.setAnimation("plant");
plant.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);

function draw() 
{
  createEdgeSprites();
  
  enemy1.bounceOff(edges);
  enemy2.bounceOff(edges);
  
  if (gameState == "play")
  {
    heromoviment() ;
    
    if (hero.isTouching(plant))
    {
      plant.x=hero.x;
      plant.y=hero.y;
    }
    
    if (hero.isTouching(enemy1)|| 
        hero.isTouching(enemy2) )
    {
      playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
      hero.x=200;
      hero.y=250;
      plant.x=200;
      plant.y=370;
      net.x=200;
      net.y=80;
      death = death+1;
    }
    
    if(hero.isTouching(net)&&plant.isTouching(net))
    {
      playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
      gameState = "end" ;
    }
  }
  
  if (gameState == "end")
  {
    net.velocityX = 5 ;
    plant.x = net.x;
    plant.y = net.y;
    hero.x = net.x;
    hero.y = net.y;
    
    enemy1.velocityX = 0 ;
    enemy2.velocityX = 0 ;
    
    if (net.x == 400)
    {
      spriteposition () ;
      gameState = "play" ;
    }
  }
 
  
  textSize(20);
    fill("blue");
    text("Goals:"+goal,320,350);
    
  textSize(20);
    fill("blue");
    text("death:"+death,20,350);
    
  drawSprites();
}

function heromoviment()
{
  if(keyDown(UP_ARROW))
  {
    hero.y=hero.y-3;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    hero.y=hero.y+3;
  }
  
  if(keyDown(LEFT_ARROW))
  {
    hero.x=hero.x-3;
  }
  
  if(keyDown(RIGHT_ARROW))
  {
    hero.x=hero.x+3;
  }
}

function spriteposition () 
{
  hero.x = 200 ;
  hero.y = 250 ;
  
  enemy1.x = 200 ;
  enemy1.y = 175 ;
  
  enemy2.x = 200 ; 
  enemy2.y = 310 ;
  
  plant.x = 200 ;
  plant.y = 370 ;
  
  net.x = 200 ;
  net.y = 80 ;
  
  enemy1.setVelocity(-10,0);
  enemy2.setVelocity(10,0);
  net.setVelocity(0,0) ;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
