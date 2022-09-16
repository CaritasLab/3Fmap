function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){

        case "1":
            myURL = "D3-A1.mp4"
            break;

            case "2":
            myURL = "D3-B1.mp4"
            break;

            case "2'":
                myURL = "A4-B1.mp4"
                alert("体育館、資料室は１階B階段（黄色）カテゴリーの正面玄関を左に進むと到着します。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;
    
        

            case "3":
            myURL = "D3-C1.mp4"
            break;

            case "4":
            myURL = "D3-D1.mp4"
            break;

            case "5":
            myURL = "D3-A2.mp4"
            break;

            case "6":
            myURL = "D3-B2.mp4"
            break;

            case "7":
            myURL = "D3-C2.mp4"
            break;

            case "8":
            myURL = "D3-B2.mp4"
            alert("2階講堂はB階段（黄色）エリアの先にあります。マップからご確認ください。");
            break;

            case "9":
            myURL = "D3-D2.mp4"
            break;

            case "10":
                myURL = "3F.jpg"
                alert("3階講堂はB階段（黄色）エリアの先にあります。マップからご確認ください。");
            break;

            case "11":
            myURL = "3d-a.mp4"
            break;


            case "12":
            myURL = "3d-b.mp4"
            break;


            case "13":
            myURL = "3F.jpg"
            alert("目的地は現在地と同じ3階D階段(水色)エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
            break;

            case "14":
            myURL = "D3-A4.mp4"
            break;
            
            case "15":
            myURL = "D3-B4.mp4"
            break;

            case "16":
            myURL = "D3-D4.mp4"
            break;


            
        }
    
        location.href = myURL;
        return 0;
        }

        
    