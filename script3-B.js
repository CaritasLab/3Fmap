function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){

        case "1":
            myURL = "B3-A1.mp4"
            break;

            case "2":
            myURL = "B3-B1.mp4"
            break;

            case "3":
            myURL = "B3-C1.mp4"
            break;

            case "4":
            myURL = "B3-D1.mp4"
            break;

            case "5":
            myURL = "B3-A2.mp4"
            break;

            case "6":
            myURL = "B3-B2.mp4"
            break;

            case "7":
            myURL = "B3-C2.mp4"
            break;

            case "8":
                myURL = "B3-B2.mp4"
                alert("2階講堂はB階段（黄色）エリアの先にあります。マップからご確認ください。");
            break;

            case "9":
            myURL = "B3-D2.mp4"
            break;


            case "10":
                myURL = "3F.jpg"
                alert("3階講堂はB階段（黄色）エリアの先にあります。マップからご確認ください。");
            break;

            case "11":
            myURL = "3b-a.mp4"
            break;

        
            case "12":
                myURL = "3F.jpg"
                alert("目的地は現在地と同じ3階B階段(黄色)エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;


            case "13":
            myURL = "3b-d.mp4"
            break;


            case "14":
            myURL = "B3-A4.mp4"
            break;


            case "15":
            myURL = "B3-B4.mp4"
            break;

            case "16":
            myURL = "B3-D4.mp4"
            break;




        }
    
        location.href = myURL;
        return 0;
        }

        
    