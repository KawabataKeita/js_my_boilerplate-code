chrome.tabs.query({},function(tabs){
    let table = document.getElementById('table');
    document.querySelector('#tabnum').textContent = '現在開いているタブの数は['+tabs.length+']個です';
    for(let i in tabs){
        let row = table.insertRow(-1);
        let titleCell = row.insertCell(-1);
        titleCell.innerHTML = tabs[i].title;
        let urlCell = row.insertCell(-1);
        urlCell.innerHTML = tabs[i].url;
    }
});
