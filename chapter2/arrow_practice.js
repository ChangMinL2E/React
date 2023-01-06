const A = {
    lst: ['짜장밥','간장계란밥'],
    print: function(delay=1000) {
        setTimeout(()=> {
            console.log(this.lst.join(","));
        }, delay);
    }
}
A.print();