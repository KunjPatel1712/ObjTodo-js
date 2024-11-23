let form = document.getElementById("form");

form.addEventListener('submit',(e)=>
{
    e.preventDefault();

    let Taskname = document.getElementById("task").value;

    let priorityname = document.getElementById("priority").value;

    let Obj =
    {
        task : Taskname,
        priority : priorityname
    };

    console.log(Obj);

    document.getElementById("task").value = "";
    document.getElementById("priority").value="";
    
})




