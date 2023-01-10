const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].onclick = function(el) {
        hasTooltip[i].appendChild(tooltip);
        tooltip.textContent = hasTooltip[i].title;
        
        tooltip.classList.toggle('tooltip_active');
        
        const closest = tooltip.closest('.has-tooltip');
        const child = closest.querySelector('.tooltip');

        hasTooltip[i].style.position = 'relative';
        tooltip.style.position = 'absolute';
        let left = closest.getBoundingClientRect().left;
        child.style.marginLeft = left + 'px';
        return false;
    };
}