const headerNav = document.querySelector('liquid-glass .header-navigation');
const navItem = document.querySelectorAll('liquid-glass .header-navigation a.navigation-item');
const header = document.querySelector('liquid-glass');

function updLayout() {
		if (window.innerWidth <= 1018) {
			headerNav.style.flexDirection = 'column';
			
				const newLiquidContainer = document.createElement('liquid-glass');
				newLiquidContainer.setAttribute('flex-center', 'false');
				newLiquidContainer.setAttribute('blur', '20');
				newLiquidContainer.setAttribute('fallback-blur', '25');
				newLiquidContainer.setAttribute('responsive', 'true');
				newLiquidContainer.setAttribute('vw-width', '75.95');
				newLiquidContainer.setAttribute('vh-height', '45.55');
				newLiquidContainer.setAttribute('radius-percent', '3.5');
				newLiquidContainer.setAttribute('bezel-width-percent', '3.5');
				newLiquidContainer.setAttribute('force-fallback', 'true');
				newLiquidContainer.classList.add('mobile-navigation-bar')
				
				newLiquidContainer.appendChild(headerNav);
				header.insertAdjacentElement('afterend', newLiquidContainer)
				navItem.forEach(item => {
						item.classList.add('mobile-border')
					})
				document.querySelectorAll('liquid-glass').forEach(lg => {
						if (lg !== header && lg.children.length === 0) {
								lg.remove()
							}
					})
				
			} else {
				headerNav.style.flexDirection = 'row';
				
				const headerContent = header.querySelector('.header-content');
				headerContent.appendChild(headerNav)
				navItem.forEach(item => {
						item.classList.remove('mobile-border')
					})
				
				document.querySelectorAll('liquid-glass').forEach(lg => {
						if (lg !== header && lg.children.length === 0) {
								lg.remove()
							}
					})
					
				}
	}

updLayout();
window.addEventListener('resize', updLayout)
