const codeGallery = {
	init: (selector) => {
		$.getJSON('/json/projects.json', function(projects){
			let html = '';
			for (let project of projects){
				html += `
				<div class="col-4 col-md-2 project">
					<div class="project-container">
						${codeGallery.icon(project.name, project.icon, project.link)}
					</div>
				</div>
				`;
			}
			$(selector).html(html);
		});
	},
	icon: (name, img, href) => {
		return `
			<div class="icon-column">
			 	<a class="project-icon" target="_blank" href="${href}">
					<img src="${img}">
				</a>
				<a class="project-title" target="_blank" href="${href}">
					<h4>${name}</h4>
				</a>
			</div>
		`;
	},
	description: (description, tools, code) => {
		let html = `
			<div class="project-description col-12 col-xs-8">
				<p>${description}</p>
				<p><a target="_blank" href="${code}">Source Code</a></p>
				<p>Built with:</p>
				<small>`;
				for(let tool of tools){ html += tool+"&nbsp;" }
		html += `
				</small>
			</div>
		`;
		return html;
	}
}

const artGallery = {
	init: (selector) => {
		let images = [
			'/images/art/meryl-glitch.jpg',
			'/images/art/LiftA-crop.jpg',
			'/images/art/XenoGlitch3D.jpg',
			
			'/images/art/owl.jpg',
			'/images/art/meryl-3d.jpg',
			'/images/art/MarilynMissingNo.png',
			
			'/images/art/Xenoglitch_2.jpg',
			'/images/art/cherry-hill.jpg',
			'/images/art/tlou-hallway.png',
			'/images/art/thirteen-one.jpg',
			
			'/images/art/ludens.jpg',
			// '/images/art/phaser.jpg',

			'/images/art/lastones-rb.jpg',

			'/images/art/3d-trees.jpg',
			'/images/art/lastones-fog.jpg',
			'/images/art/brainmush.jpg',
			'/images/art/LiftD-recolor.jpg',
			
			'/images/art/ractro.jpg',

		];
		let html = '';
		for (let image of images){
			html += artGallery.image(image);
		}
		$(selector).html(html);
		$(selector).lightGallery();
		artGallery.masonry(selector);
	},
	masonry: (selector) => {
		let image_grid = $(selector).isotope({
			itemSelector: '.grid-item',
			masonry: {
				percentPosition: true,
				gutter: 20,
			}
		});
		// Update masonry layout after each image loads
		image_grid.imagesLoaded().progress(()=>{
			image_grid.isotope('layout');
		});
	},
	image: (image) => {
		return `
			<div class="grid-item" data-src="${image}" data-download-url="${image}">
				<img src="${image}"/>
				<div class="hover-icon">
					<span><i class="fa fa-search"></i></span>
				</div>
			</div>
		`;
	}
}

const gameboyGallery = {
	init: (selector) => {
		let images = [
			'/images/gameboycamera/photo_20_purp.png',
			'/images/gameboycamera/photo_16_bro.png',
			'/images/gameboycamera/gb_04_c.png',
			'/images/gameboycamera/ghosty_1.png',
			'/images/gameboycamera/Gradient Map 1(2).png',
			'/images/gameboycamera/photo_7_gb.png',
			// '/images/gameboycamera/photo_7_purp.png',
			'/images/gameboycamera/photo_27_pink.png',
			'/images/gameboycamera/birbhouse.png',
			'/images/gameboycamera/raccoon_1.png',
			'/images/gameboycamera/treez.png',
			'/images/gameboycamera/photo_27_green.png',
			'/images/gameboycamera/photo_23_bro.png',
			'/images/gameboycamera/photo_19_pink.png',
			'/images/gameboycamera/photo_25_pink.png',
			// '/images/gameboycamera/stairs.png',
			// '/images/gameboycamera/3tree.png',
			'/images/gameboycamera/ghost-1.png',
			// '/images/gameboycamera/photo_13.png',
			// '/images/gameboycamera/photo_16_blu.png',
			// '/images/gameboycamera/photo_16_purp.png',
			// '/images/gameboycamera/photo_16.png',
			// '/images/gameboycamera/trees.png',
		];
		let html = '';
		for (let image of images){
			html += gameboyGallery.image(image);
		}
		$(selector).html(html);
		$(selector).lightGallery();
		gameboyGallery.masonry(selector);
	},
	masonry: (selector) => {
		let image_grid = $(selector).isotope({
			itemSelector: '.grid-item',
			masonry: {
				percentPosition: true,
				gutter: 20,
			}
		});
		// Update masonry layout after each image loads
		image_grid.imagesLoaded().progress(()=>{
			image_grid.isotope('layout');
		});
	},
	image: (image) => {
		return `
			<div class="grid-item" data-src="${image}" data-download-url="${image}">
				<img src="${image}"/>
				<div class="hover-icon">
					<span><i class="fa fa-search"></i></span>
				</div>
			</div>
		`;
	}
}

function showHideNav(){

}

$(document).ready(() => {
	codeGallery.init('#project-gallery');
	artGallery.init('#art-gallery .masonry-grid');
	gameboyGallery.init('#gameboy-gallery .masonry-grid');
});
