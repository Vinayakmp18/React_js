function addNumbers()
        {
            let a=parseInt(document.getElementById("value1").value);
            let b=parseInt(document.getElementById("value2").value);
            let c=(a + b);
            alert("sum="+c);
        }
        function subNumbers()
        {
            let a=(document.getElementById("value1").value);
            let b=(document.getElementById("value2").value);
            let c=a-b;
            alert("difference="+c);
        }
        function mulNumbers()
        {
            let a=(document.getElementById("value1").value);
            let b=(document.getElementById("value2").value);
            let c=a*b;
            alert("product="+c);
        }
        function divNumbers()
        {
            let a=(document.getElementById("value1").value);
            let b=(document.getElementById("value2").value);
            let c=a/b;
            alert("division result="+c);
        }