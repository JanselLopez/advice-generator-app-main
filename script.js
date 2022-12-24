var body = document.getElementsByTagName("body")[0];
var container = document.getElementById("container")
var mainParent = document.getElementsByTagName("main")[0];
var separator = document.getElementById("separator");
var quote = document.getElementById("quote");
var title = document.getElementById("title")
var button = document.getElementById("circle-button");

button.addEventListener("click",
        function(){
            fetch("https://api.adviceslip.com/advice")
                .then(res=> res.json())
                .then((response) => response.slip)
                .then((data)=>{
                    title.textContent = "ADVICE #"+data.id
                    quote.textContent = data.advice
                })
                .catch(err=> console.error(err))
        }
)
let halfButton  = button.clientHeight/2
const resizeObserver = new ResizeObserver(entries => 
    {
        container.style.height = entries[0].target.clientHeight - halfButton +"px";
        var width = separator.width;
        if(entries[0].target.clientWidth<=375){
            quote.style.width = width+2+"px";
        }else if(entries[0].target.clientWidth<=572){
            mainParent.style.width = "100%"
            mainParent.style.margin = "15px"
        }else{
            mainParent.style.width = width + 97+"px";
            quote.style.width = width+ 2 +"px";
        }
    }
  )
resizeObserver.observe(document.body)
