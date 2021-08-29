let showPass = (e)=>{
    const state = e.target.classList[0];
    const input = document.getElementById('pass');
    if(state){
        if(state==='hide'){
            e.target.classList.remove('hide')
            e.target.classList.add('show')
            input.type='text';
        }
        if(state==='show'){
            e.target.classList.remove('show')
            e.target.classList.add('hide')
            input.type='password';
        }
    } 
}