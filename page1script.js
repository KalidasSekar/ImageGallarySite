const container1 = document.createElement("div");
container1.setAttribute("class", "container1");
container1.innerHTML = `
<div><h1>Image Gallary</h1></div>
<div class="imageGrid">
<div class="pics">
<div class="first"> <a target="_blank" href="image1.jpeg"><img src="image1.jpeg"></a></div>
<div class="first"><a target="_blank" href="image2.jpeg"><img src="image2.jpeg"></a></div>
<div class="first"><a target="_blank" href="image3.jpeg"><img src="image3.jpeg"></a></div>
</div>
<div class="pics1">
<div class="first"> <a target="_blank" href="image4.jpeg"><img src="image4.jpeg"></a></div>
<div class="first"><a target="_blank" href="image5.jpeg"><img src="image5.jpeg"></a></div>
<div class="first"><a target="_blank" href="image6.jpeg"><img src="image6.jpeg"></a></div>
</div>
</div>
`;

const pagination = document.createElement("div");
pagination.setAttribute("class", "navigation");
pagination.innerHTML = `
  <a target="_self" href="index.html">&laquo;</a>
  <a target="_self" href="page1.html">1</a>
  <a target="_self" href="page2.html">2</a>
  <a target="_self" href="page3.html">3</a>
  <a target="_self" href="page4.html">4</a>
  <a target="_self" href="page5.html">5</a>
  <a target="_self" href="index.html">&raquo;</a>
`;

const container = document.createElement("div");
container.setAttribute("class", "container");
container.append(container1,pagination);
document.body.append(container);
