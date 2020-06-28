let menu = null;
        document.addEventListener('DOMContentLoaded', function(){
            //meniu este ascuns
            menu = document.querySelector('.menu');
            menu.classList.add('off');
            
            //click dreapta in 'box'
            let box = document.getElementById('box');
            box.addEventListener('contextmenu', showmenu);
            
            //dupa ce parasesti supraf meniului dispare
            menu.addEventListener('mouseleave', hidemenu);
            
            //listeners
            addMenuListeners();
        });
        
        function addMenuListeners(){
            document.getElementById('aquamarine').addEventListener('click', setAction);
            document.getElementById('25px').addEventListener('click', setAction);
            document.getElementById('blue').addEventListener('click', setAction);
        }
        
        function setAction(ev){
            hidemenu();
            let clr = ev.target.id;
            if(clr == "aquamarine")
            document.getElementById('box').style.backgroundColor = clr;
            else if (clr == "25px")
            document.getElementById('box').style.fontSize = clr;
            else if (clr == "blue")
            document.getElementById('box').style.color = clr;
        }
        
        function showmenu(ev){
            //nu mai merge c.d. normal
            ev.preventDefault(); 
            //aratam meniul custom
            console.log( ev.clientX, ev.clientY );
            menu.style.top = `${ev.clientY - 20}px`;
            menu.style.left = `${ev.clientX - 500}px`;
            menu.classList.remove('off');
        }
        
        function hidemenu(ev){
            menu.classList.add('off');
            menu.style.top = '-200%';
            menu.style.left = '-200%';
        }