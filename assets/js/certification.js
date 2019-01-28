const hiddenList = $(".hidden-list");
const seeMore = $("#see-more")

seeMore.click(function(){
    hiddenList.slideToggle();
    if(seeMore.text() == "Veja mais"){
        seeMore.text("Ver menos");
    }else{
        seeMore.text("Veja mais");
    }
})