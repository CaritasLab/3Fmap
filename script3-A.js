function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){

        case "1":
            myURL = "A3-A1.mp4"
            break;

            case "2":
            myURL = "A3-B1.mp4"
            break;

            case "3":
            myURL = "A3-C1.mp4"
            break;

            case "4":
            myURL = "A3-D1.mp4"
            break;

            case "5":
            myURL = "A3-A2.mp4"
            break;

            case "6":
            myURL = "A3-B2.mp4"
            break;

            case "7":
            myURL = "A3-C2.mp4"
            break;

            case "8":
            myURL = "A3-B2.mp4"
            alert("2階講堂はB階段（黄色）エリアの先にあります。マップからご確認ください。");
            break;

            case "9":
            myURL = "A3-D2.mp4"
            break;
         

        case "10":
            myURL = "3F.jpg"
            alert("3階講堂はB階段（黄色）エリアの先にあります。マップからご確認ください。");
            
            break;

        case "11":
            myURL = "3F.jpg"
            alert("目的地は現在地と同じ3階A階段(赤)エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;
        
            case "12":
            myURL = "3a-b.mp4"
            break;

            case "13":
            myURL = "3a-d.mp4"
            break;

            case "14":
            myURL = "A3-A4.mp4"
            break;

            case "15":
            myURL = "A3-B4.mp4"
            break;

            case "16":
            myURL = "A3-D4.mp4"
            break;


        }
    
        location.href = myURL;
        return 0;
        }

        
    