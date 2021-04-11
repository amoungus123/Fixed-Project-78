var images = [
    "cartoon-dad-006.jpg",
    "cartoon-mom-005.jpg",
    "how-to-draw-a-kawaii-girl-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3_J8tTk3jmYJLs7yVBcYxzDcowj8WSCMlA&usqp=CAU", 
    "love-my-family-260nw-448420321.webp",
]

var names = [
    "Vinay Goutham Pullela",
    "Sushma Pidikiti",
    "Vaishnavi Pullela",
    "Naitik Pullela",
]

var i=0;

function change() {
    if (i==4)
    {
        i=0;
    }
    document.getElementById("fam").src=images[i];
    document.getElementById("name").src=names[i];
    i++;
}
