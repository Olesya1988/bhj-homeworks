const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');

for (let i = 0; i < hasTooltip.length; i++) {
    hasTooltip[i].onclick = function() {        
        hasTooltip[i].appendChild(tooltip);

        let check1 = hasTooltip[i].title;
        let check2 = tooltip.textContent;

        if (check1 == check2) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.textContent = hasTooltip[i].title;

            const closest = tooltip.closest('.has-tooltip');
            const child = closest.querySelector('.tooltip');

            hasTooltip[i].style.position = 'relative';
            tooltip.style.position = 'absolute';
            
            let left = closest.getBoundingClientRect().left;
            child.style.marginLeft = left + 'px';

            tooltip.classList.add('tooltip_active');
        }
        
        return false;
    };
}