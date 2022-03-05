let n = 1;
nextPage.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                const page = JSON.parse(request.response);
                page.forEach(item => {
                    const li = document.createElement('li');
                    li.innerText = item.id;
                    xx.appendChild(li);
                });
            }else if(request.status > 400){
                alert('请求失败');
            }
        }
    }
    let page = 'page' + (n+1);
    request.open('get',`/${page}.json`);
    request.send();
    n++;
}
but4.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                const xmlObj = request.responseXML;
                const div = document.createElement('div');
                div.innerHTML = xmlObj.querySelector('warning').textContent.trim();
                document.body.appendChild(div);
            }else if(request.status > 400){
                alert('请求失败');
            }
        }
    }
    request.open('get','/4.xml');
    request.send();
}
but5.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                let jsonString = request.response;
                jsonString = JSON.parse(jsonString);
                xxx.textContent = jsonString.name;
            }else if(request.status > 400){
                alert('请求失败');
            }
        }
    }
    request.open('get','/5.json');
    request.send();
}
but.addEventListener('click',()=>{
    const httpRequest = new window.XMLHttpRequest();
    httpRequest.open('GET','/style.css');
    httpRequest.onload= ()=>{
        const style = document.createElement('style');
        style.innerHTML = httpRequest.response;
        document.head.appendChild(style);
        console.log('请求成功');
    };
    httpRequest.onerror = ()=>{
        console.log('请求失败');
    };
    httpRequest.send();

})

but2.addEventListener('click',()=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange=()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                const js2 = document.createElement('script');
                js2.innerHTML = request.response;
                document.body.appendChild(js2);
            }
        }else if(request.status > 400){
            console.log('请求失败');
        }
        
    }
    request.open('get','/2.js');
    request.send();
})

but3.addEventListener('click',()=>{
    const request = new XMLHttpRequest();
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <= 300){
                const html3 = document.createElement('div');
                html3.innerHTML = request.response;
                document.body.appendChild(html3);
            }else if(request.status > 400){
                console.log('请求失败');
            }
        }
    }
    request.open('get','/3.html');
    request.send();
})
