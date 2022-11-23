$(document).ready(function () {

    let saveSound= new Audio('audio/confirmation.wav');
    let click = new Audio("audio/click.wav");
    let power = new Audio("audio/on.wav");

    // change color on arrow down
    $(".color .down").click(function () {
        if($(this).siblings().hasClass("black")){
            $(".color .select").removeClass("black");
            $(".color .select").addClass("red");
        }
        else if($(this).siblings().hasClass("red")){
            $(".color .select").removeClass("red")
            $(".color .select").addClass("green");
        }
        else if($(this).siblings().hasClass("green")){
            $(".color .select").removeClass("green")
            $(".color .select").addClass("blue");
        }
        else{
            $(".color .select").removeClass("blue")
            $(".color .select").addClass("black");
        }
        $(".check").addClass("checked");
        $(".check").removeClass("greenColor");
        checkIfOriginalSettings();
    });

    // change color on arrow up
    $(".color .up").click(function () {
        if($(this).siblings().hasClass("black")){
            $(".color .select").removeClass("black");
            $(".color .select").addClass("blue");
        }
        else if($(this).siblings().hasClass("red")){
            $(".color .select").removeClass("red")
            $(".color .select").addClass("black");
        }
        else if($(this).siblings().hasClass("green")){
            $(".color .select").removeClass("green")
            $(".color .select").addClass("red");
        }
        else{
            $(".color .select").removeClass("blue")
            $(".color .select").addClass("green");
        }
        $(".check").addClass("checked");
        $(".check").removeClass("greenColor");
        checkIfOriginalSettings();
    });

    // change animal on arrow down
    $(".animal .down").click(function () {
        if($(".fa-kiwi-bird").hasClass("active")){
            $(".fa-kiwi-bird").removeClass("active");
            $(".fa-dog").addClass("active");
        } else if($(".fa-dog").hasClass("active")){
            $(".fa-dog").removeClass("active");
            $(".fa-fish").addClass("active");
        } else if($(".fa-fish").hasClass("active")){
            $(".fa-fish").removeClass("active");
            $(".fa-crow").addClass("active");
        } else if($(".fa-crow").hasClass("active")){
            $(".fa-crow").removeClass("active");
            $(".fa-cat").addClass("active");
        } else{
            $(".fa-cat").removeClass("active");
            $(".fa-kiwi-bird").addClass("active");
        }
        $(".check").addClass("checked");
        $(".check").removeClass("greenColor");
        checkIfOriginalSettings();
    });

     // change animal on arrow up
    $(".animal .up").click(function () {
        if($(".fa-kiwi-bird").hasClass("active")){
            $(".fa-kiwi-bird").removeClass("active");
            $(".fa-cat").addClass("active");
        } else if($(".fa-dog").hasClass("active")){
            $(".fa-dog").removeClass("active");
            $(".fa-kiwi-bird").addClass("active");
        } else if($(".fa-fish").hasClass("active")){
            $(".fa-fish").removeClass("active");
            $(".fa-dog").addClass("active");
        } else if($(".fa-crow").hasClass("active")){
            $(".fa-crow").removeClass("active");
            $(".fa-fish").addClass("active");
        } else{
            $(".fa-cat").removeClass("active");
            $(".fa-crow").addClass("active");
        }
        $(".check").addClass("checked");
        $(".check").removeClass("greenColor");
        checkIfOriginalSettings();
    });

      // change accessory on arrow down
      $(".accessory .down").click(function () {
        if($(".fa-headphones").hasClass("active")){
            $(".fa-headphones").removeClass("active");
            $(".fa-hat-cowboy").addClass("active");
        } else if($(".fa-hat-cowboy").hasClass("active")){
            $(".fa-hat-cowboy").removeClass("active");
            $(".fa-graduation-cap").addClass("active");
        } else if($(".fa-graduation-cap").hasClass("active")){
            $(".fa-graduation-cap").removeClass("active");
            $(".fa-hat-wizard").addClass("active");
        } else if($(".fa-hat-wizard").hasClass("active")){
            $(".fa-hat-wizard").removeClass("active");
            $(".fa-mask").addClass("active");
        } else{
            $(".fa-mask").removeClass("active");
            $(".fa-headphones").addClass("active");
        }
        $(".check").addClass("checked");
        $(".check").removeClass("greenColor");
        checkIfOriginalSettings();
    });

     // change accessory on arrow up
    $(".accessory .up").click(function () {
        if($(".fa-headphones").hasClass("active")){
            $(".fa-headphones").removeClass("active");
            $(".fa-mask").addClass("active");
        } else if($(".fa-hat-cowboy").hasClass("active")){
            $(".fa-hat-cowboy").removeClass("active");
            $(".fa-headphones").addClass("active");
        } else if($(".fa-graduation-cap").hasClass("active")){
            $(".fa-graduation-cap").removeClass("active");
            $(".fa-hat-cowboy").addClass("active");
        } else if($(".fa-hat-wizard").hasClass("active")){
            $(".fa-hat-wizard").removeClass("active");
            $(".fa-graduation-cap").addClass("active");
        } else{
            $(".fa-mask").removeClass("active");
            $(".fa-hat-wizard").addClass("active");
        }
        $(".check").addClass("checked");
        $(".check").removeClass("greenColor");
        checkIfOriginalSettings();
    });

    function checkIfOriginalSettings() {
        if($(".fa-kiwi-bird").hasClass("active") && $(".fa-headphones").hasClass("active") && $(".select").hasClass("black")){
            $(".check").removeClass("checked");
        }
    }

    $(".lock").click(function () {
        if($(".offPage").hasClass("d-none")){
            click.play();
            $(".lockPage").toggleClass("d-none");

            if($(".confirmPage").hasClass("d-none")){
                $(".settings").removeClass("d-none");
                $(".check").removeClass("checked");
            } else {
                $(".settings").addClass("d-none");
            }
            
        }
    });

    $(".confirm").click(function () {

        if($(this).hasClass("checked")){
            $(".confirmPage").removeClass("d-none");
            $(".settings").addClass("d-none");
        }
    });

    $(".save").click(function () {
        $(".confirmPage").addClass("d-none");
        $(".settings").removeClass("d-none");
        $(".check").removeClass("checked");
        saveSound.play();
    });

    $(".confirmPage .quit").click(function () {
        $(".confirmPage").addClass("d-none");
        $(".settings").removeClass("d-none");
    });

    $(".off").click(function () {
        if($(".offPage").hasClass("d-none")){
            $(".led-container").addClass("no-light");

            $(".offPage").removeClass("d-none");

            $(".confirmPage").addClass("d-none");
            $(".settings").addClass("d-none");

            $(".lockPage").removeClass("d-none");
        } else{
            $(".led-container").removeClass("no-light");
            $(".offPage").addClass("d-none");
            power.play();
        }
    });
    


});