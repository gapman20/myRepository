function dragStart(event){
    console.log('dragStart');
    event.dataTransfer.setData('Text', event.target.id);
}

function dragEnd(){
    console.log('dragEnd');
}

function drop(event) {

    var data = event.dataTransfer.getData('Text');

    if(event.target.dataset.perro == data){
        event.target.appendChild(document.getElementById(data));
        
    }
    

    console.log(data);

    console.log('drop');
}

function allowDrop(event) {
    event.preventDefault();
    /* console.log('dragover'); */
}

function dragEnter() {
    console.log('Enter');
}

function dragLeave() {
    console.log('Leave');
}