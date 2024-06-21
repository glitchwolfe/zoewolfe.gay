const codeGallery = {
	init: (selector) => {
		$.getJSON('/json/links.json?v=2', function(projects){
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
					<i class="${img}"></i>
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
			'/images/gameboycamera/gifs/raccoon_bite.gif',			
			'/images/gameboycamera/gifs/glitch_girl_camera.gif',			
			'/images/gameboycamera/photos/splodin_skeleton.png',

			'/images/gameboycamera/gifs/crow_dancing.gif',			
			'/images/gameboycamera/gifs/furby_eye.gif',			
			'/images/gameboycamera/gifs/glitch_witch_raccoon.gif',	

			'/images/gameboycamera/gifs/furby_sees_all.gif',			
			'/images/gameboycamera/gifs/raccoon_lunge.gif',			
			'/images/gameboycamera/gifs/glitch_witch_shapes.gif',

			'/images/gameboycamera/gifs/snowfall.gif',
			'/images/gameboycamera/gifs/crab_friend_loves_you.gif',
			'/images/gameboycamera/photos/babboon_tooth.png',

			'/images/gameboycamera/photos/beach_tide.png',
			'/images/gameboycamera/gifs/spinny_skull.gif',
			'/images/gameboycamera/photos/human_skull_glitch.png',

			'/images/gameboycamera/photos/mountain_friendos.png',
			'/images/gameboycamera/photos/peace.png',
			'/images/gameboycamera/gifs/crow_flock.gif',
			'/images/gameboycamera/photos/fox.png',
			'/images/gameboycamera/photos/bidoof.png',

			'/images/gameboycamera/photos/rat_fucko.png',
			'/images/gameboycamera/photos/planter.png',

			'/images/gameboycamera/photos/crt.png',
			'/images/gameboycamera/photos/eye.png',
			'/images/gameboycamera/photos/wolfe_jaw.png',

			'/images/gameboycamera/photos/blood_bird.png',
			'/images/gameboycamera/photos/swing.png',
			'/images/gameboycamera/photos/graves.png',
			'/images/gameboycamera/photos/hill_house.png',
			
			'/images/gameboycamera/photos/ollie.png',
			'/images/gameboycamera/gifs/traffic.gif',
			'/images/gameboycamera/gifs/venus.gif',
			'/images/gameboycamera/gifs/fourby.gif',
			'/images/gameboycamera/gifs/crow_takeoff.gif',

			'/images/gameboycamera/photos/spine_flower.png',
			'/images/gameboycamera/photos/trex.png',
			'/images/gameboycamera/photos/psx_controller.png',

			'/images/gameboycamera/photos/birds.png',
			'/images/gameboycamera/photos/raccoon_skull_glitch.png',
			'/images/gameboycamera/photos/sunset_tree.png',

			'/images/gameboycamera/gifs/crt_spin.gif',
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

const waveGallery = {
	init: (selector) => {
		$.getJSON('/json/waves.json?v=2', function(waves){
			console.log("WAVES", waves);
			let html = '';
			for (let wave of waves.reverse()){
				html += `
						<div class="grid about">
							<div class="col-12" style="text-align:center;">
								<h2 style="font-size:36px; margin:1em auto;">${wave.name} (${wave.year})</h2>
							</div>
						</div>
						<div class="grid about wave">

							<div class="col-12 col-sm-4 poster-col">
								<div class="grid">	
									<div class="col-12">
										<a href="${wave.link}" target="_blank">
											<img class="poster" title="${wave.name} Poster" src="/images/waves/${wave.poster}">
										</a>
									</div>
								</div>	
							</div>

							<div class="col-12 col-sm-auto hidden-xs-down">
								<div class="grid">
									<div class="col-12" style="text-align:center;">
										${waveGallery.youtubeEmbed(wave.embed)}
									</div>
								</div>
							</div>
						</div>
						
						${waveGallery.archive(wave.archive)}
				`;
			}
			$(selector).html(html);
		});
	},
	archive: (link) => {
		let html = `
			<div class="grid about">
				<div class="col-12" style="text-align:center;">
					<h3>Full project available <a href="${link}" target="_blank">here</a></h3>
				</div>
			</div>
		`;
		if(link){
			return html;
		}
		else{
			return "";
		}
	},
	embed: (link) => {
		if(link.includes("youtube")){
			return waveGallery.youtubeEmbed(link);
		}
		if(link.includes("drive.google.com")){
			return waveGallery.driveEmbed(link);
		}
		else {
			return "NO EMBED";
		}
	},
	driveEmbed: (link) => {
		let html = `
			<iframe 
				src="${link}" 
				width="711px" 
				height="400px" 
				allow="autoplay">
			</iframe>
		`;
		return(html);
	},
	youtubeEmbed: (link) => {
		let html = `
			<iframe 
				src="${link}"
				style="border:0px #ffffff none;" 
				name="segFrame" 
				scrolling="no" 
				frameborder="0" 
				marginheight="0px" 
				marginwidth="0px" 
				width="711px" 
				height="400px" 
				allowfullscreen>
			</iframe>
		`;
		return(html);
	},
}

function showHideNav(){

}

$(document).ready(() => {
	codeGallery.init('#project-gallery');
	artGallery.init('#art-gallery .masonry-grid');
	gameboyGallery.init('#gameboy-gallery .masonry-grid');
	waveGallery.init('#wave-gallery .masonry-grid');
});
