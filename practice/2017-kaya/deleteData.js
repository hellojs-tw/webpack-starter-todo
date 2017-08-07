import $ from 'jquery';

function deleteData(event){
    var selected_btn = event.target
    console.log('btn', selected_btn)
    var parent = selected_btn.parentElement
    var grandParent = parent.parentElement
    grandParent.removeChild(parent)
}

export default deleteData