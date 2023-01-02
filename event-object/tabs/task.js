const tabs = document.querySelectorAll(".tab");

const contents = document.querySelectorAll(".tab__content");


for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {		
        for (let t = 0; t < tabs.length; t++) {
            tabs[t].classList.remove("tab_active");
        }        
		
		tabs[i].classList.add("tab_active");		

        for (let c = 0; c < contents.length; c++) {
            contents[c].classList.remove("tab__content_active");
        }
		
		contents[i].classList.add("tab__content_active");
	});
}