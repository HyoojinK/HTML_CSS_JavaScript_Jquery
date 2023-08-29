function usedata(mcate, bcate) {
  let newdata = data[bcate].filter((value) => value.mcategory == mcate);
  console.log(newdata);
  let ulli = `<ul>`;
  newdata.forEach((value) => {
    ulli += `<li>`;
    ulli += `<a href="./detail.html?${value.name}&${bcate}">`;
    ulli += `<img src="./img/${value.image}" alt="${value.name}`;
    ulli += `<div class="info">`;
    ulli += `<p class="name">${value.name}</p>`;
    ulli += `<p class="name">${value.price}</p>`;
    ulli += `</div></a></li>`;
  });
  ulli += `</ul>`;
  $(".list .product ul").remove();
  $(".list .product").append(ulli);
}
$(".prdBox .list .subcate li").on("click", function () {
  // 클릭한 li에 on클래스를 붙히고 나머지는 on을 떼
  $(this).addClass("on").siblings().removeClass("on");
  // li안에 있는 글자만 추출("자켓, 아우터 등등등")
  let text = $(this).text();
  usedata(text);
});

/* let park = {a:"123", b:"456"}
    객체의 키이름을 직접 붙일때 아래와 같이 표현  
    park.a   /   park["a"]    == 123
    park.b   /   park["b"]    == 456

    let bcate = 객체의 키를 저장하는 변수
    객체에 키 이름을 담은 변수를 붙일때
    park[bcate]
*/
