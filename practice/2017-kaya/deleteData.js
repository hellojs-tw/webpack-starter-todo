import $ from 'jquery';


// document.querySelector('button').addEventListener("click", deleteData);

function deleteData(event){
    console.log('evt', event)
    var selected_btn = event.target
    var parent = selected_btn.parentElement
    var grandParent = parent.parentElement
    grandParent.parentElement.removeChild(grandParent)
    //$(this).closest("li").remove(); 
}

export default deleteData