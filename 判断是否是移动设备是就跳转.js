window.onload = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var Phone = false;
    var i = 0
    for (i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {//只要首次出现就可以了
            Phone = true;
            alert(Agents[i]);
            break;
        }
    }
    if (Phone) {
        window.location = '跳转到手机页面'; 
    }
};

 <script type="text/javascript">
    $(function() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"
        ];
        var pc = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                pc = false;
                break;
            }
        }
       if(pc){
        window.location='跳转到电脑页面';
       }
    });
    </script>
// html5兼容
<!–[if IE]>
<script src=”http://html5shiv.googlecode.com/svn/trunk/html5.js”></script>
<![endif]–>