"use strict";

const gulp = require('gulp');
const { src, dest, series, watch, parallel } = require('gulp');
const fs = require('fs');
const pug = require('gulp-pug');
let browserSync = require('browser-sync').create();

// Carpetas desde el config
const configuracion = JSON.parse(fs.readFileSync("config.json", "utf8"));



// Html
function htmlDesarrollo(done) {
	return src(configuracion.directorios.pug.fuente)
		.pipe(pug({ doctype: 'html', pretty: true }).on('error', error => { console.log('Error en pug: ' + error); }))
		.pipe(dest(configuracion.directorios.pug.destino.dev))
		.pipe(browserSync.reload({ stream: true }));
}

// Browser sync
function browserSyncDesarrollo(done) {
	browserSync.init({
		injectChanges: true,
		server: {
			baseDir: "distribution/dev",
			serveStaticOptions: {
				extensions: ['html']
			},
			directory: true
		},
		port: 3000
	});

	let watcherHtml = watch(configuracion.directorios.pug.watcher);
	watcherHtml.on('change', function (path) { htmlDesarrollo(path) });

   
	watch(configuracion.directorios.pug.recargar.dev).on('change', browserSync.reload);

	done();
}


exports.htmlDesarrollo = htmlDesarrollo;


const compilarDesarrollo = series(parallel( htmlDesarrollo ), browserSyncDesarrollo);


exports.default = compilarDesarrollo;

