//2 specs for checking angular site

describe('angularjs homepage name greeting', function(){
    
      browser.get('http://angularjs.org');
    
    //First spec
    it('test name greeting', function() {
        
        //entering application url in browser
       // browser.get('http://angularjs.org');
        
        //enter text under name field
        
        element(by.model('yourName')).sendKeys('Peppa Pig');
        
        //clicks on add buttton
        element(by.css('[value="add"]')).click();
        
       var x= element(by.css('h1.ng-binding')).getText();
       
        x.then(function(text){
         console.log(text);
        });
     });
                                                                        
               
       // Second spec
        
        it('test todo list',function(){
            
        
        element(by.model('todoList.todoText')).sendKeys('testing todo list');
            
        //display lists
       var todoList = element.all(by.repeater('todo in todoList.todos'));
        
        //added todo count
        expect(todoList.count()).toEqual(3);
        
        //check newly entered todo in the list
       // expect((todoList.get(2).getText()).toEqual('testing todo list'));
            
          var y =  todoList.get(2).getText();
            y.then(function(text){
         console.log(text);
       // console.log('yes');
        });
    });
});
   // });