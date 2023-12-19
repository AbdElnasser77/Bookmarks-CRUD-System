
var bookmarksName = document.getElementById('bookmarkName')
var bookmarksUrl = document.getElementById('bookmarkUrl')


var Bookmarks = [];
if(localStorage.getItem('bookmarks')){
    Bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    display();
}



function Add(){
    if(bookmarksName.value && bookmarksUrl.value){

        addBookmark();
        display();
        clear();

    }else{
        if(bookmarksName.value){
            window.alert("Please Enter Site URL ")
        }else if(bookmarksUrl.value)
            window.alert("Please Enter Site Name ")
        else{
            window.alert("Please Enter Site Name and URL ")
        }
    }
}
function addBookmark(){
    var site = {
        Name : document.getElementById('bookmarkName').value,
        URL : document.getElementById('bookmarkUrl').value
    }

    Bookmarks.push(site);

    localStorage.setItem('bookmarks',JSON.stringify(Bookmarks));
}

function display(){

    block = '';

    for(var i=0 ;i<Bookmarks.length; i++){
        
        block += `  
        <tr>
                    <td>${i+1}</td>
                    <td>${Bookmarks[i].Name}</td>
                    <td>
                    <a class = "btn btn-primary btn-visit" href="https://${Bookmarks[i].URL}" target= "_blank">
                    Visit </a>
                    </td>
                    <td><button  onclick = "deleteRow(${i})" class="btn btn-danger">Delete</button></td>
        </tr>
        `
    }
    document.getElementById('demo').innerHTML = block;
    console.log(Bookmarks.URL);
}

function clear(){
    bookmarksName.value = "";
    bookmarksUrl.value = "";

}



function deleteRow(index){
    Bookmarks.splice(index , 1);
    display();
    localStorage.setItem('bookmarks',JSON.stringify(Bookmarks));
}