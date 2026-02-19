function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}
$.ripple('.navitem', {
  multi:true,
});
$.ripple('.contentsTable a', {
  multi:true
});
$.ripple('button', {
  multi:true
});
$.ripple('softr-back-to-top-button', {
  multi:true
})
$(document).on('click', 'a[href^="#"]', async function (event) {
event.preventDefault();
$('html, body').animate({
scrollTop: $($.attr(this, 'href')).offset().top-70
}, 500);
await sleep(550)
$($.attr(this, 'href')).css({"background": "#34416b", "transition": "all 0.5s ease"})
await sleep(250)
$($.attr(this, 'href')).css({"background": "#161a27", "transition": "all 0.5s ease"})
await sleep(500)
$($.attr(this, 'href')).css({"background": "#34416b", "transition": "all 0.5s ease"})
await sleep(250)
$($.attr(this, 'href')).css({"background": "#161a27", "transition": "all 0.5s ease"})
});
$(document).on('mouseover', 'a[href^="#"]', async function (event) {
event.preventDefault();
$($.attr(this, 'href')).css({"background": "#34416b", "transition": "all 0.3s ease"})
});
$(document).on('mouseleave', 'a[href^="#"]', async function (event) {
event.preventDefault();
$($.attr(this, 'href')).css("background", "#161a27")
});
