function showbutton(){
    document.getElementsByClassName('cardstyle')[0].addEventListener("mouseover", function(event) {
        // highlight the mouseover target
        let but = document.getElementsByClassName('buybutton')
        but[0].style.visibility = "visible";
        but[0].style.margin = "0.5em auto";
        but[0].style.transition = "all 0.6s";
        
    });
    
    document.getElementsByClassName('cardstyle')[1].addEventListener("mouseover", function(event) {
        // highlight the mouseover target
        let but = document.getElementsByClassName('buybutton')
        but[1].style.visibility = "visible";
        but[1].style.margin = "0.5em auto";
        but[1].style.transition = "all 0.6s";
        
    });
    
    document.getElementsByClassName('cardstyle')[2].addEventListener("mouseover", function(event) {
        // highlight the mouseover target
        let but = document.getElementsByClassName('buybutton')
        but[2].style.visibility= "visible";
        but[2].style.margin = "0.5em auto";
        but[2].style.transition = "all 0.6s";
        
    });
    
    document.getElementsByClassName('cardstyle')[3].addEventListener("mouseover", function(event) {
        // highlight the mouseover target
        let but = document.getElementsByClassName('buybutton')
        but[3].style.visibility= "visible";
        but[3].style.margin = "0.5em auto";
        but[2].style.transition = "all 0.6s";
        
    });
    
    }

// HIDE BUTTON

    function hidebutton(){
        document.getElementsByClassName('cardstyle')[0].addEventListener("mouseout", function(event) {
            // highlight the mouseover target
            let but = document.getElementsByClassName('buybutton')
            but[0].style.visibility= "hidden";
            but[0].style.transition = "all 0s";
    
            let card = document.getElementsByClassName('cardstyle')[0]
            card[0].style.height= "28em";
            card[0].style.transition = "all 0.5s";
            
        });
        
        document.getElementsByClassName('cardstyle')[1].addEventListener("mouseout", function(event) {
            // highlight the mouseover target
            let but = document.getElementsByClassName('buybutton')
            but[1].style.visibility= "hidden";
            but[1].style.transition = "all 0s";
    
            let card = document.getElementsByClassName('cardstyle')[1]
            card[1].style.height= "28em";
            card[1].style.transition = "all 0.5s";
            
        });
    
        document.getElementsByClassName('cardstyle')[2].addEventListener("mouseout", function(event) {
            // highlight the mouseover target
            let but = document.getElementsByClassName('buybutton')
            but[2].style.visibility= "hidden";
            but[2].style.transition = "all 0s";
            
            let card = document.getElementsByClassName('cardstyle')[2]
            card[2].style.height= "28em";
            card[2].style.transition = "all 0.5s";
        });
    
        document.getElementsByClassName('cardstyle')[3].addEventListener("mouseout", function(event) {
            // highlight the mouseover target
            let but = document.getElementsByClassName('buybutton')
            but[3].style.visibility= "hidden";
            but[3].style.transition = "all 0s";
            
            let card = document.getElementsByClassName('cardstyle')[3]
            card[3].style.height= "28em";
            card[3].style.transition = "all 0.5s";
        });
    }