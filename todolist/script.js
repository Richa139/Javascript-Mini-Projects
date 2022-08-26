document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
               <div id="task">
                <input type="checkbox" id="ss"/>
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                &nbsp;&nbsp;
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
                </div>
                document.querySelector('#newtask input').value.length == 0;
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        
    }

}     

